import React, { useState } from "react";
import styles from "../Styles/HomePage.module.css";
import { BiSearch } from "react-icons/bi";
import axios from "axios";
import { GridItem } from "../Components/GridItem";

export const HomePage = () => {
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [authData, setAuthData] = useState([]);

  const getAuthorData = () => {
    setAuthor("");
    axios
      .get(`https://openlibrary.org/search/authors.json?q=${author}`)
      .then((res) => {
        setAuthData(res.data.docs);
      });
  };

  return (
    <div style={{ backgroundColor: "#c5c9cc" }}>
      <div className={styles.searchdiv}>
        <div className={styles.searchBox}>
          <input
            type="text"
            placeholder="Search By Book Cover"
            className={styles.title}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <BiSearch className={styles.icon} />
        </div>
        <div className={styles.searchBox}>
          <input
            type="text"
            placeholder="Search By Author"
            className={styles.title}
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          <BiSearch className={styles.icon} onClick={getAuthorData} />
        </div>
      </div>
      <div className={styles["grid-main"]}>
        {authData.map((el) => {
          return <GridItem item={el} />;
        })}
      </div>
    </div>
  );
};
