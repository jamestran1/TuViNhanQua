# NHẬT KÝ BẢO MẬT (SECURITY AUDIT LOG) - DỰ ÁN TỬ VI NHÂN QUẢ

| Ngày | Vấn đề phát hiện | Mức độ | Trạng thái | Giải pháp |
|:--- |:--- |:--- |:--- |:--- |
| 08/03/2026 | API Key (Gemini) hardcoded trong `AIInterpretationService.cs`. | **Cao** | Đang xử lý | Chuyển sang sử dụng `dotnet user-secrets` trong dev và Env Vars trong production. |
| 08/03/2026 | CORS Policy chưa được thiết lập chặt chẽ cho Web & Mobile. | **Trung bình** | Chờ xử lý | Giới hạn origin chỉ từ domain chính thức và localhost khi dev. |
| 08/03/2026 | Log API chứa thông tin cá nhân người dùng (PII). | **Thấp** | Chờ xử lý | Filter thông tin Name/BirthDate ra khỏi logs tập trung. |
