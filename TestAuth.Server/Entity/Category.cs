using System.ComponentModel.DataAnnotations.Schema;

namespace TestAuth.Server.Entity
{
    [Table("Categories")]
    public class Category
    {
        public int Id { get; set; }
        public string ?Name { get; set; }
    }
}
