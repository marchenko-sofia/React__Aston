import React from "react";

export interface IPropsPost {
    post: {
        userId: number,
        id: number,
        title: string,
        body: string,
    };
}

function PostCard({ post }: IPropsPost) {
    return (
        <React.Fragment>
            <h3 className="post-title">{post.title}</h3>
            <p>{post.body}</p>
        </React.Fragment>
    );
};

export default PostCard