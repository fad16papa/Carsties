using AutoMapper;
using Contracts;
using SearchService.Models;

namespace SearchService.RequestsHelpers
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            CreateMap<AuctionCreated, Item>();
        }
    }
}