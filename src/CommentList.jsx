import SingleComment from "./SingleComment";

const CommentList = ({ comments }) => (
  <ul className="comments-list">
    {comments.map((comment) => (
      <SingleComment key={comment.id} comment={comment} />
    ))}
  </ul>
);

export default CommentList;
