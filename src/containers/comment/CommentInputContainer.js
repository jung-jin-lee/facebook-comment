import { connect } from "react-redux";
import CommentInput from "../../components/comment/CommentInput.jsx";
import { addComment } from "../../redux/modules/comments";

export default connect(
    null,
    dispatch => ({ addComment: content => dispatch(addComment(content)) }),
)(CommentInput);
