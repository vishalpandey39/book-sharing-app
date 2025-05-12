import React from "react";
import Card from "./Card";
import booksData from "../assets/book-data.json";
import "../App.css";

function ProductsPage() {
  return (
    <div className="books-page">
      {booksData.map((book) => <Card book={book} />)}
    </div>
  )
}

export default ProductsPage;