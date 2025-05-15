import React, { Component } from "react";
import { Card } from "react-bootstrap";
import CommentArea from "./CommentArea";

class SingleBook extends Component {
  state = {
    selected: false,
  };

  toggleSelected = () => {
    this.setState((prevState) => ({ selected: !prevState.selected }));
  };

  render() {
    const { book } = this.props;
    const { selected } = this.state;

    return (
      <>
        <Card
          onClick={this.toggleSelected}
          style={{
            border: selected ? "3px solid red" : "1px solid #ddd",
            cursor: "pointer",
          }}
        >
          <Card.Img variant="top" src={book.img} />
          <Card.Body>
            <Card.Title>{book.title}</Card.Title>
            <Card.Text>
              <strong>Price:</strong> {book.price} €
            </Card.Text>
          </Card.Body>
        </Card>
        {selected && <CommentArea bookId={book.asin} />}
      </>
    );
  }
}

export default SingleBook;
