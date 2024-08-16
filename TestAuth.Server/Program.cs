using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using System.Text;
using TestAuth.Server.Data;
using TestAuth.Server.Entity;


var builder = WebApplication.CreateBuilder(args);



// Add ApplicationDbContext and SQL Server support
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseSqlServer(
        builder.Configuration.GetConnectionString("DefaultConnection")
        )
);


builder.Services.AddScoped<IRepository<Blog>,SqlRepository<Blog>>();
builder.Services.AddScoped<IRepository<Category>, SqlRepository<Category>>();
builder.Services.AddScoped<IRepository<User>, SqlRepository<User>>();




builder.Services.AddAuthentication().AddBearerToken();
builder.Services.AddAuthorization();




// Add services to the container.
builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();


builder.Services.AddSwaggerGen();

var app = builder.Build();

app.UseDefaultFiles();
app.UseStaticFiles();



// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseAuthentication(); 
app.UseAuthorization();
app.UseCors();


app.MapControllers();
app.UseCors(o=>o.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod());

app.MapFallbackToFile("/index.html");

app.Run();


