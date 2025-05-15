const SingleComment = ({ comment }) => (
  <li>
    <strong>{comment.author}</strong>: {comment.text} (Rating: {comment.rating})
  </li>
);

export default SingleComment;
