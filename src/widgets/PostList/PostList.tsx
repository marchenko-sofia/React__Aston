import PostLengthFilter from '../../features/PostLengthFilter/ui/PostLengthFilter';

export type PostType = {
    userId: number,
    id: number,
    title: string,
    body: string,
};

function PostList({ posts }: { posts: PostType[] }) {

    return (
        <PostLengthFilter posts={posts} />
    );
};

export default PostList