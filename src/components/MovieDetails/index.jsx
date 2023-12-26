import { Button } from "../Button";
import { Container, MovieSpecifications, TitleAndRate } from "./styles";
import { FaStar } from "react-icons/fa6";

export const MovieDetails = () => {
  return (
    <Container>
      <img src="/images/movie1.jpeg" alt="Banner do filme" />
      <div>
        <TitleAndRate>
          <h1>Tokyo Train</h1>
          <div>
            <FaStar />
            <p>7.8/10</p>
          </div>
        </TitleAndRate>
        <MovieSpecifications>
          <span>2022</span>
          <span>Action comedy</span>
          <span>2h 38min</span>
        </MovieSpecifications>
        <p>
          The movie follows the lives of a wealthy family, the Johnsons, who
          appear to have it all: a grand mansion, luxurious cars, and expensive
          designer clothing. However, behind the facade of their lavish
          lifestyle, there are deep-seated tensions and secrets that threaten to
          tear the family apart.
        </p>
        <Button>Watch now</Button>
      </div>
    </Container>
  );
};
