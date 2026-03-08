using Microsoft.EntityFrameworkCore;
using TuVi.Core.Models;

namespace TuVi.Api.Data;

public class TuViDbContext : DbContext
{
    public TuViDbContext(DbContextOptions<TuViDbContext> options) : base(options) { }

    public DbSet<UserAccount> Users { get; set; }
    public DbSet<SavedChart> SavedCharts { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<SavedChart>()
            .Property(b => b.ChartJson)
            .HasColumnType("jsonb"); // Tối ưu cho PostgreSQL
    }
}

public class UserAccount
{
    public int Id { get; set; }
    public required string Email { get; set; }
    public required string PasswordHash { get; set; }
}

public class SavedChart
{
    public int Id { get; set; }
    public int UserId { get; set; }
    public required string ChartJson { get; set; }
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    public string? Goal { get; set; } // Sức khỏe, Công danh...
}