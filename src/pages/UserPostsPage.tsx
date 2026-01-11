import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavButton from "../shared/ui/NavButton/NavButton";
import type { PostType } from "../widgets/PostList/PostList";
import type { PostLengthFilterProps } from "../features/PostLengthFilter/ui/PostLengthFilter";
import PostCard from "../entities/post/ui/PostCard";
import CommentList from "../widgets/CommentList/ui/CommentList";
import styleLi from '../entities/post/ui/postCard.module.css';
import style from "../shared/lib/hoc/styleLoader.module.css";


const UserPostsPage = () => {
    const params = useParams();
    const userId = params.id;
    const [data, setData] = useState<PostLengthFilterProps>({ posts: [] });
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        let ignore = false;
        const getPostsUser = async () => {
            try {
                const responsePosts = await fetch("https://posts-a4627-default-rtdb.firebaseio.com/posts.json");
                const posts = await responsePosts.json();
                const postsUser = userId
                    ? posts.filter((post: PostType) => post.userId === parseInt(userId))
                    : [];
                if (!ignore) {
                    setData({ posts: postsUser });
                }
            } catch (error) {
                console.error('Ошибка при получении постов пользователя:', error);
            } finally {
                setIsLoading(false);
            }
        };
        getPostsUser();
        return () => {
            ignore = true;
        }
    }, [userId]);

    if (isLoading) {
        return <p className={style.loader}>...Загрузка...</p>;
    }


    if (userId && !data.posts.length) {
        return (
            <>
                <p>Такого пользователя нет</p>
                <NavButton path={"/user"}>Вернуться назад</NavButton>
                <NavButton path={"/"} >Вернуться на главную страницу</NavButton>
            </>
        )
    }
    else
        return (
            <>
                <div>
                    <h2>Посты пользователя {userId}</h2>
                    <ul>
                        {data.posts.map((post: PostType) => (
                            <li key={post.id} className={styleLi.postCard}>
                                <PostCard post={post} />
                                <CommentList post={post} />
                            </li>
                        ))}
                    </ul>
                </div>
                <NavButton path={"/user"}>Вернуться назад</NavButton>
                <NavButton path={"/"} >Вернуться на главную страницу</NavButton>
            </>
        );
};

export default UserPostsPage