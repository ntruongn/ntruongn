#!/bin/bash

# ==============================================================================
# Script chạy website cá nhân ở môi trường Local
# Hỗ trợ tự động phát hiện: Podman / Docker / Python
# ==============================================================================

PORT=4000
SITE_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

echo "========================================================="
echo "   🚀 Đang khởi động Website cá nhân (Local Server)...   "
echo "========================================================="

# 1. Kiểm tra xem có Podman hoặc Docker không
if command -v podman &> /dev/null; then
    CONTAINER_ENGINE="podman"
elif command -v docker &> /dev/null; then
    CONTAINER_ENGINE="docker"
else
    CONTAINER_ENGINE=""
fi

if [ -n "$CONTAINER_ENGINE" ]; then
    echo "[+] Đang chạy website qua $CONTAINER_ENGINE với Jekyll Live-Reload..."
    echo "[+] Truy cập website tại: http://localhost:$PORT"
    echo "[+] Nhấn Ctrl+C để dừng server."
    echo "---------------------------------------------------------"
    $CONTAINER_ENGINE run --rm -it \
        -e JEKYLL_NO_BUNDLER_REQUIRE=true \
        -v "$SITE_DIR:/srv/jekyll:Z" \
        -p $PORT:4000 \
        docker.io/jekyll/jekyll:latest \
        jekyll serve --watch --force_polling --host 0.0.0.0
    exit 0
fi

# 2. Nếu máy có Ruby & Jekyll cài sẵn
if command -v jekyll &> /dev/null; then
    echo "[+] Đang chạy với Jekyll cục bộ..."
    echo "[+] Truy cập website tại: http://localhost:$PORT"
    jekyll serve --watch --host 0.0.0.0
    exit 0
fi

# 3. Chạy qua Python HTTP Server (nếu đã có thư mục _site)
if command -v python3 &> /dev/null; then
    echo "[+] Chạy bản xem trước tĩnh bằng Python3..."
    if [ ! -d "$SITE_DIR/_site" ]; then
        echo "[!] Thư mục _site chưa được tạo. Vui lòng chạy build trước."
    fi
    echo "[+] Truy cập website tại: http://localhost:8000"
    python3 -m http.server 8000 --directory "$SITE_DIR/_site"
    exit 0
fi

echo "[X] Lỗi: Không tìm thấy Podman, Docker, Ruby hoặc Python3 trên hệ thống!"
echo "Vui lòng cài đặt Docker/Podman hoặc Ruby để chạy dự án."
exit 1
