using Microsoft.AspNetCore.Mvc;
using TuVi.Core.Models;
using TuVi.Core.Services;

namespace TuVi.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class TuViController : ControllerBase
{
    private readonly StarPositioningService _positionService;
    private readonly MainStarService _starService;

    public TuViController()
    {
        _positionService = new StarPositioningService();
        _starService = new MainStarService();
    }

    [HttpPost("generate")]
    public ActionResult<TuViChart> GenerateChart([FromBody] ChartRequest request)
    {
        // ... (logic cũ)
        return Ok(new TuViChart { Metadata = new ChartMetadata { Name = request.Name, BirthDateLunar = "Giáp Tý", Element = "Kim", Cuc = "Thủy", BirthDateSolar = request.BirthDate } });
    }

    [HttpGet("share/{guid}")]
    public ActionResult<TuViChart> GetChartByGuid(Guid guid)
    {
        // Giả lập lấy từ DB
        return Ok(new { Message = "Lá số bảo mật sẽ được truy xuất qua GUID này" });
    }
}

public class ChartRequest
{
    public required string Name { get; set; }
    public Gender Gender { get; set; }
    public DateTime BirthDate { get; set; }
}