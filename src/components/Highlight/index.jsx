/* eslint-disable react/prop-types */
import { Button } from "../Button";
import { Container } from "./styled";

export const Highlight = ({ movie, genres }) => {
  const movieGenres = movie.genre_ids.map((id) => {
    const genre = genres.find((item) => item.id === id);
    return genre?.name;
  });

  return (
    <Container
      posterUrl={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
    >
      <div className="container">
        <h1>{movie.title}</h1>
        <p>
          {Math.round(movie.vote_average * 10)}% | {movieGenres.join(", ")}
        </p>
        <a
          href={`https://www.themoviedb.org/movie/${movie.id}`}
          target="_blank"
          rel="noreferrer"
        >
          <Button>Mais detalhes</Button>
        </a>
      </div>
    </Container>
  );
};
