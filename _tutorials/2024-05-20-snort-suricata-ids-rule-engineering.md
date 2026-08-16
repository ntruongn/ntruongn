---
layout: post
title: Hướng dẫn viết và tối ưu hóa bộ luật Snort & Suricata IDS phát hiện tấn công mạng
category: Network Defense
difficulty: Advanced
read_time: 15 min read
date: 2024-05-20
tags: [Snort, Suricata, IDS, PCAP, Network-Defense]
description: Phân tích cú pháp chuyên sâu các Rule trong Snort và Suricata, kỹ thuật bóc tách payload HTTP/DNS, sử dụng luồng flowbits và tối ưu hóa hiệu năng phát hiện xâm nhập thời gian thực.
---

## 1. Tổng quan về Network IDS/IPS

**Snort** và **Suricata** là hai hệ thống phát hiện và ngăn chặn xâm nhập mạng (IDS/IPS) mã nguồn mở phổ biến nhất thế giới. Điểm khác biệt quan trọng:
- **Snort 3:** Thiết kế hướng module đa luồng, hỗ trợ dynamic plugin inspectors.
- **Suricata:** Hỗ trợ xử lý đa luồng nguyên bản (Native Multi-threading), phân tích tầng ứng dụng (HTTP, TLS, DNS, SSH, SMB) và tích hợp sẵn Lua scripting.

---

## 2. Cấu trúc cơ bản của một Rule

Một Rule chuẩn bao gồm **Header** (Action, Protocol, IP/Port) và **Options** (Các tiêu chí lọc nội dung và metadata):

```snort
[Action] [Proto] [Src_IP] [Src_Port] -> [Dst_IP] [Dst_Port] ([Rule Options;])
```

Ví dụ Rule phát hiện tấn công khai thác lỗ hổng Log4j (CVE-2021-44228) qua HTTP Header:

```snort
alert http any any -> $HOME_NET any (
    msg:"SEC-ALERT Exploit Log4j JNDI Lookup Attempt";
    flow:to_server,established;
    content:"${jndi:",nocase;
    http_header;
    reference:cve,2021-44228;
    classtype:attempted-admin;
    sid:1000001;
    rev:1;
)
```

---

## 3. Kỹ thuật nâng cao: Quản lý trạng thái với `flowbits`

`flowbits` cho phép lưu vết và kết hợp nhiều hành vi diễn ra trên cùng một phiên TCP (Session) để giảm tỉ lệ cảnh báo sai (False Positive).

### Kịch bản:
- **Giai đoạn 1:** Kẻ tấn công tải lên web shell dạng `.jsp` hoặc `.php`.
- **Giai đoạn 2:** Kẻ tấn công truy cập file web shell vừa tải lên để thực thi lệnh.

```snort
# Rule 1: Đánh dấu luồng khi phát hiện upload webshell
alert tcp $EXTERNAL_NET any -> $HTTP_SERVERS $HTTP_PORTS (
    msg:"MALWARE-WEB Upload WebShell Pattern Detected";
    flow:to_server,established;
    content:"multipart/form-data"; http_header;
    content:"filename=\""; http_client_body;
    content:".jsp"; http_client_body;
    flowbits:set,webshell.uploaded;
    flowbits:noalert;
    sid:1000002; rev:1;
)

# Rule 2: Kích hoạt cảnh báo khi truy cập file webshell đã được đánh dấu
alert tcp $EXTERNAL_NET any -> $HTTP_SERVERS $HTTP_PORTS (
    msg:"MALWARE-WEB Execution of Uploaded WebShell";
    flow:to_server,established;
    flowbits:isset,webshell.uploaded;
    content:"GET"; http_method;
    content:"cmd="; http_uri;
    classtype:web-application-attack;
    sid:1000003; rev:1;
)
```

---

## 4. Tối ưu hiệu năng Rule trên đường truyền tốc độ cao (10Gbps+)

1. **Tránh kiểm tra chuỗi quá ngắn:** Luôn đặt `content` có độ dài tối thiểu từ 4-8 bytes để engine kích hoạt thuật toán tìm kiếm Boyer-Moore / Aho-Corasick hiệu quả.
2. **Sử dụng `fast_pattern`:** Chỉ định rõ chuỗi ký tự hiếm xuất hiện nhất trong gói tin làm pattern nhận diện đầu tiên.
3. **Giới hạn phạm vi tìm kiếm:** Sử dụng `depth`, `offset`, `distance`, `within` thay vì quét toàn bộ payload.

```snort
# Tối ưu với fast_pattern và offset
alert tcp any any -> $HTTP_SERVERS 80 (
    msg:"EXPLOIT Fast Pattern Optimized SQL Injection";
    flow:to_server,established;
    content:"UNION SELECT"; nocase; http_uri; fast_pattern;
    content:"information_schema"; distance:0; http_uri;
    sid:1000004; rev:1;
)
```

---

## 5. Kiểm thử Rule với tệp PCAP và Suricata CLI

```bash
# Kiểm tra cú pháp bộ luật
suricata -T -c /etc/suricata/suricata.yaml -v

# Chạy kiểm thử ngoại tuyến trên tệp capture PCAP
suricata -r malicious_traffic.pcap -c /etc/suricata/suricata.yaml -l ./logs/

# Kiểm tra log cảnh báo được ghi ra file fast.log / eve.json
cat ./logs/fast.log | jq .
```
