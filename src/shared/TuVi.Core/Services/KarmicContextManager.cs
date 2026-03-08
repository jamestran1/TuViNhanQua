namespace TuVi.Core.Services;

using System.Collections.Generic;
using TuVi.Core.Models;

public class KarmicContextManager
{
    private readonly Dictionary<string, string> _karmicMappings = new()
    {
        { "Địa Không", "Nghiệp lực về sự mất mát, bài học về sự buông xả." },
        { "Địa Kiếp", "Nghiệp lực về sự cản trở, bài học về sự nhẫn nhục." },
        { "Cô Thần", "Nghiệp duyên về sự cô độc, bài học về lòng từ bi hỷ xả." },
        { "Quả Tú", "Nghiệp duyên về sự lẻ loi, bài học về sự kết nối cộng đồng." }
    };

    public string InjectKarmicKnowledge(List<Palace> palaces)
    {
        var context = "Dưới đây là một số triết lý nhân quả bổ trợ cho các sao xuất hiện trên lá số:\n";
        var foundStars = new HashSet<string>();

        foreach (var palace in palaces)
        {
            foreach (var star in palace.stars)
            {
                if (_karmicMappings.TryGetValue(star.name, out var knowledge))
                {
                    if (foundStars.Add(star.name))
                    {
                        context += $"- {star.name}: {knowledge}\n";
                    }
                }
            }
        }
        
        return foundStars.Count > 0 ? context : string.Empty;
    }
}