namespace TuVi.Core.Services;

public class CucCalculator
{
    // Bảng tra Cục dựa trên Can Năm và Chi Tháng
    // 2: Thủy, 3: Mộc, 4: Kim, 5: Thổ, 6: Hỏa
    public int GetCucValue(string canNam, string chiThang)
    {
        // Giả lập logic tra bảng: (Ví dụ Can Giáp/Kỷ và Chi Tý/Sửu -> Hải Trung Kim -> Kim Tứ Cục)
        if (canNam == "Giáp" || canNam == "Kỷ")
        {
            return 4; // Kim Tứ Cục
        }
        return 2; // Mặc định Thủy Nhị Cục để test
    }

    public string GetCucName(int cucValue)
    {
        return cucValue switch
        {
            2 => "Thủy Nhị Cục",
            3 => "Mộc Tam Cục",
            4 => "Kim Tứ Cục",
            5 => "Thổ Ngũ Cục",
            6 => "Hỏa Lục Cục",
            _ => "Chưa xác định"
        };
    }
}