import NavButton from "../shared/ui/NavButton/NavButton";
import { useState } from "react";
import styleInput from "../features/PostLengthFilter/ui/styleInput.module.css";
import style from "../shared/lib/hoc/styleLoader.module.css";
import PostList from "../widgets/PostList/PostList";
import { postsApi } from "../entities/[entity]/api/postsApi";

const AllPostPage = () => {

    const [postId, setPostId] = useState<string>('');

    const { data: posts, isLoading, error } = postsApi.useGetAllPostsQuery('');

    return (
        <>
            <input type='text' id='searchPost'
                className={styleInput.input}
                value={postId}
                onChange={(event) => setPostId(event.target.value)}
                placeholder="Введите номер поста" />
            <NavButton path={`/posts/${postId}`}>Посмотреть пост {postId}</NavButton>
            <NavButton path={"/"} >Вернуться на главную страницу</NavButton>
            <br />
            {isLoading && <p className={style.loader}>...Загрузка...</p>}
            {error && <p>Упс!<sub>I Did It Again</sub> Произошла ошибка</p>}
            {posts && <PostList posts={posts} />}
        </>
    );
}

export default AllPostPage