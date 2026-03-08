# BIÊN BẢN THẢO LUẬN DỰ ÁN TỬ VI NHÂN QUẢ (Cập nhật 20:33 08/03/2026)

## Cuộc họp 5: Logic AI Phân tích lá số
- **SE-B:** Xây dựng phương thức `AnalyzeKarmicImpact` để gửi dữ liệu lá số (JSON) cho AI.
- **PO:** Yêu cầu AI không được dùng từ "Mê tín" mà phải dùng "Khoa học luận giải tinh tú".
- **QA:** Nhắc nhở: AI cần có giới hạn số từ (max 500 words) để tránh bị cắt ngang do token limit.
- **Quyết định:** Thêm tham số `max_tokens: 1024` và `temperature: 0.7` cho API Gemini để câu trả lời vừa sáng tạo vừa điềm tĩnh.
