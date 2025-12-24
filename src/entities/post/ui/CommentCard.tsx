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
            <p className="comment-name">{comment.name}</p>
            <p className="comment-text">{comment.body}</p>
        </div>
    );
};

export default CommentCard