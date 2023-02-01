import NavTab from "./NavTab";
import styles from "../styles/Navbar.module.css";

const categories = [
  "business",
  "entertainment",
  "health",
  "science",
  "sports",
  "technology",
];

const NavList = () => {
  return (
    <nav className={styles.navbar}>
      {categories.map((category) => (
        <NavTab key={category} category={category}>
          {category}
        </NavTab>
      ))}
    </nav>
  );
};

export default NavList;
