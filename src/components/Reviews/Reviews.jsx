import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import { API_KEY, fetchMovies } from "../../functions/api";

const Reviews = () => {
  const [loader, setLoader] = useState(false);
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();
  const URL = `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`;

  useEffect(() => {
    const getReviews = async () => {
      setLoader(true);
      try {
        const response = await fetchMovies(URL);
        if (response) {
          const parsedReviews = response.results.map((review) => ({
            content: review.content,
            author: review.author,
            id: review.id,
          }));
          setReviews(parsedReviews);
        } else {
          throw new Error("No reviews found");
        }
      } catch (error) {
        console.error("Error fetching reviews:", error);
        setReviews([]);
      } finally {
        setLoader(false);
      }
    };

    if (movieId) {
      getReviews();
    }
  }, [URL, movieId]);

  return (
    <>
      {loader && <Loader />}
      <ul>
        {reviews && reviews.length ? (
          reviews.map(({ id, author, content }) => (
            <li style={{ listStyle: "circle" }} key={id}>
              <h3>Author: {author}</h3>
              <p>{content}</p>
            </li>
          ))
        ) : (
          <p>There are no reviews yet</p>
        )}
      </ul>
    </>
  );
};

export default Reviews;
