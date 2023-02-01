import axios from "axios";
import styles from "../../../styles/index.module.css";
import NewsGrid from "components/NewsGrid";

const index = ({ newsList, headerTitle }) => {
  //console.log(newsList.data);
  const results = newsList.data;
  //console.log(results);
  return (
    <div className={styles.index__grid}>
      <h1 className={styles.header__title}>{headerTitle}</h1>
      <NewsGrid newsList={results}></NewsGrid>
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const { data: newsList } = await axios.get(
    `http://api.mediastack.com/v1/news?access_key=6364fc293087712f8459a1c68203aca7&categories=${context.query["category"]}&countries=gb`
  );

  const headerTitle = context.query["category"];
  return {
    props: {
      newsList,
      headerTitle,
    },
  };
};

export default index;
