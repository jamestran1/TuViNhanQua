namespace TuVi.Core.Services;

using System.Collections.Generic;
using TuVi.Core.Models;

public class MainStarService
{
    private readonly string[] _zodiacs = { "Tý", "Sửu", "Dần", "Mão", "Thìn", "Tỵ", "Ngọ", "Mùi", "Thân", "Dậu", "Tuất", "Hợi" };

    // Bảng tra vị trí sao Tử Vi dựa trên Ngày (LunarDay) và Cục (CucValue)
    // 2: Thủy, 3: Mộc, 4: Kim, 5: Thổ, 6: Hỏa
    public int GetTuViPosition(int day, int cuc)
    {
        // Thuật toán chuẩn hóa vị trí Tử Vi (Simplified for logic review)
        return (day + cuc) % 12;
    }

    public void An14ChinhTinh(TuViChart chart, int day, int cucValue)
    {
        int tvPos = GetTuViPosition(day, cucValue);
        
        // Nhóm Tử Vi (6 sao)
        AddStar(chart, tvPos, "Tử Vi", "Thổ");
        AddStar(chart, (tvPos + 11) % 12, "Liêm Trinh", "Hỏa");
        AddStar(chart, (tvPos + 8) % 12, "Thiên Đồng", "Thủy");
        AddStar(chart, (tvPos + 7) % 12, "Vũ Khúc", "Kim");
        AddStar(chart, (tvPos + 6) % 12, "Thái Dương", "Hỏa");
        AddStar(chart, (tvPos + 4) % 12, "Thiên Cơ", "Mộc");

        // Nhóm Thiên Phủ (8 sao - Đối xứng với Tử Vi qua trục Dần-Thân)
        int tpPos = (26 - tvPos) % 12;
        AddStar(chart, tpPos, "Thiên Phủ", "Thổ");
        AddStar(chart, (tpPos + 1) % 12, "Thái Âm", "Thủy");
        AddStar(chart, (tpPos + 2) % 12, "Tham Lang", "Thủy");
        AddStar(chart, (tpPos + 3) % 12, "Cự Môn", "Thủy");
        AddStar(chart, (tpPos + 4) % 12, "Thiên Tướng", "Thủy");
        AddStar(chart, (tpPos + 5) % 12, "Thiên Lương", "Thổ");
        AddStar(chart, (tpPos + 6) % 12, "Thất Sát", "Kim");
        AddStar(chart, (tpPos + 10) % 12, "Phá Quân", "Thủy");
    }

    private void AddStar(TuViChart chart, int pos, string name, string element)
    {
        chart.Palaces[pos].Stars.Add(new Star 
        { 
            Name = name, 
            Type = StarType.ChinhTinh, 
            Element = element, 
            Status = "Bình", 
            IsMajor = true 
        });
    }
}