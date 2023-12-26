import { Container } from "./styles";

export const Header = () => {
  return (
    <Container className="container">
      <nav>
        <a href="#">Movies</a>
        <a href="#">Series</a>
        <a href="#">Documentaries</a>
      </nav>
      <div>
        <img src="https://github.com/kauanidev.png" alt="Foto do usuário" />
        <p>Kauani</p>
      </div>
    </Container>
  );
};
