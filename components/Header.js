import Link from "next/link";
import styles from "../styles/Header.module.css";
import NavList from "./NavList";

const Header = () => {
  return (
    <div className={styles.header}>
      <Link href={"/"} className={styles.header__title__reset}>
        <h1 className={styles.header__title}>
          The <span>News</span> Hub
        </h1>
      </Link>
      <NavList></NavList>
    </div>
  );
};

export default Header;
