
using CodingTask.BusinessLayer;
using CodingTask.ResponseModels;
using Xunit;

namespace CodingTask.Tests.BusinessLayer
{
    
    public class MovieFactoryTests
    {
        private readonly MovieFactory _movieFactoryTests;


        public MovieFactoryTests()
        {
            _movieFactoryTests = new MovieFactory();

        }

        [Fact]
        public void Create_WhenCreated_SetsProperties()
        {
            const int id = 100;
            const string language = "some movie language";
            const string location = "some movie location";
            const string title = "some movie title";
            const string plot = "some interesting thriller plot!";
            const string poster = "some interesting poster link";
            var soundEffects = new string[]{
                "some soundEffects", "next soundEffects"
            };
            var stills = new string[]{
                "some stills", "next stills"
            }; 
            const string imdbRating = "12345";
            const string imbdId = "78990";
            const string listingType = "1234";

            var movieResponse = new MovieResponse()
            {
                Id = id,
                Language = language,
                Location = location,
                Title = title,
                Plot = plot,
                Poster = poster,
                SoundEffects = soundEffects,
                Stills = stills,
                ImdbRating = imdbRating,
                ImdbId = imbdId,
                ListingType = listingType

            };
            var result = _movieFactoryTests.Create(movieResponse);
            Assert.Equal(id, result.Id);
            Assert.Equal(language, result.Language);
            Assert.Equal(location, result.Location);
            Assert.Equal(title, result.Title);
            Assert.Equal(plot, result.Plot);
            Assert.Equal(poster, result.Poster);
            Assert.Same(soundEffects, result.SoundEffects);
            Assert.Equal(imbdRating, result.ImbdRating);
            Assert.Equal(imbdId, result.ImdbId);
            Assert.Equal(listingType, result.ListingType);
        }

    }
}
