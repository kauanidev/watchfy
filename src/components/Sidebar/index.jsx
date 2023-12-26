import { useLocation } from "react-router-dom";
import { Container, NavItem } from "./styles";
import { TbCalendarTime, TbHeart, TbMovie, TbTrendingUp } from "react-icons/tb";

const navItems = [
  {
    icon: <TbMovie />,
    title: "Home",
    to: "/",
  },
  {
    icon: <TbTrendingUp />,
    title: "Trending",
    to: "/trending",
  },
  {
    icon: <TbHeart />,
    title: "Favourites",
    to: "/favourites",
  },
  {
    icon: <TbCalendarTime />,
    title: "Coming soon",
    to: "/coming-soon",
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
