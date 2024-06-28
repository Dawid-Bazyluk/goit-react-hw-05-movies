import { fetchMovies } from "../../functions/api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import style from "./Cast.module.scss";
import { API_KEY } from "../../functions/api";

const Cast = () => {
  const [cast, setCast] = useState(null);
  const [loader, setLoader] = useState(false);
  const { movieId } = useParams();
  const URL = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`;

  useEffect(() => {
    const getCast = async () => {
      setLoader(true);
      try {
        const castResults = await fetchMovies(URL);
        if (castResults) {
          
          setCast(castResults.cast);
        } else {
          console.error("Error in Cast");
        }
      } catch (error) {
        console.error("Error fetching cast:", error);
      } finally {
        setLoader(false);
      }
    };

    getCast();
  }, [URL]);

  return (
    <>
      {loader && <Loader />}
      <ul className={style.castList}>
        {cast && cast.length ? (
          cast.map(({ id, profile_path, name, character }) => (
            <li className={style.castEl} key={id}>
              <img
                className={style.castImg}
                src={
                  profile_path
                    ? `https://www.themoviedb.org/t/p/w500/${profile_path}`
                    : `https://web.natur.cuni.cz/zoology/eei/wp-content/uploads/2021/04/no_image_portrait.jpg`
                }
                alt={name}
              />
              <h3 className={style.name}>{name}</h3>
              <p className={style.character}>Character: {character}</p>
            </li>
          ))
        ) : (
          <p>Cast information is not available for this movie.</p>
        )}
      </ul>
    </>
  );
};

export default Cast;
