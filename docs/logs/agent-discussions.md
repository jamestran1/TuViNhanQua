# BIÊN BẢN THẢO LUẬN DỰ ÁN TỬ VI NHÂN QUẢ (Cập nhật 20:31 08/03/2026)

## Cuộc họp 3: Tích hợp AI vào Backend
- **SE-B:** Gặp lỗi khi cài đặt thư viện SDK Google AI.
- **Quyết định:** Chuyển sang dùng `HttpClient` và gọi trực tiếp Gemini REST API. Cách này giúp code nhẹ hơn và dễ dàng debug lỗi mạng hơn.
- **PO:** Yêu cầu thêm cơ chế "Caching" cho lời giải AI để tiết kiệm chi phí API khi người dùng xem đi xem lại một lá số.

## Cuộc họp 4: Triển khai UI Mệnh Bàn hình tròn
- **DS:** Cung cấp thông số: Tâm vòng tròn là 50%, bán kính các cung là 40%.
- **SE-F:** Đề xuất dùng `absolute positioning` kết hợp `transform-origin` tại tâm để xoay 12 cung chính xác.
- **Quyết định:** Sử dụng `Framer Motion` cho toàn bộ animation của Mệnh Bàn.
