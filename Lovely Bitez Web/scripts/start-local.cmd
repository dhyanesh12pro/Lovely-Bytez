@echo off
setlocal
set "PATH=C:\Users\dhyan\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin;%PATH%"
cd /d "%~dp0.."
call ".\node_modules\.bin\next.cmd" start -p 3000
