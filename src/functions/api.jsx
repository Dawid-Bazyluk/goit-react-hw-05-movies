import axios from "axios";

export const API_KEY = "88376a39835fdc78680545d4901eca3d";

export const fetchMovies = (url) =>
  axios
    .get(url)
    .then((response) => response.data)
    .catch((error) => console.log("fetchMovies error:", error));
