import { useParams } from "react-router-dom";
import NavButton from "../shared/ui/NavButton/NavButton";
import { useState, useEffect } from "react";
import type { PostType } from "../widgets/PostList/PostList";
import PostCard from "../entities/post/ui/PostCard";
import CommentList from "../widgets/CommentList/ui/CommentList";
import type { PostLengthFilterProps } from "../features/PostLengthFilter/ui/PostLengthFilter";
import styleLi from '../entities/post/ui/postCard.module.css';
import style from "../shared/lib/hoc/styleLoader.module.css";

const SinglePostPage = () => {
    const params = useParams();
    const postId = params.id;
    const [data, setData] = useState<PostLengthFilterProps>({ posts: [] });
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getPostById = async () => {
            try {
                const responsePosts = await fetch("https://posts-a4627-default-rtdb.firebaseio.com/posts.json");
                const posts = await responsePosts.json();
                const postById = postId
                    ? posts.filter((post: PostType) => post.id === parseInt(postId))
                    : {};
                setData({ posts: postById });
            } catch (error) {
                console.error('Ошибка при получении поста:', error);
            } finally {
                setIsLoading(false);
            }
        };
        getPostById();
    }, [postId]);

    if (isLoading) {
        return <p className={style.loader}>...Загрузка...</p>;
    }

    if (postId && !data.posts.length) {
        return (
            <>
                <p>Такого поста нет</p>
                <NavButton path={"/posts"}>Вернуться назад</NavButton>
                <NavButton path={"/"} >Вернуться на главную страницу</NavButton>
            </>
        )
    }
    else
        return (
            <>
                <div>
                    <h2>Пост {postId}</h2>
                    <ul>
                        {data.posts.map((post: PostType) => (
                            <li key={post.id} className={styleLi.postCard}>
                                <PostCard post={post} />
                                <CommentList post={post} />
                            </li>
                        ))}
                    </ul>
                </div>
                <NavButton path={"/posts"}>Вернуться назад</NavButton>
                <NavButton path={"/"} >Вернуться на главную страницу</NavButton>
            </>
        );
}

export default SinglePostPage