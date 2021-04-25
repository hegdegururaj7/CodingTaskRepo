using CodingTask.ResponseModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CodingTask.BusinessLayer
{
    public class MovieFactory : IMovieFactory
    {
        public MovieResponse Create(MovieResponse movie)
        {
            return new MovieResponse
            {
                Id= movie.Id,
                Language = movie.Language,
                Location = movie.Location,
                Title =movie.Title,
                Plot = movie.Plot,
                Poster = movie.Poster,
                SoundEffects = movie.SoundEffects,
                Stills = movie.Stills,
                ImbRating =movie.ImbRating,
                ImdbId = movie.ImdbId,
                ListingType = movie.ListingType
            };
        }
    }
}
