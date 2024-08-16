using TestAuth.Server.Entity;

namespace TestAuth.Server.Dto
{
    public class BlogDto
    {
        public string? Title { get; set; }
        public string? Description { get; set; }
        public string? Content { get; set; }
        public string? Image { get; set; }
        public bool IsFeatured { get; set; }
        public int CategoryId { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }
        

    }
}
