import React, { Component } from "react";
import CommentsList from "./CommentList";
import AddComment from "./AddComment";
import "./CommentArea.css";

class CommentArea extends Component {
  state = {
    comments: [],
  };

  componentDidMount() {
    this.fetchComments();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.bookId !== this.props.bookId) {
      this.fetchComments();
    }
  }

  fetchComments = async () => {
    try {
      const response = await fetch(
        `https://api.example.com/books/${this.props.bookId}/comments`
      );
      if (response.ok) {
        const data = await response.json();
        this.setState({ comments: data });
      } else {
        console.error("Error fetching comments");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  render() {
    return (
      <div className="comment-area">
        <CommentsList comments={this.state.comments} />
        <AddComment
          bookId={this.props.bookId}
          onCommentAdded={(newComment) =>
            this.setState({ comments: [...this.state.comments, newComment] })
          }
        />
      </div>
    );
  }
}

export default CommentArea;
