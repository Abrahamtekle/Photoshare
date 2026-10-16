@echo off
REM ---- One-time setup for the plate detector ----
REM Needs Python 3.10 - 3.13 (3.12 recommended): https://www.python.org/downloads/
REM Tick "Add python.exe to PATH" during install. Old Python versions can stay installed.

set "DEST=%USERPROFILE%\plate-detector"
if not exist "%DEST%" mkdir "%DEST%"
copy /y "%~dp0detector.py" "%DEST%\detector.py" >nul
copy /y "%~dp0requirements.txt" "%DEST%\requirements.txt" >nul

REM Find a compatible Python using the Windows "py" launcher
set "PY="
for %%V in (3.12 3.11 3.10 3.13) do (
    if not defined PY (
        py -%%V --version >nul 2>&1 && set "PY=py -%%V"
    )
)
if not defined PY (
    echo.
    echo No Python 3.10-3.13 found. You only have an older version.
    echo Install Python 3.12 from https://www.python.org/downloads/ then run this again.
    pause
    exit /b 1
)
echo Using: %PY%

cd /d "%DEST%"
REM Remove any old environment built with the wrong Python version
if exist venv rmdir /s /q venv

%PY% -m venv venv || (echo Failed to create venv & pause & exit /b 1)
call venv\Scripts\activate.bat
python -m pip install --upgrade pip
pip install -r requirements.txt || (echo. & echo INSTALL FAILED - see errors above & pause & exit /b 1)

echo.
echo Setup complete. Now double-click Servers.bat
pause
