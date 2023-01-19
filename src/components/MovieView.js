import Hero from "./Hero";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const MovieView = () => {
 
    const { id } = useParams();

    const [movieDetails, setMovieDetails] = useState({});

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        console.log('Making API request');
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=7ca0618e400bd1b5bcb0085252d6621f&language=en-US`)
          .then(response => response.json())
          .then(data => {
            setMovieDetails(data);
            setIsLoading(false);
          });
    }, [id]);

    function renderMovieDetails()
    {
      if (isLoading)
      {
        return <Hero text="Loading..." />;

      }

      if (movieDetails)
      {
        const posterPath = `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`;
        const backdropUrl = `https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`;
        return (
          <>
            <Hero text={movieDetails.original_title} backdrop={backdropUrl}/>
            <div className="container my-4">
              <div className="row">
                <div className="col-md-3">
                  <img src={posterPath} alt={movieDetails.original_title} className="img-fluid shadow rounded"/>
                </div>

                <div className="col-md-9">
                  <h2>
                    {movieDetails.original_title}
                  </h2>
                  <p className="lead">
                  {movieDetails.overview}
                  </p>
                  <h5>
                    Runtime: {movieDetails.runtime} min
                  </h5>
                  <h5>
                    Release Date: {movieDetails.release_date}
                  </h5>
                  <h5>
                    Tagline:<i className="lead"> {movieDetails.tagline} </i>
                  </h5>
                </div>
              </div>
            </div>
          </>
        );
      }
    }
    
    return renderMovieDetails();
    
};

export default MovieView;
