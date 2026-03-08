# Bản Thiết Kế Dự Án: Ứng Dụng Tử Vi Nhân Quả

## 1. Tổng Quan (Overview)
Ứng dụng Tử Vi kết hợp triết lý Nhân Quả Phật giáo, hỗ trợ đa nền tảng (Mobile & Web) với sự trợ giúp của AI để luận giải và hướng thiện.

## 2. Công Nghệ (Tech Stack)
- **Backend:** .NET 8 Web API (C#).
- **Mobile App:** .NET MAUI (C# / XAML).
- **Web App:** Next.js (React / TypeScript / Tailwind CSS).
- **Database:** PostgreSQL.
- **AI:** Google Gemini API / OpenAI GPT-4 với kỹ thuật RAG (Retrieval-Augmented Generation).

## 3. Kiến Trúc Hệ Thống (Architecture)
- **Shared Logic:** Thư viện C# dùng chung cho Backend và MAUI để tính toán an sao Tử Vi chính xác.
- **AI Orchestrator:** Xử lý Prompt Engineering kết hợp dữ liệu kinh điển Phật giáo để AI luận giải theo hướng Nhân Quả.
- **Data Flow:** Next.js và MAUI gọi chung một hệ thống API để đảm bảo lá số và lời giải đồng nhất.

## 4. Logic Tử Vi & AI Nhân Quả
- **An sao:** Đầy đủ 110+ sao theo các trường phái uy tín.
- **Luận giải AI:** 
    - Phân tích tổ hợp sao dưới lăng kính "Nghiệp - Nhân - Quả".
    - Hướng dẫn cải mệnh qua việc tu tập tâm tính và hành thiện.
    - Chatbot tương tác thời gian thực để giải đáp thắc mắc sâu.

## 5. Thiết Kế Giao Diện (Mystical UI/UX)
- **Phong cách:** Huyền bí, tĩnh lặng, kết hợp nghệ thuật Phật giáo (Hoa sen, Pháp luân) và hiện đại.
- **Màu sắc:** Tím huyền bí, Xanh đêm, Vàng kim, Cam đất.
- **Hiệu ứng:** Glassmorphism, các hiệu ứng hạt (particles) và ánh sáng tỏa khi tương tác với các vì sao.

## 6. Lộ Trình Triển Khai (Roadmap)
1. Xây dựng thư viện tính toán Tử Vi (Core Logic).
2. Phát triển Backend API & Tích hợp AI RAG.
3. Phát triển Mobile App (MAUI) & Web App (Next.js) song song.
4. Kiểm thử và Tối ưu hóa trải nghiệm người dùng.
