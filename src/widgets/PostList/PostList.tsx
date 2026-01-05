import PostLengthFilter, { type PostLengthFilterProps } from '../../features/PostLengthFilter/ui/PostLengthFilter';
import { useState, useEffect } from 'react';
import withLoading, { type IWithLoadingProps } from '../../shared/lib/hoc/withLoading';

export type PostType = {
    userId: number,
    id: number,
    title: string,
    body: string,
};

// Получение данных с сервера

// eslint-disable-next-line react-refresh/only-export-components
export async function fetchDataPost() {
    const responsePosts = await fetch('https://posts-a4627-default-rtdb.firebaseio.com/posts.json');
    const posts = await responsePosts.json();
    return { posts };
};

function PostList({ fetchDataPost }: IWithLoadingProps) {

    const [data, setData] = useState<PostLengthFilterProps>({ posts: [] });
    // Загрузка данных
    useEffect(() => {
        async function loadData() {
            try {
                const result = await fetchDataPost();
                setData(result);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        if (!data.posts.length) { loadData(); }

    }, [fetchDataPost, data]);

    if (!data.posts.length) return null;

    return (
        <PostLengthFilter posts={data.posts} />
    );
};

// Оборачиваем в HOC
const PostListwithLoading = withLoading(PostList);

export default PostListwithLoading