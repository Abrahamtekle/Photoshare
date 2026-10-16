@echo off
REM ---- Osiris + Plate Detector launcher ----

REM 1. Start the plate detector in its own window (if it has been set up)
if exist "%USERPROFILE%\plate-detector\venv\Scripts\python.exe" (
    start "Plate Detector" cmd /k "cd /d %USERPROFILE%\plate-detector && venv\Scripts\python.exe detector.py"
) else (
    echo Plate detector not set up yet. Run setup_detector.bat first.
    echo Starting Osiris only...
)

REM 2. Start Osiris
cd /d "%USERPROFILE%\osiris" || (echo osiris folder not found & pause & exit /b 1)
if not exist node_modules call npm install
start "" http://localhost:3000
call npm run dev
pause
