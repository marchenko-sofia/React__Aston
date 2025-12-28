import style from "../ui/commentCard.module.css"


interface IProps {
    comment: {
        postId: number,
        id: number,
        name: string,
        email: string,
        body: string,
    }
}

function CommentCard({ comment }: IProps) {

    return (
        <div className="comment">
            <p className="comment-content"><span className={style.commentName}>{comment.name}</span>: {comment.body}</p>
        </div>
    );
};

export default CommentCard