import React from "react";
import styles from "../styles/NewsGrid.module.css";
import NewsCard from "./NewsCard";

const NewsGrid = ({ newsList }) => {
  //console.log(newsList);
  return (
    <div className={styles.news__grid}>
      {newsList && newsList.map((news) => <NewsCard news={news} />)}
    </div>
  );
};

export default NewsGrid;
