using ss.Models;

namespace ss.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {

        }

        public DbSet<User> Users { get; set; }
        public DbSet<Role> Role { get; set; }
        public DbSet<Permission> Permission { get; set; }


    }
}