# Danh Sách Task Chi Tiết - Dự Án Tử Vi Nhân Quả

## Epic 1: Core Intelligence (Dữ liệu & AI)
- **E1-T1: [SE] Định nghĩa JSON Schema cho Lá Số.** Thiết kế cấu trúc dữ liệu JSON bao gồm 12 cung, danh sách sao, tọa độ, và các thuộc tính (Hành, Đắc/Hãm).
- **E1-T2: [PO] Cung cấp thuật toán đổi lịch & an sao.** Tài liệu hóa các bước tính toán thiên văn và quy tắc an 110+ sao.
- **E1-T3: [SE] Code thư viện C# Core Astronomy.** Xây dựng thư viện .NET Standard để an sao dựa trên tài liệu của PO.
- **E1-T4: [QA] Xây dựng bộ dữ liệu Test (50 lá số mẫu).** Tạo file JSON chứa dữ liệu đầu vào và kết quả mong đợi để kiểm thử thư viện an sao.
- **E1-T5: [PO] Biên soạn Knowledge Base (RAG).** Tổng hợp tài liệu triết lý Nhân quả Phật giáo định dạng Markdown/PDF.
- **E1-T6: [SE] Tích hợp Vector Database (Pinecone/Milvus).** Thiết lập DB để lưu trữ và truy vấn kiến thức cho AI.
- **E1-T7: [SE] Xây dựng API Chatbot & Báo cáo.** Endpoint kết nối Gemini/GPT để thực hiện luận giải.
- **E1-T8: [PO] Tối ưu Prompt Engineering.** Tinh chỉnh System Prompt để AI trả lời đúng tone "Từ bi - Trí tuệ".

## Epic 2: Visual Experience (Giao diện & Tương tác)
- **E2-T1: [DS] Thiết kế bộ UI Component (Mystical Kit).** Nút bấm, bảng màu, icon theo phong cách huyền bí.
- **E2-T2: [SE] Xây dựng Skeleton Web (Next.js).** Khởi tạo project Next.js và cấu trúc trang chính.
- **E2-T3: [SE] Xây dựng UI Shell cho MAUI.** Khởi tạo project MAUI và cấu trúc Navigation.
- **E2-T4: [DS] Prototyping Lá số Tử Vi tương tác.** Thiết kế trải nghiệm khi chạm/hover vào các vì sao.
- **E2-T5: [SE] Code Logic hiển thị Lá số (Rendering).** Component hiển thị lá số dựa trên JSON Schema (Web & Mobile).
- **E2-T6: [SE] Tích hợp Chatbot UI mượt mà.** Giao diện hội thoại AI với hiệu ứng typing.

## Epic 3: User Ecosystem (Hệ sinh thái Người dùng)
- **E3-T1: [SE] Thiết lập Auth System (.NET 8 Identity).** Hệ thống đăng ký, đăng nhập bằng JWT.
- **E3-T2: [DS] Thiết kế Login/Profile Screens.** Giao diện cho các trang quản lý tài khoản.
- **E3-T3: [PO] Xây dựng Luồng trải nghiệm Người dùng (User Flow).** Sơ đồ hành trình người dùng trong app.
- **E3-T4: [SE] Xây dựng Database Schema cho User Data.** Bảng User, SavedCharts, AIHistory.
- **E3-T5: [SE] Tích hợp Push Notification.** Hệ thống thông báo nhắc nhở giờ lành, ngày tốt.
- **E3-T6: [QA] Kiểm thử bảo mật & Luồng Auth.** Test các lỗ hổng đăng nhập và phân quyền.
- **E3-T7: [SE] Đồng bộ hóa (Sync) Mobile & Web.** Đảm bảo dữ liệu đồng nhất giữa các nền tảng.
