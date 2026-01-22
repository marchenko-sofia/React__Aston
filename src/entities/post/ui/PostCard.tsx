import React from "react";

export type PostCardProps = {
    post: {
        userId: number,
        id: number,
        title: string,
        body: string,
    };
}

function PostCard({ post }: PostCardProps) {
    return (
        <React.Fragment>
            <h3 className="post-title">{post.title}</h3>
            <p>{post.body}</p>
        </React.Fragment>
    );
};

export default PostCard