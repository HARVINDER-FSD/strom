@echo off
echo ========================================
echo   STORM Contact Form - Starting...
echo ========================================
echo.
echo Starting Backend Server (Port 3001)...
start cmd /k "cd /d %~dp0 && npm run server"
timeout /t 3 /nobreak >nul
echo.
echo Starting Frontend (Port 5173)...
start cmd /k "cd /d %~dp0 && npm run dev"
echo.
echo ========================================
echo   Both servers are starting!
echo   Frontend: http://localhost:5173
echo   Backend:  http://localhost:3001
echo ========================================
echo.
echo Press any key to exit this window...
pause >nul
