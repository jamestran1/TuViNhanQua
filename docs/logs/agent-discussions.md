# BIÊN BẢN THẢO LUẬN DỰ ÁN TỬ VI NHÂN QUẢ (Cập nhật 20:35 08/03/2026)
... (lịch sử cũ) ...
## Cuộc họp 12: Chiến lược Database & Mobile UI (Cập nhật 20:51 08/03/2026)
- **SE-B2:** Khởi tạo PostgreSQL Context. Đề xuất lưu trữ lá số dạng JSONB để linh hoạt khi AI cập nhật nội dung.
- **SE-F2:** Xây dựng màn hình nhập liệu (Form) trên MAUI bằng XAML.
- **PO:** Yêu cầu thêm trường "Mục đích xem" (Sức khỏe, Công danh, Gia đạo) để AI tập trung luận giải đúng trọng tâm.
- **Quyết định:** Thêm cột `Goal` vào bảng `SavedCharts`.

## Cuộc họp 13: Giao diện Chatbot AI Nhân Quả (Cập nhật 20:53 08/03/2026)
- **SE-F4:** Triển khai `ChatInterface.tsx` bằng React.
- **SE-B3:** Tích hợp dữ liệu từ `Liễu Phàm Tứ Huấn` vào hệ thống RAG.
- **DS:** Yêu cầu hiệu ứng "Dòng chảy" cho văn bản AI.
- **Quyết định:** Sử dụng `markdown-react` để hiển thị câu trả lời AI đẹp mắt.
