import style from "./Movies.module.scss";
import { useState } from "react";
import { fetchMovies } from "../../functions/api";
import Loader from "../../components/Loader/Loader";
import { Link } from "react-router-dom";
import { Notify } from "notiflix";
import { API_KEY } from "../../functions/api";

const Movies = () => {
  const [value, setValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${value}`;

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    if (value === "") {
      setIsLoading(false);
      return Notify.info("Please provide a query");
    }

    try {
      const movieList = await fetchMovies(URL);

      if (movieList.results.length === 0) {
        setIsLoading(false);
        Notify.info(
          "We could not find the movie you are looking for. Please try another title.",
        );
        return;
      }

      const results = movieList.results.map((movie) => ({
        movieId: movie.id,
        movieTitle: movie.title,
        releaseDate: new Date(movie.release_date).toLocaleDateString("en-US", {
          year: "numeric",
        }),
      }));

      setMovies(results);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching movies:", error);
      setIsLoading(false);
      Notify.failure("Error fetching movies. Please try again later.");
    }
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="searchInput" />
      {""}
      <input
        id="searchInput"
        type="text"
        placeholder="Search for movie"
        onChange={handleChange}
      />
      <button type="submit">Search</button>
      <ul className={style.movieList}>
        {isLoading ? (
          <Loader />
        ) : (
          movies.length !== 0 &&
          movies.map((movie) => (
            <li className={style.listEl} key={movie.movieId}>
              <Link className={style.link} to={`/movies/${movie.movieId}`}>
                <p>{movie.movieTitle}</p>
                <p className={style.date}>{movie.releaseDate} </p>
              </Link>
            </li>
          ))
        )}
      </ul>
    </form>
  );
};

export default Movies;
