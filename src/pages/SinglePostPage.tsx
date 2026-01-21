import { useParams } from "react-router-dom";
import NavButton from "../shared/ui/NavButton/NavButton";
import PostCard from "../entities/post/ui/PostCard";
import CommentList from "../widgets/CommentList/ui/CommentList";
import styleLi from '../entities/post/ui/postCard.module.css';
import style from "../shared/lib/hoc/styleLoader.module.css";

import { postsApi } from "../entities/[entity]/api/postsApi";

const SinglePostPage = () => {
    const params = useParams();
    const postId = params.id as string;
    const { data: post, isLoading, error } = postsApi.useGetPostByIdQuery(postId);

    return (
        <>
            {!postId && <p>Введите номер поста</p>}
            {isLoading && <p className={style.loader}>...Загрузка...</p>}
            {error && <p>Упс!<sub>I Did It Again</sub> Произошла ошибка</p>}
            {post &&
                <div>
                    <h2>Пост номер {postId}</h2>
                    <ul>
                        <li key={post.id} className={styleLi.postCard}>
                            <PostCard post={post} />
                            <CommentList post={post} />
                        </li>
                    </ul>
                </div>
            }

            <NavButton path={"/posts"}>Вернуться назад</NavButton>
            <NavButton path={"/"} >Вернуться на главную страницу</NavButton>
        </>
    );
}

export default SinglePostPage