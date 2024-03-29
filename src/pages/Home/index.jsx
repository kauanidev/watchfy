import axios from "axios";
import { Highlight } from "../../components/Highlight";
import { MovieCard } from "../../components/MovieCard";
import { Sidebar } from "../../components/Sidebar";
import { Container, Content, MoviesList } from "./styles";
import { useEffect, useState } from "react";

export const Home = () => {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);

  const axiosConfig = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNzZlYTFhYzBjYjYwNTFjZDE0M2QxNTE0YWQ1YWViYSIsInN1YiI6IjYyZDM3YTU2YzE1YjU1MDA3MWI4YjIyZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MS7H4J0nGweiuWlcj6E-nbqRofN2AZR-ReAfQeF8wwk",
    },
  };

  const getGenres = async () => {
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/genre/movie/list?language=pt-BR",
      axiosConfig
    );
    setGenres(data.genres);
  };

  const getNowPlaying = async () => {
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/movie/now_playing?language=pt-BR",
      axiosConfig
    );
    setMovies(data.results);
  };

  const randomIndex = Math.floor(Math.random() * movies.length);

  const randomMovie = movies[randomIndex];

  useEffect(() => {
    getNowPlaying();
    getGenres();
  }, []);

  return (
    <Container>
      <Sidebar />
      <Content>
        {!!randomMovie && <Highlight movie={randomMovie} genres={genres} />}
        <MoviesList className="container">
          <h2>Novidades</h2>
          <div>
            {movies.map((movie) => {
              return <MovieCard key={movie.id} movie={movie} genres={genres} />;
            })}
          </div>
        </MoviesList>
      </Content>
    </Container>
  );
};
