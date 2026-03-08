# BIÊN BẢN THẢO LUẬN DỰ ÁN TỬ VI NHÂN QUẢ (Cập nhật 20:35 08/03/2026)
... (lịch sử cũ) ...
## Cuộc họp 11: Mở rộng đội ngũ & Thiết lập Git Worktree (Cập nhật 20:49 08/03/2026)
- **PM:** Đã thêm 4 Kỹ sư chuyên trách (2 Backend, 2 Frontend).
- **SE-B2:** Đề xuất dùng Entity Framework Core cho SQL.
- **SE-F4:** Đề xuất dùng `Zustand` làm State Management trung tâm cho Web.
- **Quyết định:** Khởi tạo 4 Worktree chuyên biệt: `api-db`, `ai-rag`, `mobile-ui`, `state-sync`.

## Cuộc họp 12: Chiến lược Database & Mobile UI (Cập nhật 20:51 08/03/2026)
- **SE-B2:** Khởi tạo PostgreSQL Context. Đề xuất lưu trữ lá số dạng JSONB để linh hoạt khi AI cập nhật nội dung.
- **SE-F2:** Xây dựng màn hình nhập liệu (Form) trên MAUI bằng XAML.
- **PO:** Yêu cầu thêm trường "Mục đích xem" (Sức khỏe, Công danh, Gia đạo) để AI tập trung luận giải đúng trọng tâm.
- **Quyết định:** Thêm cột `Goal` vào bảng `SavedCharts`.
