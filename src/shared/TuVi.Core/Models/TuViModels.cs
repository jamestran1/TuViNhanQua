namespace TuVi.Core.Models;

public enum Gender { Male, Female }

public enum StarType { ChinhTinh, PhuTinh }

public class Star
{
    public required string Name { get; set; }
    public required StarType Type { get; set; }
    public required string Element { get; set; }
    public string? Status { get; set; } // Đắc, Hãm...
    public bool IsMajor { get; set; }
}

public class Palace
{
    public int Id { get; set; }
    public required string Name { get; set; }
    public required string ZodiacSign { get; set; }
    public List<Star> Stars { get; set; } = new();
    public bool IsBodyPalace { get; set; }
}

public class ChartMetadata
{
    public required string Name { get; set; }
    public Gender Gender { get; set; }
    public DateTime BirthDateSolar { get; set; }
    public required string BirthDateLunar { get; set; }
    public required string Element { get; set; } // Mệnh
    public required string Cuc { get; set; } // Cục
}

public class TuViChart
{
    public required ChartMetadata Metadata { get; set; }
    public List<Palace> Palaces { get; set; } = new();
}