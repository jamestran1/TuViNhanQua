# BIÊN BẢN THẢO LUẬN DỰ ÁN TỬ VI NHÂN QUẢ (Cập nhật 20:35 08/03/2026)

## Cuộc họp 6: Dữ liệu mẫu (Mock Data) để hoàn thiện UI
- **SE-F:** Yêu cầu Mock Data có đầy đủ các trường hợp: cung có nhiều sao, cung vô chính diệu.
- **SE-B:** Đồng ý tạo dữ liệu mẫu cho bộ "Sát Phá Tham" - bộ sao mạnh mẽ nhất để test giao diện.
- **QA:** Yêu cầu mock data phải có lỗi (missing data) để test khả năng xử lý lỗi của React Component.
- **Quyết định:** Tạo file `mockChart.ts` trong thư mục `src/web/tuvi-web/src/data/`.
