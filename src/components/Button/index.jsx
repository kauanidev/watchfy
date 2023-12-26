/* eslint-disable react/prop-types */
import { Container } from "./styles";

export const Button = ({ children, ...rest }) => {
  return <Container {...rest}>{children}</Container>;
};
