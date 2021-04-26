using System;
using System.ComponentModel.DataAnnotations;

/// <summary>
/// Summary description for Class1
/// </summary>
namespace CodingTask.ResponseModels
{
    public class MovieResponse
    {
        [Required]
        public int Id { get; set; }
        public string Language { get; set; }

        public string Location { get; set; }

        public string Plot { get; set; }

        public string Poster { get; set; }
        public string[] SoundEffects { get; set; }
        public string[] Stills { get; set; }

        public string Title { get; set; }

        public string ImdbId { get; set; }

        public string ListingType { get; set; }

        public string ImbdRating { get; set; }
    }
}
