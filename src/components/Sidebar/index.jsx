import { useLocation } from "react-router-dom";
import { Container, NavItem } from "./styles";
import { TbMovie, TbTrendingUp } from "react-icons/tb";

const navItems = [
  {
    icon: <TbMovie />,
    title: "Início",
    to: "/",
  },
  {
    icon: <TbTrendingUp />,
    title: "Mais votados",
    to: "/top-rated",
  },
];

export const Sidebar = () => {
  const location = useLocation();

  return (
    <Container>
      <div>
        <img src="/images/coffee.svg" alt="Xícara de Café" />
        <h1>WATCHFY</h1>
      </div>
      <nav>
        {navItems.map((item) => {
          return (
            <NavItem
              key={item.title}
              isActive={location.pathname === item.to}
              to={item.to}
            >
              {item.icon}
              {item.title}
            </NavItem>
          );
        })}
      </nav>
    </Container>
  );
};
