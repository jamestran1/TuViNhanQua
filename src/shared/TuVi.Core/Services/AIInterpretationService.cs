namespace TuVi.Core.Services;

using System.Net.Http;
using System.Text;
using System.Text.Json;
using TuVi.Core.Models;

public class AIInterpretationService
{
    private readonly HttpClient _httpClient;
    private readonly string _apiKey = "YOUR_GEMINI_API_KEY_HERE"; // Sẽ được cấu hình qua User Secrets

    public AIInterpretationService(HttpClient httpClient)
    {
        _httpClient = httpClient;
    }

    public async Task<string> GetKarmicInterpretationAsync(TuViChart chart)
    {
        // Chuyển dữ liệu lá số thành chuỗi để gửi cho AI
        string chartData = JsonSerializer.Serialize(chart);
        
        var requestBody = new
        {
            contents = new[]
            {
                new { parts = new[] { new { text = $"Phân tích lá số tử vi sau theo quan điểm Nhân Quả của đạo Phật: {chartData}" } } }
            }
        };

        var content = new StringContent(JsonSerializer.Serialize(requestBody), Encoding.UTF8, "application/json");
        
        // Giả lập gọi API (Sẽ hoàn thiện khi có Key thực tế)
        return "Lời giải AI sẽ xuất hiện tại đây dựa trên triết lý Nhân quả...";
    }
}