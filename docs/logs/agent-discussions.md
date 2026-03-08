# BIÊN BẢN THẢO LUẬN DỰ ÁN TỬ VI NHÂN QUẢ (Cập nhật 20:29 08/03/2026)

## Cuộc họp 1: Chọn Layout cho Mệnh Bàn (Chart Layout)
- **DS:** Muốn Hình tròn (Circular) cho "huyền bí".
- **SE-F:** Phản đối vì CSS hình tròn cực khó nhằn trên màn hình nhỏ.
- **SE-B:** Ủng hộ Hình tròn vì logic tọa độ góc thuận tiện hơn.
- **PO:** Phán quyết: Hình tròn (Circular) - Thể hiện bánh xe Luân hồi của Phật giáo.
- **Quyết định:** SE-F chấp nhận, sử dụng `transform: rotate` cho 12 cung.

## Cuộc họp 2: Thuật toán đổi lịch Âm-Dương (Lunar-Solar Converter)
- **SE-B:** Đề xuất dùng thư viện mã nguồn mở để đảm bảo độ chính xác của thiên văn.
- **QA:** Yêu cầu kiểm tra sự sai lệch giữa giờ Việt Nam và giờ Bắc Kinh để tránh an sao sai.
- **PO:** Chốt: Sử dụng giờ Hà Nội (GMT+7) cho mọi tính toán.
