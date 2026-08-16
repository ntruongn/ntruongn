---
layout: post
title: Phân tích ngược mã độc Android (APK) chuyên sâu với Ghidra & Jadx
category: Reverse Engineering
difficulty: Intermediate
read_time: 12 min read
date: 2024-04-15
tags: [Android, Malware, Ghidra, Jadx, Static-Analysis]
description: Hướng dẫn chi tiết quy trình dịch ngược tệp APK Android, phân tích mã Dalvik bytecode, giải mã Native C++ Shared Library (.so) bằng Ghidra và bóc tách các hành vi độc hại ẩn giấu.
---

## 1. Giới thiệu tổng quan

Trong phân tích mã độc di động (Android Malware Analysis), các tác nhân đe dọa (threat actors) ngày càng áp dụng nhiều kỹ thuật làm rối mã tinh vi (Obfuscation), ẩn giấu payload trong **Native Libraries (`.so`)** hoặc thực hiện **Dynamic Code Loading (DCL)** qua DEX reflection.

Bài viết này sẽ hướng dẫn quy trình tiêu chuẩn kết hợp giữa **Jadx-GUI** (phân tích tầng Java/Kotlin) và **Ghidra** của NSA (dịch ngược tầng Native binary C/C++).

```bash
# Sơ đồ quy trình phân tích APK
[ APK Package ]
       │
       ├──> [ Jadx-GUI ] ────────> Phân tích AndroidManifest.xml & DEX Bytecode
       │
       └──> [ Unzip / APKTool ] ──> Trích xuất lib/arm64-v8a/*.so
                                          │
                                          └──> [ Ghidra SRE ] ──> Dịch ngược Native C/C++ JNI
```

---

## 2. Chuẩn bị môi trường & Công cụ

Các công cụ cần thiết:
- **Jadx-GUI:** [github.com/skylot/jadx](https://github.com/skylot/jadx) (Decompiler Java bytecode sang mã nguồn dễ đọc).
- **Ghidra:** [ghidra-sre.org](https://ghidra-sre.org/) (Software Reverse Engineering Suite).
- **Apktool:** Dùng để unpack tài nguyên, `res/`, `AndroidManifest.xml` sang dạng văn bản gốc.
- **Frida / Objection:** (Tùy chọn) Phục vụ dynamic instrumentation và hook API.

---

## 3. Bước 1: Trích xuất và phân tích AndroidManifest.xml

Trước tiên, chúng ta kiểm tra các quyền hạn nguy hiểm (`Dangerous Permissions`) và các `BroadcastReceiver` hoặc `Service` được đăng ký chạy ngầm:

```xml
<!-- Trích đoạn manifest đáng ngờ của mẫu mã độc -->
<uses-permission android:name="android.permission.RECEIVE_SMS" />
<uses-permission android:name="android.permission.READ_SMS" />
<uses-permission android:name="android.permission.SEND_SMS" />
<uses-permission android:name="android.permission.READ_CONTACTS" />
<uses-permission android:name="android.permission.INTERNET" />
<uses-permission android:name="android.permission.RECEIVE_BOOT_COMPLETED" />

<receiver android:name=".receivers.BootReceiver" android:exported="true">
    <intent-filter>
        <action android:name="android.intent.action.BOOT_COMPLETED" />
    </intent-filter>
</receiver>
```

> [!WARNING]
> Nếu ứng dụng đòi hỏi quyền đọc/nhận SMS (`RECEIVE_SMS`) kèm theo lắng nghe sự kiện khởi động máy (`BOOT_COMPLETED`), đây là dấu hiệu điển hình của Banking Trojan đánh cắp mã OTP ngân hàng.

---

## 4. Bước 2: Dịch ngược tầng Native Library với Ghidra

Mã độc hiện đại thường giấu các chuỗi kết nối máy chủ C2 (Command & Control Server) và logic mã hóa trong file thư viện C++ `libpayload.so` thay vì mã Java.

### Các bước phân tích trong Ghidra:
1. Mở Ghidra, tạo **New Project** và Import tệp `libpayload.so` trích xuất từ thư mục `lib/arm64-v8a/`.
2. Chọn kiến trúc **ARM:LE:64:v8A**.
3. Tiến hành chạy **Auto Analysis** với đầy đủ các decompiler options.
4. Tìm kiếm hàm JNI entrypoint: thường có định dạng `Java_com_example_app_NativeLoader_decryptPayload`.

```c
// Mã giả Decompile từ Ghidra cho hàm JNI
JNIEXPORT jstring JNICALL
Java_com_example_app_NativeLoader_getC2Server(JNIEnv *env, jobject thiz) {
    char encrypted_c2[] = {0x5c, 0x56, 0x5a, 0x4f, 0x01, 0x0f, 0x12, 0x1c};
    char key = 0x3a;
    char decrypted[32];
    
    for (int i = 0; i < sizeof(encrypted_c2); i++) {
        decrypted[i] = encrypted_c2[i] ^ key; // XOR decryption
    }
    decrypted[sizeof(encrypted_c2)] = '\0';
    
    return (*env)->NewStringUTF(env, decrypted);
}
```

Từ đoạn mã dịch ngược trên, chúng ta dễ dàng thấy payload sử dụng thuật toán **XOR đơn byte với khóa `0x3a`** để giải mã địa chỉ domain C2 độc hại.

---

## 5. Tự động hóa trích xuất với Python

Để quét hàng loạt mẫu mã độc (Batch Analysis), ta có thể viết script Python sử dụng `androguard` và `r2pipe` / `ghidra-bridge`:

```python
import sys
from androguard.core.bytecodes.apk import APK

def analyze_apk(apk_path):
    apk = APK(apk_path)
    print(f"[+] Package Name: {apk.get_package()}")
    print(f"[+] Permissions Requested: {len(apk.get_permissions())}")
    
    dangerous = [p for p in apk.get_permissions() if "SMS" in p or "LOCATION" in p or "CAMERA" in p]
    print(f"[!] Dangerous Permissions: {dangerous}")

if __name__ == "__main__":
    if len(sys.argv) > 1:
        analyze_apk(sys.argv[1])
```

---

## 6. Kết luận & Biện pháp phòng vệ

- Việc kết hợp **Jadx** để định vị luồng điều khiển và **Ghidra** để bóc tách Native logic giúp phân tích toàn diện mã độc Android.
- Các hệ thống EDR và Antivirus di động cần bổ sung cơ chế kiểm tra tính toàn vẹn bộ nhớ và giám sát hành vi gọi API nhạy cảm ở tầng Kernel/Native.
