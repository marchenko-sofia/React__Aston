import styles from '../PostList/postList.module.css'
import style from "../../entities/post/ui/postCard.module.css"
import PostCard from '../../entities/post/ui/PostCard';

export type PostType = {
    id: number,
    title: string,
    content: string,
    comment: string,
};

const posts: PostType[] = [
    { id: 1, title: 'Первый пост', content: 'Моя первая домашка', comment: 'Вау' },
    { id: 2, title: 'Второй пост', content: 'Вторая домашка', comment: 'Круто' },
    { id: 3, title: 'Третий пост', content: 'Я (не) отчаялась', comment: 'Респект' },
];

// Получение постов с сервера
// const response = await fetch('#')
// const posts = await response.json();


function PostList() {
    return (
        <ul className={styles.postList}>
            {posts.map((post: PostType) => (
                <li key={post.id} className={style.postCard}>
                    <PostCard post={post} />
                </li>
            ))}
        </ul>
    );
};

export default PostList