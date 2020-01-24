import { connect } from "react-redux";
import ReplyInput from "../../components/comment/ReplyInput.jsx";
import { addReplyToComment } from "../../redux/modules/comments";

export default connect(
    null,
    dispatch => ({ addReplyToComment: (commentId, content) => dispatch(addReplyToComment(commentId, content)) }),
)(ReplyInput);
