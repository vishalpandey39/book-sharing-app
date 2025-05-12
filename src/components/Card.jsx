import React from "react";
import styles from './Card.module.css'


function Card({ book }) {
  console.log(book);
  return (
    <div className={styles.card}>
      <img className={styles.cardImg} src={book.imageLink} />
      <h2>{book.title}</h2>
      <h4>{book.author}</h4>
      <p>Language: {book.language}</p>
      <p>Rating: {book.rating}</p>
    </div>
  )
}

export default Card;