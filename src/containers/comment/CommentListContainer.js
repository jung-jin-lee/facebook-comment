import { connect } from "react-redux";
import CommentList from "../../components/comment/CommentList";
import { cancelLikeToComment, deleteComment, likeToComment } from "../../redux/modules/comments";

const mapStateToProps = ({ comments }) => ({ comments });

const mapDispatchToProps = dispatch => ({
    cancelLikeToComment: (id, userId) => dispatch(cancelLikeToComment(id, userId)),
    deleteComment: id => dispatch(deleteComment(id)),
    likeToComment: (id, userId) => dispatch(likeToComment(id, userId)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(CommentList);
