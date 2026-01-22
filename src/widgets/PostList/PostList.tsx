import type { PostType } from '../../entities/[entity]/model/types';
import PostLengthFilter from '../../features/PostLengthFilter/ui/PostLengthFilter';

function PostList({ posts }: { posts: PostType[] }) {

    return (
        <PostLengthFilter posts={posts} />
    );
};

export default PostList