using CodingTask.BusinessLayer;
using CodingTask.ResponseModels;
using Moq;
using System.Linq;
using Xunit;

namespace CodingTask.Tests.BusinessLayer
{
    public class MovieApiTests
    {
        private readonly MovieApi _movieApiTests;
        private readonly Mock<IMovieFactory> _movieFactory;
        private readonly Mock<IMovieMetaData> _movieMetaData;


        public MovieApiTests()
        {
            _movieFactory = new Mock<IMovieFactory>();
            _movieMetaData = new Mock<IMovieMetaData>();
            _movieApiTests = new MovieApi(_movieFactory.Object,_movieMetaData.Object);

        }
        [Fact]
        public void Search_WhenMovieMetaDataIsNull_ReturnsNull()
        {
            const string titleTerm = "som";
            _movieMetaData.Setup(x => x.movieList).Returns(string.Empty);
            var result = _movieApiTests.Search(titleTerm);
            Assert.Null(result);
            _movieFactory.Verify(x => x.Create(It.IsAny<MovieResponse>()), Times.Never);

        }
        [Fact]
        public void Search_WhenSearchedOnTitle_ReturnsResponsesAccordingly()
        {
            const string titleTerm = "som";
            const string notFoundTitle = "not Found Title";
            _movieMetaData.Setup(x => x.movieList).Returns("testmovie.json");
            _movieFactory.Setup(x => x.Create(It.IsAny<MovieResponse>())).Returns(new MovieResponse
            {
                Id =1,
                Title= "some title"
            });
            var result = _movieApiTests.Search(titleTerm);
            Assert.Single(result);
            Assert.NotEqual(notFoundTitle, result.First().Title);
            _movieFactory.Verify(x => x.Create(It.IsAny<MovieResponse>()), Times.Once);
        
        }
    }
}
