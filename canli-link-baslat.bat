@echo off
chcp 65001 > nul
title Marmara SBF Kütüphanesi - Cloudflare Canlı Yayın
echo ========================================================
echo  Marmara SBF Kütüphanesi - Güvenli ve Kesintisiz Canlı Yayın
echo ========================================================
echo.

cd /d "%~dp0"

echo [*] Yerel sunucu kontrol ediliyor...
netstat -ano | findstr 3000 > nul
if errorlevel 1 (
    echo [*] Kütüphane sunucusu arka planda başlatılıyor...
    start /b node server.js
    timeout /t 2 > nul
)

echo.
echo [*] Cloudflare küresel tüneli başlatılıyor...
echo [*] Bu sayede şifre sormadan, doğrudan tıkla-aç bağlantı oluşacak.
echo [*] Aşağıdaki "https://....trycloudflare.com" linkini arkadaşınıza iletiniz:
echo.

.\cloudflared.exe tunnel --url http://127.0.0.1:3000

pause
