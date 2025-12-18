interface IProps {
    post: {
        id: number,
        title: string,
        content: string,
    };
}

function PostCard({ post }: IProps) {

    return (
        <article className="postCard">
            <h3>{post.title}</h3>
            <p>{post.content}</p>
        </article>
    );
};

export default PostCard