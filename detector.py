"""
Plate detector
- Reads video from a webcam, video file, or RTSP/IP camera URL
- Shows a live preview window with boxes around plates (press Q to quit)
- Logs every new plate to plates.csv
- Serves recent plates as JSON at http://localhost:5001/plates
  (so Osiris or any web page can fetch them)
"""

import csv
import json
import os
import threading
import time
from datetime import datetime
from http.server import BaseHTTPRequestHandler, HTTPServer

import cv2
from fast_alpr import ALPR

# ------------------------- SETTINGS -------------------------
SOURCE = 0                 # 0 = default webcam, or "video.mp4", or "rtsp://user:pass@ip/stream"
MIN_CONFIDENCE = 0.80      # ignore reads below this (0-1)
DEDUP_SECONDS = 10         # don't re-log the same plate within this many seconds
SHOW_WINDOW = True         # False to run without a preview window
PORT = 5001                # local API port
LOG_FILE = os.path.join(os.path.dirname(os.path.abspath(__file__)), "plates.csv")
MAX_RECENT = 100           # how many plates the API keeps in memory
# ------------------------------------------------------------

recent = []                # newest first
recent_lock = threading.Lock()
last_seen = {}             # plate text -> timestamp


class Handler(BaseHTTPRequestHandler):
    def _send(self, code, payload):
        body = json.dumps(payload).encode()
        self.send_response(code)
        self.send_header("Content-Type", "application/json")
        self.send_header("Access-Control-Allow-Origin", "*")  # lets Osiris (port 3000) fetch it
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def do_OPTIONS(self):
        self._send(204, {})

    def do_GET(self):
        if self.path.startswith("/plates"):
            with recent_lock:
                self._send(200, list(recent))
        else:
            self._send(404, {"error": "not found"})

    def log_message(self, *args):
        pass  # keep the console quiet


def start_server():
    server = HTTPServer(("127.0.0.1", PORT), Handler)
    threading.Thread(target=server.serve_forever, daemon=True).start()
    print(f"API running: http://localhost:{PORT}/plates")


def log_plate(text, confidence):
    now = time.time()
    if now - last_seen.get(text, 0) < DEDUP_SECONDS:
        return
    last_seen[text] = now

    entry = {
        "plate": text,
        "confidence": round(float(confidence), 3),
        "time": datetime.now().isoformat(timespec="seconds"),
    }
    with recent_lock:
        recent.insert(0, entry)
        del recent[MAX_RECENT:]

    new_file = not os.path.exists(LOG_FILE)
    with open(LOG_FILE, "a", newline="") as f:
        w = csv.writer(f)
        if new_file:
            w.writerow(["time", "plate", "confidence"])
        w.writerow([entry["time"], entry["plate"], entry["confidence"]])

    print(f"[{entry['time']}] {text}  ({entry['confidence']})")


def main():
    start_server()

    print("Loading models (first run downloads them)...")
    alpr = ALPR(
        detector_model="yolo-v9-t-384-license-plate-end2end",
        ocr_model="cct-xs-v1-global-model",
    )

    cap = cv2.VideoCapture(SOURCE)
    if not cap.isOpened():
        print(f"Could not open video source: {SOURCE}")
        return

    print("Running. Press Q in the preview window (or Ctrl+C) to stop.")
    try:
        while True:
            ok, frame = cap.read()
            if not ok:
                if isinstance(SOURCE, str) and not SOURCE.startswith("rtsp"):
                    break  # video file ended
                time.sleep(0.5)  # camera hiccup, retry
                continue

            results = alpr.predict(frame)
            for r in results:
                if r.ocr and r.ocr.text and r.ocr.confidence:
                    conf = r.ocr.confidence
                    if isinstance(conf, (list, tuple)):
                        conf = sum(conf) / len(conf)
                    if conf >= MIN_CONFIDENCE:
                        log_plate(r.ocr.text, conf)

            if SHOW_WINDOW:
                cv2.imshow("Plate Detector", alpr.draw_predictions(frame))
                if cv2.waitKey(1) & 0xFF in (ord("q"), ord("Q")):
                    break
    except KeyboardInterrupt:
        pass
    finally:
        cap.release()
        cv2.destroyAllWindows()


if __name__ == "__main__":
    main()
