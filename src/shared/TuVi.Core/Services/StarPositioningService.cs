namespace TuVi.Core.Services;

using TuVi.Core.Models;

public class StarPositioningService
{
    // C# Service để tính toán vị trí sao dựa trên Địa Chi của cung
    public string GetZodiacByPosition(int index)
    {
        string[] zodiacs = { "Tý", "Sửu", "Dần", "Mão", "Thìn", "Tỵ", "Ngọ", "Mùi", "Thân", "Dậu", "Tuất", "Hợi" };
        return zodiacs[index % 12];
    }

    public TuViChart InitializeEmptyChart(string name, Gender gender, DateTime birthDate)
    {
        var chart = new TuViChart
        {
            Metadata = new ChartMetadata
            {
                Name = name,
                Gender = gender,
                BirthDateSolar = birthDate,
                BirthDateLunar = "Đang tính...",
                Element = "Chưa xác định",
                Cuc = "Chưa xác định"
            }
        };

        for (int i = 0; i < 12; i++)
        {
            chart.Palaces.Add(new Palace
            {
                Id = i,
                Name = "Cung " + (i + 1),
                ZodiacSign = GetZodiacByPosition(i)
            });
        }

        return chart;
    }
}