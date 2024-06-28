import { useEffect, useState } from "react";
import style from "./MovieDetails.module.scss";
import { useParams, Outlet, Link } from "react-router-dom";

import { fetchMovies, API_KEY } from "../../functions/api";

const MovieDetails = () => {
  const { movieId } = useParams();
  const URL = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`;

  const [details, setDetails] = useState({});

  useEffect(() => {
    const getDetails = async () => {
      const detailsResults = await fetchMovies(URL);
      setDetails(detailsResults);
    };
    getDetails();
  }, [URL]);

  return (
    <>
      <section className={style.wrapper}>
        {details.poster_path && (
          <img
            className={style.poster}
            src={
              details.poster_path
                ? `https://image.tmdb.org/t/p/w500${details.poster_path}`
                : `https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg`
            }
            alt={details.title}
          />
        )}
        <article>
          <h2 className={style.title}>{details.title}</h2>
          <ul>
            <li>
              <h3> User rating: </h3>
              <span> ☆ {details.vote_average}</span>
            </li>
            <li>
              <h3>Genres: </h3>
              {details.genres !== undefined && (
                <span>{`${details.genres
                  .map((genre) => genre.name)
                  .join(" | ")}`}</span>
              )}
            </li>
          </ul>
          <div className={style.overview}>
            <h3 className={style.overviewTitle}>Overview</h3>
            <p>{details.overview}</p>
          </div>
        </article>
      </section>
      <section>
        <h3 className={style.additional}>Additional information</h3>
        <div className={style.btn}>
          <Link to="cast">
            <button type="button">Cast</button>
          </Link>
          <Link to="reviews">
            <button type="button">Reviews</button>
          </Link>
        </div>
        <Outlet />
      </section>
    </>
  );
};

export default MovieDetails;
