import { Link } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {
  const navbarData = [
    {
      id: 1,
      title: "Дашбоард",
      href: "/dashboard",
    },
    {
      id: 2,
      title: "Услуги",
      href: "/services",
    },
  ];

  return (
    <ul className="navbar">
      {navbarData.map((item) => {
        return (
          <li key={item?.id}>
            <Link
              className="nav-link"
              to={item?.href}
            >
              {item?.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Navbar;
