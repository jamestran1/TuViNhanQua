namespace TuVi.Core.Data;

using System.Collections.Generic;
using TuVi.Core.Models;

public static class StarLibrary
{
    public static readonly Dictionary<string, StarTemplate> AllStars = new()
    {
        // Chính tinh
        { "Tử Vi", new StarTemplate("Tử Vi", "Thổ", StarType.ChinhTinh) },
        { "Thiên Phủ", new StarTemplate("Thiên Phủ", "Thổ", StarType.ChinhTinh) },
        
        // Trung tinh & Phụ tinh
        { "Văn Xương", new StarTemplate("Văn Xương", "Kim", StarType.PhuTinh) },
        { "Văn Khúc", new StarTemplate("Văn Khúc", "Thủy", StarType.PhuTinh) },
        { "Tả Phụ", new StarTemplate("Tả Phụ", "Thổ", StarType.PhuTinh) },
        { "Hữu Bật", new StarTemplate("Hữu Bật", "Thổ", StarType.PhuTinh) },
        { "Lộc Tồn", new StarTemplate("Lộc Tồn", "Thổ", StarType.PhuTinh) },
        { "Kình Dương", new StarTemplate("Kình Dương", "Kim", StarType.PhuTinh) },
        { "Đà La", new StarTemplate("Đà La", "Kim", StarType.PhuTinh) },
        { "Địa Không", new StarTemplate("Địa Không", "Hỏa", StarType.PhuTinh) },
        { "Địa Kiếp", new StarTemplate("Địa Kiếp", "Hỏa", StarType.PhuTinh) }
    };
}

public record StarTemplate(string Name, string Element, StarType Type);