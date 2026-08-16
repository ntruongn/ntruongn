#!/bin/bash

# ==============================================================================
# Script Build Website Cá Nhân Ra Thư Mục _site (Production Build)
# ==============================================================================

SITE_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

echo "========================================================="
echo "   🔨 Đang Build Website Cá Nhân (Production Mode)...   "
echo "========================================================="

if command -v podman &> /dev/null; then
    CONTAINER_ENGINE="podman"
elif command -v docker &> /dev/null; then
    CONTAINER_ENGINE="docker"
else
    CONTAINER_ENGINE=""
fi

if [ -n "$CONTAINER_ENGINE" ]; then
    echo "[+] Sử dụng $CONTAINER_ENGINE để build..."
    $CONTAINER_ENGINE run --rm \
        -e JEKYLL_NO_BUNDLER_REQUIRE=true \
        -e JEKYLL_ENV=production \
        -v "$SITE_DIR:/srv/jekyll:Z" \
        docker.io/jekyll/jekyll:latest \
        jekyll build
elif command -v bundle &> /dev/null; then
    echo "[+] Sử dụng Bundle cục bộ để build..."
    bundle exec jekyll build
elif command -v jekyll &> /dev/null; then
    echo "[+] Sử dụng Jekyll cục bộ để build..."
    jekyll build
else
    echo "[X] Lỗi: Không tìm thấy Podman, Docker hoặc Jekyll để build!"
    exit 1
fi

if [ $? -eq 0 ]; then
    echo "========================================================="
    echo "   ✅ Build thành công! Các tệp tĩnh nằm trong: _site/   "
    echo "========================================================="
else
    echo "[X] Quá trình Build gặp sự cố!"
fi
