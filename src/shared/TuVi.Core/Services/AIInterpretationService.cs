namespace TuVi.Core.Services;

using Microsoft.Extensions.Configuration;
using System.Net.Http;
using System.Text;
using System.Text.Json;
using TuVi.Core.Models;

public class AIInterpretationService
{
    private readonly HttpClient _httpClient;
    private readonly string _apiKey;

    public AIInterpretationService(HttpClient httpClient, IConfiguration configuration)
    {
        _httpClient = httpClient;
        _apiKey = configuration["Gemini:ApiKey"] ?? throw new ArgumentNullException("Gemini API Key missing!");
    }

    public async Task<string> GetKarmicInterpretationAsync(TuViChart chart)
    {
        string chartData = JsonSerializer.Serialize(chart);
        var url = $"https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key={_apiKey}";
        
        var requestBody = new
        {
            contents = new[] { new { parts = new[] { new { text = $"Luận giải nhân quả lá số: {chartData}" } } } }
        };

        var response = await _httpClient.PostAsync(url, new StringContent(JsonSerializer.Serialize(requestBody), Encoding.UTF8, "application/json"));
        
        if (response.IsSuccessStatusCode)
        {
            var result = await response.Content.ReadAsStringAsync();
            return result; // Sẽ parse chi tiết ở bước sau
        }

        return "Không thể kết nối với trí tuệ vũ trụ lúc này. Hãy gieo nhân lành và thử lại sau.";
    }
}