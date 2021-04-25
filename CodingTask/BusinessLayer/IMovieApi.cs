using CodingTask.ResponseModels;

namespace CodingTask.BusinessLayer
{
    public interface IMovieApi
    {
        MovieResponse[] Search(string term);
    }
}
