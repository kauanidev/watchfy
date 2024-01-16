/* eslint-disable react/prop-types */
import { Container } from "./styles";

export const MovieCard = ({ movie, genres }) => {
  const movieGenres = movie.genre_ids.map((id) => {
    const genre = genres.find((item) => item.id === id);
    return genre?.name;
  });

  return (
    <Container
      posterUrl={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
      href={`https://www.themoviedb.org/movie/${movie.id}`}
      target="_blank"
    >
      <div>
        <p>{movie.title}</p>
        <span>
          {Math.round(movie.vote_average * 10)}% |{" "}
          {movieGenres.slice(0, 2).join(", ")}
        </span>
      </div>
    </Container>
  );
};
