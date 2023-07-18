import React from "react";
import styles from "../Styles/Griditem.module.css";

export const GridItem = ({ item }) => {
  return (
    <div className={styles.mainDiv}>
      <img
        className={styles.image}
        src="https://covers.openlibrary.org/b/id/10586786-L.jpg"
      ></img>
      <h4>Name: {item.name}</h4>
      <h5>Type: {item.type}</h5>
      <p>Key: {item.key}</p>
    </div>
  );
};
