import React from "react";

interface IProps {
    post: {
        userId: number,
        id: number,
        title: string,
        body: string,
    };
}

function PostCard({ post }: IProps) {

    return (
        <React.Fragment>
            <h3 className="post-title">{post.title}</h3>
            <p>{post.body}</p>
        </React.Fragment>
    );
};

export default PostCard