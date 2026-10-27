@echo off
chcp 65001 > nul
title Marmara Üniversitesi SBF Kütüphane Sistemi
echo ========================================================
echo  Marmara Universitesi Siyasal Bilgiler Fakultesi
echo  Kutuphane Yonetim ve Katalog Sistemi (TR / FR / EN)
echo ========================================================
echo.

cd /d "%~dp0"

if not exist node_modules (
    echo [*] Gerekli paketler yukleniyor, lutfen bekleyin...
    call npm.cmd install --no-audit --no-fund
    echo [*] Kurulum tamamlandi.
    echo.
)

echo [*] Kutuphane sunucusu baslatiliyor...
echo [*] Yerel erisim: http://localhost:3000
echo [*] Tarayici otomatik aciliyor...

start http://localhost:3000
node server.js

pause
