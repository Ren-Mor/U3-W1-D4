import React, { useState, useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import BookList from "./BookList";

import fantasy from "../data/fantasy.json";
import history from "../data/history.json";
import romance from "../data/romance.json";
import horror from "../data/horror.json";
import scifi from "../data/scifi.json";

const bookData = {
  fantasy,
  history,
  romance,
  horror,
  scifi,
};

const Books = () => {
  const [category, setCategory] = useState("fantasy");
  const [books, setBooks] = useState(bookData["fantasy"]);

  useEffect(() => {
    setBooks(bookData[category] || []);
  }, [category]);

  return (
    <Container className="my-4">
      <div className="mb-3">
        <Button variant="primary" onClick={() => setCategory("fantasy")}>
          Fantasy
        </Button>
        <Button
          variant="secondary"
          onClick={() => setCategory("history")}
          className="ms-2"
        >
          History
        </Button>
        <Button
          variant="danger"
          onClick={() => setCategory("romance")}
          className="ms-2"
        >
          Romance
        </Button>
        <Button
          variant="dark"
          onClick={() => setCategory("horror")}
          className="ms-2"
        >
          Horror
        </Button>
        <Button
          variant="info"
          onClick={() => setCategory("scifi")}
          className="ms-2"
        >
          Sci-Fi
        </Button>
      </div>
      <BookList books={books} />
    </Container>
  );
};

export default Books;
