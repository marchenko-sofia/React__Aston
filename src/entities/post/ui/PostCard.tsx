import React from "react";

interface IProps {
    post: {
        id: number,
        title: string,
        content: string,
        comment: string,
    };
}

function PostCard({ post }: IProps) {

    return (
        <React.Fragment>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <p>Комментарии: {post.comment}</p>
        </React.Fragment>
    );
};

export default PostCard