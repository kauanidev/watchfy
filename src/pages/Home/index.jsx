import { Header } from "../../components/Header";
import { Highlight } from "../../components/Highlight";
import { MovieCard } from "../../components/MovieCard";
import { Sidebar } from "../../components/Sidebar";
import { Container, Content, MoviesList } from "./styles";

export const Home = () => {
  return (
    <Container>
      <Sidebar />
      <Content>
        <Header />
        <Highlight />
        <MoviesList className="container">
          <h2>Trending</h2>
          <div>
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
          </div>
        </MoviesList>
      </Content>
    </Container>
  );
};
