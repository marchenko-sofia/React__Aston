import PostCard from '../../entities/post/ui/PostCard';

export type PostType = {
    id: number,
    title: string,
    content: string,
};

const posts: PostType[] = [
    { id: 1, title: 'Первый пост', content: 'Моя первая домашка' },
    { id: 2, title: 'Второй пост', content: 'Было достаточно тяжело' },
    { id: 3, title: 'Третий пост', content: 'Но я не отчаялась' },
];

// Получение постов с сервера
// const response = await fetch('#')
// const posts = await response.json();


function PostList() {
    return (
        <ul className='postList'>
            {posts.map((post: PostType) => (
                <li key={post.id}>
                    <PostCard post={post} />
                </li>
            ))}
        </ul>
    );
};

export default PostList