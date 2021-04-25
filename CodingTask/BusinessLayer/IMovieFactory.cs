using CodingTask.ResponseModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CodingTask.BusinessLayer
{
    public interface IMovieFactory
    {
        MovieResponse Create(MovieResponse movie);
    }
}
