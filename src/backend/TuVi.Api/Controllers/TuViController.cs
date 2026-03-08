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
        // 1. Khởi tạo lá số trống
        var chart = _positionService.InitializeEmptyChart(request.Name, request.Gender, request.BirthDate);
        
        // 2. An sao Tử Vi (Giả định Cục = 2 để test)
        _starService.AnSaoTuVi(chart, request.BirthDate.Day, 2);
        
        // 3. TODO: An thêm 13 chính tinh còn lại...
        
        return Ok(chart);
    }
}

public class ChartRequest
{
    public required string Name { get; set; }
    public Gender Gender { get; set; }
    public DateTime BirthDate { get; set; }
}