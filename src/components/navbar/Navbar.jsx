import { NavLink } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {
  const navbarData = [
    {
      id: 1,
      title: "Дашбоард",
      href: "/",
    },
    {
      id: 2,
      title: "Услуги",
      href: "/services",
    },
    {
      id: 3,
      title: "График работы",
      href: "/schedule",
    },
    {
      id: 4,
      title: "Статистика сотрудников",
      href: "/statistics-employees",
    },
    {
      id: 5,
      title: "Отчёт по перерывам",
      href: "/report-latecomers",
    },
    {
      id: 6,
      title: "База данных сотрудников",
      href: "/database-operators",
    },
  ];

  return (
    <ul className="navbar">
      {navbarData.map((item) => {
        return (
          <li key={item?.id}>
            <NavLink
              className={({ isActive }) => {
                return "nav-link " + (!isActive ? "" : "nav-link__active");
              }}
              to={item?.href}
            >
              {item?.title}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export default Navbar;
