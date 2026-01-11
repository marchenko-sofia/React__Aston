import PostLengthFilter from '../../features/PostLengthFilter/ui/PostLengthFilter';
import withLoading from '../../shared/lib/hoc/withLoading';

export type PostType = {
    userId: number,
    id: number,
    title: string,
    body: string,
};


function PostList({ posts }: { posts: PostType[] }) {

    if (!posts.length) return null;

    return (
        <PostLengthFilter posts={posts} />
    );
};

// Оборачиваем в HOC
const PostListwithLoading = withLoading(PostList);

export default PostListwithLoading