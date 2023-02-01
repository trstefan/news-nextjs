import React from "react";
import styles from "../styles/NewsGrid.module.css";
import Link from "next/link";
import { NO_NEWS_URL } from "consts";

const NewsCard = ({ news }) => {
  return (
    <div className={styles.news__card}>
      <img
        src={news.image ? news.image : `${NO_NEWS_URL}`}
        alt=""
        width={350}
        height={220}
      />
      <h2>{news.title}</h2>
      <p>{news.description}</p>
      <p>Source: {news.source}</p>
      <Link href={news.url}>
        <button>View more</button>
      </Link>
    </div>
  );
};

export default NewsCard;
