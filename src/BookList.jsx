import React, { useState } from "react";
import { Row, Col, Form } from "react-bootstrap";
import SingleBook from "./SingleBook";

const BookList = ({ books }) => {
  const [search, setSearch] = useState("");

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Form.Control
        type="text"
        placeholder="Cerca un libro..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-3"
      />
      <Row>
        {filteredBooks.map((book) => (
          <Col key={book.asin} sm={6} md={4} lg={3} className="mb-4">
            <SingleBook book={book} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default BookList;
