using CodingTask.Helper;
using CodingTask.ResponseModels;
using Newtonsoft.Json;
using System.Linq;

namespace CodingTask.BusinessLayer
{

    public class MovieApi : IMovieApi
    {
        private readonly IMovieFactory _movieFactory;
        private readonly IMovieMetaData _movieMetaData;

        public MovieApi(IMovieFactory movieFactory, IMovieMetaData movieMetaData)
        {
            _movieFactory = movieFactory;
            _movieMetaData = movieMetaData;
        }
        public MovieResponse[] Search(string term)
        {
            if (string.IsNullOrWhiteSpace(_movieMetaData.movieList))
                return null;
            GetMoviesResponse getMoviesResponse = new GetMoviesResponse();
            var jsonString = System.IO.File.ReadAllText(_movieMetaData.movieList);
            var movieObject = JsonConvert.DeserializeObject<GetMoviesResponse>(jsonString);
            var predicate = MoviePredicates.ContainsTitle(term);
            var response = movieObject.Movies.Where(predicate);
            return response.Select(m => _movieFactory.Create(m)).ToArray();
        }
    }
}
