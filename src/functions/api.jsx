export const API_KEY = "88376a39835fdc78680545d4901eca3d";

export const fetchMovies = (url) =>
  fetch(url)
    .then((resp) => resp.json())
    .catch((error) => console.log("fetchmovie error:", error));
