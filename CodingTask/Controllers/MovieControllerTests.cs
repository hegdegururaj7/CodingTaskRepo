
using CodingTask.BusinessLayer;
using CodingTask.ResponseModels;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Moq;
using Newtonsoft.Json;
using Xunit;

namespace CodingTask.Controllers
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
            var result =  _movieControllerTests.FetchMoviesList();
            Assert.IsType<ObjectResult>(result);
            var movieResponse = Assert.IsAssignableFrom<GetMoviesResponse>(result.Result);
            var jsonString = System.IO.File.ReadAllText("testmovie.json");
            var jsonObject = JsonConvert.DeserializeObject<GetMoviesResponse>(jsonString);
            Assert.Same(jsonObject, movieResponse);
        }

    }
}
