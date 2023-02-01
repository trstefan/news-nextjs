import Link from "next/link";
import styles from "../styles/Home.module.css";

const categories = [
  "business",
  "entertainment",
  "health",
  "science",
  "sports",
  "technology",
];
export default function Home() {
  return (
    <>
      <div className={styles.home__grid}>
        {categories.map((category) => (
          <Link href={`/news/${category}`}>
            <button key={category} category={category}>
              Click for more {category} news
            </button>
          </Link>
        ))}
      </div>
    </>
  );
}
