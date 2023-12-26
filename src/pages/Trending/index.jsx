import { Header } from "../../components/Header";
import { MovieCard } from "../../components/MovieCard";
import { MovieDetails } from "../../components/MovieDetails";
import { Sidebar } from "../../components/Sidebar";
import { Container, Content, MoviesList } from "./styles";

export const Trending = () => {
  return (
    <Container>
      <Sidebar />
      <Content>
        <Header />
        <MoviesList className="container">
          <h2>Trending at this moment</h2>
          <div>
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
          </div>
          <MovieDetails />
        </MoviesList>
      </Content>
    </Container>
  );
};
