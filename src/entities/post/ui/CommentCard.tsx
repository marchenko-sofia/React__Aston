import style from "../ui/commentCard.module.css"


export interface IPropsCommemt {
    comment: {
        postId: number,
        id: number,
        name: string,
        email: string,
        body: string,
    }
}

function CommentCard({ comment }: IPropsCommemt) {

    return (
        <div className="comment">
            <p className={style.commentContent}><span className={style.commentName}>{comment.name}</span>: {comment.body}</p>
        </div>
    );
};

export default CommentCard