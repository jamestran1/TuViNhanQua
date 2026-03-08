namespace TuVi.Core.Services;

using TuVi.Core.Models;

public class MainStarService
{
    // Logic an sao Tử Vi dựa trên ngày sinh và Cục
    // Đây là phiên bản rút gọn để minh họa thuật toán
    public int CalculateTuViPosition(int lunarDay, int cucValue)
    {
        // Công thức đơn giản hóa: (Ngày + X) / Cục
        // Thực tế sẽ phức tạp hơn theo bảng tra
        int position = (lunarDay + cucValue) % 12;
        return position;
    }

    public void AnSaoTuVi(TuViChart chart, int lunarDay, int cucValue)
    {
        int pos = CalculateTuViPosition(lunarDay, cucValue);
        chart.Palaces[pos].Stars.Add(new Star 
        { 
            Name = "Tử Vi", 
            Type = StarType.ChinhTinh, 
            Element = "Thổ", 
            Status = "Miếu", 
            IsMajor = true 
        });
    }
}