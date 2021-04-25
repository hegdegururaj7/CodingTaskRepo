using CodingTask.ResponseModels;
using System;
using System.Linq.Expressions;

namespace CodingTask.Helper
{
    public static class MoviePredicates
    {

        public static Func<MovieResponse, bool> ContainsTitle(string titleTerm)
        {
            var titleValue = titleTerm.Trim().ToLower();
            return movie => movie.Title.ToLower().Contains(titleValue);
        }
    }
}
