import React, { Component } from "react";

class AddComment extends Component {
  state = {
    text: "",
    rating: 1,
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://api.example.com/books/${this.props.bookId}/comments`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            text: this.state.text,
            rating: this.state.rating,
          }),
        }
      );
      if (response.ok) {
        const newComment = await response.json();
        this.props.onCommentAdded(newComment);
        this.setState({ text: "", rating: 1 });
      } else {
        console.error("Error adding comment");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  render() {
    return (
      <form className="add-comment-form" onSubmit={this.handleSubmit}>
        <div>
          <label>Comment:</label>
          <input
            type="text"
            value={this.state.text}
            onChange={(e) => this.setState({ text: e.target.value })}
            required
          />
        </div>
        <div>
          <label>Rating:</label>
          <select
            value={this.state.rating}
            onChange={(e) => this.setState({ rating: e.target.value })}
          >
            {[1, 2, 3, 4, 5].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Add Comment</button>
      </form>
    );
  }
}

export default AddComment;
