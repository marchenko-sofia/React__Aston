import styles from '../PostList/postList.module.css'
import style from "../../entities/post/ui/postCard.module.css"
import PostCard from '../../entities/post/ui/PostCard';
import CommentCard from '../../entities/post/ui/CommentCard';
import { useState, useEffect } from 'react';

export type PostType = {
    userId: number,
    id: number,
    title: string,
    body: string,
};
type CommentType = {
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string,
};

// const posts: PostType[] = [
//     { id: 1, title: 'Первый пост', content: 'Моя первая домашка', comment: 'Вау' },
//     { id: 2, title: 'Второй пост', content: 'Вторая домашка', comment: 'Круто' },
//     { id: 3, title: 'Третий пост', content: 'Я (не) отчаялась', comment: 'Респект' },
// ];

async function fetchData() {
    const responsePosts = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await responsePosts.json();

    const responseComments = await fetch('https://jsonplaceholder.typicode.com/comments');
    const comments = await responseComments.json();

    return { posts, comments };
};

function PostList() {

    const [data, setData] = useState({ posts: [], comments: [] });

    useEffect(() => {
        async function loadData() {
            try {
                const result = await fetchData();
                setData(result);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        loadData();
    }, []);

    if (!data.posts.length) return null;


    return (
        <ul className={styles.postList}>

            {data.posts.map((post: PostType) => (

                <li key={post.id} className={style.postCard}>
                    <PostCard post={post} />
                    <h5>Комментарии:</h5>
                    {data.comments
                        .filter((comment: CommentType) => post.id === comment.postId)
                        .map((comment: CommentType) => <CommentCard key={comment.id} comment={comment} />)
                    }
                </li>

            ))}
        </ul>
    );
};

export default PostList