# BIÊN BẢN THẢO LUẬN DỰ ÁN TỬ VI NHÂN QUẢ (Cập nhật 20:35 08/03/2026)
... (lịch sử cũ) ...
## Cuộc họp 17: Mở rộng đội ngũ Reviewer & Security (Cập nhật 21:01 08/03/2026)
- **SS (Security):** Cảnh báo lỗ hổng API Key hardcoded. Yêu cầu chuyển sang Environment Variables ngay.
- **SE-R1 (Reviewer):** Phê duyệt cấu trúc `TuViModels.cs`. Yêu cầu SE-B1 tái cấu trúc thuật toán an sao theo hướng mở rộng được (Scalable).
- **PO:** Thống nhất tên gọi 14 chính tinh theo chuẩn Hán Việt thống nhất.
- **Quyết định:** Hoàn tất Task E1-T3 (14 Chính tinh). Triển khai nhật ký bảo mật `docs/security/audit.md`. Thay đổi tần suất commit theo Task Completion.

## Cuộc họp 18: Bảo mật AI & Cấu trúc Mobile Shell (Cập nhật 21:04 08/03/2026)
- **SS:** Yêu cầu bọc API Key vào `IConfiguration`. Không chấp nhận hardcode chuỗi API.
- **SE-F2:** Phản ánh lỗi hiển thị SVG trên MAUI Android.
- **SE-R2:** Yêu cầu dùng Flyout Navigation cho Mobile thay vì TabBar để giữ phong cách "Huyền bí".
- **Quyết định:** Sửa lại `AIInterpretationService` và cập nhật `AppShell.xaml`.
