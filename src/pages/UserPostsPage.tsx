import { useParams } from "react-router-dom";
import NavButton from "../shared/ui/NavButton/NavButton";
import PostCard from "../entities/post/ui/PostCard";
import CommentList from "../widgets/CommentList/ui/CommentList";
import style from "../shared/lib/hoc/styleLoader.module.css";
import { postsApi } from "../entities/[entity]/api/postsApi";
import ItemList from "../shared/ui/ItemList/ItemList";

const UserPostsPage = () => {
    const params = useParams();
    const userId = params.id as string;
    const { data: posts, isLoading, error } = postsApi.useGetPostsByUserIdQuery(userId);

    return (
        <>
            {!userId && <p>Введите номер пользователя</p>}
            {isLoading && <p className={style.loader}>...Загрузка...</p>}
            {error && <p>Упс!<sub>I Did It Again</sub> Произошла ошибка</p>}
            {posts &&
                <div>
                    <h2>Посты пользователя {userId}</h2>
                    <ItemList items={posts} renderItem={
                        (post) => <>
                            <PostCard post={post} />
                            <CommentList post={post} />
                        </>
                    } />
                </div>
            }
            <NavButton path={"/user"}>Вернуться назад</NavButton>
            <NavButton path={"/"} >Вернуться на главную страницу</NavButton>
        </>
    );
};

export default UserPostsPage