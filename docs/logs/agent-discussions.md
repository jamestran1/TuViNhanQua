# BIÊN BẢN THẢO LUẬN DỰ ÁN TỬ VI NHÂN QUẢ (Cập nhật 20:35 08/03/2026)
... (lịch sử cũ) ...
## Cuộc họp 16: Thuật toán tính Cục (Cục Calculator) (Cập nhật 20:59 08/03/2026)
- **SE-B1:** Xây dựng hàm `CalculateCuc` dựa trên Thiên Can năm sinh và Địa Chi tháng sinh.
- **PO:** Cung cấp logic ngũ hành tương sinh tương khắc cho các loại Cục.
- **QA:** Kiểm thử trường hợp năm nhuận và tháng nhuận có ảnh hưởng đến Cục hay không.
- **Quyết định:** Triển khai `CucCalculator.cs` và cập nhật thông tin vào `ChartMetadata`.

## Cuộc họp 17: Mở rộng đội ngũ Reviewer & Security (Cập nhật 21:01 08/03/2026)
- **SS (Security):** Cảnh báo lỗ hổng API Key hardcoded. Yêu cầu chuyển sang Environment Variables ngay.
- **SE-R1 (Reviewer):** Phê duyệt cấu trúc `TuViModels.cs`. Yêu cầu SE-B1 tái cấu trúc thuật toán an sao theo hướng mở rộng được (Scalable).
- **PO:** Thống nhất tên gọi 14 chính tinh theo chuẩn Hán Việt thống nhất.
- **Quyết định:** Hoàn tất Task E1-T3 (14 Chính tinh). Triển khai nhật ký bảo mật `docs/security/audit.md`. Thay đổi tần suất commit theo Task Completion.
