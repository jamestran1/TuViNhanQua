# BIÊN BẢN THẢO LUẬN DỰ ÁN TỬ VI NHÂN QUẢ (Cập nhật 20:35 08/03/2026)

## Cuộc họp 6: Dữ liệu mẫu (Mock Data) để hoàn thiện UI
- **SE-F:** Yêu cầu Mock Data có đầy đủ các trường hợp: cung có nhiều sao, cung vô chính diệu.
- **SE-B:** Đồng ý tạo dữ liệu mẫu cho bộ "Sát Phá Tham" - bộ sao mạnh mẽ nhất để test giao diện.
- **QA:** Yêu cầu mock data phải có lỗi (missing data) để test khả năng xử lý lỗi của React Component.
- **Quyết định:** Tạo file `mockChart.ts` trong thư mục `src/web/tuvi-web/src/data/`.

## Cuộc họp 7: Tích hợp RAG Context vào AI Prompt (Cập nhật 20:41 08/03/2026)
- **PO:** Yêu cầu AI tự động tra cứu dữ liệu nhân quả cho từng nhóm sao cụ thể.
- **SE-B:** Xây dựng `KarmicContextManager.cs` để quét các sao "nhạy cảm" (như Không Kiếp, Cô Quả) và nạp thêm triết lý Phật giáo vào Prompt.
- **QA:** Cần giới hạn độ dài câu trả lời của AI để tránh người dùng bị ngợp.
- **Quyết định:** Triển khai cơ chế "Dynamic Context Injection" cho Backend.
