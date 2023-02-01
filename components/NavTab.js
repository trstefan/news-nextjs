import Link from "next/link";
import styles from "../styles/Navbar.module.css";

const NavTab = ({ category }) => {
  return (
    <Link href={`/news/${category}`} className={styles.navbar__link}>
      {category}
    </Link>
  );
};

export default NavTab;
