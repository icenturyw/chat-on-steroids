@echo off
setlocal

cd /d "%~dp0.."

echo ========================================
echo Chat On Steroids - Dev Launcher
echo Project directory: %CD%
echo ========================================
echo.

where node >nul 2>nul
if errorlevel 1 (
    echo [ERROR] Node.js was not found.
    echo Install Node.js 22 or newer, then run this file again.
    echo.
    pause
    exit /b 1
)

where npm >nul 2>nul
if errorlevel 1 (
    echo [ERROR] npm was not found.
    echo Check your Node.js installation and PATH.
    echo.
    pause
    exit /b 1
)

set "COS_PROJECT_ROOT=%CD%"
echo [CLEAN] Checking for old Chat On Steroids dev processes...
powershell -NoProfile -ExecutionPolicy Bypass -Command ^
  "$root=$env:COS_PROJECT_ROOT;" ^
  "$targets=Get-CimInstance Win32_Process | Where-Object {" ^
  "  ($_.Name -ieq 'node.exe' -or $_.Name -ieq 'electron.exe') -and" ^
  "  (($_.CommandLine -and $_.CommandLine -like ('*' + $root + '*')) -or ($_.ExecutablePath -and $_.ExecutablePath -like ($root + '*')))" ^
  "};" ^
  "foreach($p in $targets){ Write-Host ('[CLEAN] Stopping PID ' + $p.ProcessId + ' ' + $p.Name); Stop-Process -Id $p.ProcessId -Force -ErrorAction SilentlyContinue }"
if errorlevel 1 (
    echo [WARN] Could not complete old-process cleanup. Continuing anyway...
)
timeout /t 1 /nobreak >nul

if not exist "node_modules\" (
    echo [INFO] node_modules was not found. Installing dependencies...
    call npm ci
    if errorlevel 1 (
        echo.
        echo [ERROR] npm ci failed.
        pause
        exit /b 1
    )
    echo.
)

echo [START] Running: npm run dev
echo Close this window to stop the development server.
echo.

call npm run dev

set "EXIT_CODE=%ERRORLEVEL%"
echo.
echo ========================================
echo Project exited with code: %EXIT_CODE%
echo ========================================
pause
exit /b %EXIT_CODE%
