import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Loading from "./Loading";
import Error from "./Error";

const CommentsList = ({ comments }) => (
  <div className="mt-3">
    <h6>Recensioni:</h6>
    <ul>
      {comments.length === 0 && <li>Nessun commento disponibile.</li>}
      {comments.map((c) => (
        <li key={c._id || c.comment}>
          {c.comment} <em>({c.author})</em>
        </li>
      ))}
    </ul>
  </div>
);

class CommentArea extends Component {
  state = {
    comment: "",
    comments: [],
    loading: false,
    error: null,
  };

  componentDidMount() {
    this.fetchComments();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.asin !== this.props.asin) {
      this.fetchComments();
    }
  }

  fetchComments = async () => {
    this.setState({ loading: true, error: null });
    try {
      const resp = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${this.props.bookId}`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODI1ZDMyMTFlYmU4MjAwMTUwOWYyZjciLCJpYXQiOjE3NDczMTU1MjMsImV4cCI6MTc0ODUyNTEyM30.N-0uP_vNczLStRhFRbyWY7Yq7ogx0FfPqDe619KdJLk",
          },
        }
      );
      if (!resp.ok) throw new Error("Errore nel recupero dei commenti");
      const data = await resp.json();
      this.setState({ comments: data, loading: false });
    } catch (error) {
      this.setState({ error: error.message, loading: false });
    }
  };

  handleChange = (e) => {
    this.setState({ comment: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState((prevState) => ({
      comments: [
        ...prevState.comments,
        { comment: prevState.comment, author: "Tu", _id: Date.now() },
      ],
      comment: "",
    }));
  };

  render() {
    const { comment, comments, loading, error } = this.state;

    return (
      <div onClick={(e) => e.stopPropagation()}>
        <Form onSubmit={this.handleSubmit} className="mt-3">
          <Form.Group controlId="comment">
            <Form.Label>Lascia un commento:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Scrivi il tuo commento..."
              value={comment}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="mt-2">
            Invia
          </Button>
        </Form>
        {loading && <Loading />} {/* Componente Loading */}
        {error && <Error message={error} />} {/* Componente Error */}
        <CommentsList comments={comments} />
      </div>
    );
  }
}

export default CommentArea;
