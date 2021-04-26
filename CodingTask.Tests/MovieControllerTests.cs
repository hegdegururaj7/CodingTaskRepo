
using CodingTask.BusinessLayer;
using CodingTask.Controllers;
using CodingTask.ResponseModels;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Moq;
using Newtonsoft.Json;
using System.Linq;
using Xunit;

namespace CodingTask.Tests
{
    public class MovieControllerTests
    {
        private readonly Mock<IMovieApi> _movieApi;
        private readonly Mock<IMovieMetaData> _movieMetaData;
        private readonly Mock<ILogger<MovieController>> _logger;

        private readonly MovieController _movieControllerTests;


        public MovieControllerTests()
        {
            _movieApi = new Mock<IMovieApi>();
            _movieMetaData = new Mock<IMovieMetaData>();
            _logger = new Mock<ILogger<MovieController>>();
            _movieControllerTests = new MovieController(_logger.Object,_movieApi.Object, _movieMetaData.Object);

        }
        [Fact]
        public void FetchMoviesList_SetsProperties()
        {
            _movieMetaData.Setup(x => x.movieList).Returns("testmovie.json");
            var response =  _movieControllerTests.FetchMoviesList();
            Assert.IsType<ObjectResult>(response.Result);
            var objectResult = response.Result as ObjectResult;
            var movieResponse = Assert.IsAssignableFrom<GetMoviesResponse>(objectResult.Value);
            var jsonString = System.IO.File.ReadAllText("testmovie.json");
            var jsonObject = JsonConvert.DeserializeObject<GetMoviesResponse>(jsonString);
            Assert.Equal(jsonObject.Movies.AsEnumerable().First().Title, movieResponse.Movies.AsEnumerable().First().Title);
        }
        [Fact]
        public void Search_VerifiesSearchCalls()
        {
            const string term = "some";
            _movieMetaData.Setup(x => x.movieList).Returns("testmovie.json");
            _movieApi.Setup(x => x.Search(term)).Returns(new MovieResponse[]
            {
                new MovieResponse()
                {
                    Title="some title",
                    Id=100
                }
            });
            var response = _movieControllerTests.Search(term);
            Assert.IsType<ObjectResult>(response.Result);
            var objectResult = response.Result as ObjectResult;
            var movieResponse = Assert.IsAssignableFrom<GetMoviesResponse>(objectResult.Value);
            var jsonString = System.IO.File.ReadAllText("testmovie.json");
            var jsonObject = JsonConvert.DeserializeObject<GetMoviesResponse>(jsonString);
            Assert.Equal(jsonObject.Movies.AsEnumerable().First().Title, movieResponse.Movies.AsEnumerable().First().Title);
        }

    }
}
