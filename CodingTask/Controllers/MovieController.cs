using CodingTask.BusinessLayer;
using CodingTask.ResponseModels;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using System.ComponentModel;
using System.Threading.Tasks;

namespace CodingTask.Controllers
{
    [ApiController]
    [Route("api/v1/[controller]")]
    public class MovieController : ControllerBase
    {
        private readonly ILogger<MovieController> _logger;
        private readonly IMovieApi _movieApi;
        private readonly IMovieMetaData _movieMetaData;


        public MovieController(ILogger<MovieController> logger, IMovieApi movieApi, IMovieMetaData movieMetaData)
        {
            _logger = logger;
            _movieApi = movieApi;
            _movieMetaData = movieMetaData;
        }

        [HttpGet("Movies")]
        [Description("Fetches The List of Movies available for a user")]
        public async Task<IActionResult> FetchMoviesList()
        {
            try
            {
                _logger.LogInformation($"Fetching the list of movies available for a user");
                var jsonString = System.IO.File.ReadAllText(_movieMetaData.movieList);
                var jsonObject = Task.Run(() => JsonConvert.DeserializeObject<GetMoviesResponse>(jsonString));
                await Task.WhenAny(jsonObject);
                return  new ObjectResult(jsonObject.Result);
            }
            catch (System.Exception ex)
            {
                _logger.LogError($"Some error occured:<{ex.Message}>");
                throw;
            }
        }

        [HttpGet("Search")]
        [Description("Searches for Movies based on Title")]
        public async Task<IActionResult> Search(string titleTerm)
        {
            try
            {
                GetMoviesResponse moviesResponse = new GetMoviesResponse();
                moviesResponse.Movies = new MovieResponse[]{ };
                _logger.LogInformation($"Fetching the list of movies based on the searched term");
                if (string.IsNullOrWhiteSpace(titleTerm))
                {
                    return new ObjectResult(new MovieResponse[0]);
                }
                var response = Task.Run(() => _movieApi.Search(titleTerm));
                await Task.WhenAny(response);
                moviesResponse.Movies = response.Result;
                return new ObjectResult(moviesResponse);
            }
            catch (System.Exception ex)
            {
                _logger.LogError($"Some error occured:<{ex.Message}>");
                throw;
            }
        }
    }
}