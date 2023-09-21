using AuctionService.Entities;
using Microsoft.EntityFrameworkCore;

namespace AuctionService.Data
{
    public class DbInitializer
    {
        public static void IntDb(WebApplication app)
        {
            using var scope = app.Services.CreateScope();

            SeedData(scope.ServiceProvider.GetService<AuctionDbContext>());
        }

        private static void SeedData(AuctionDbContext contexts)
        {
            contexts.Database.Migrate();

            if (contexts.Auctions.Any())
            {
                Console.WriteLine("Already have data - no need to seed");
                return;
            }

            var auctions = new List<Auction>()
            {
                //auctions
            };

            contexts.AddRange(auctions);

            contexts.SaveChanges();
        }
    }
}