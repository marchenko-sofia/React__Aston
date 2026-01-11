import PostListwithLoading from "../widgets/PostList/PostList";
import NavButton from "../shared/ui/NavButton/NavButton";
import { useState } from "react";
import style from "../features/PostLengthFilter/ui/styleInput.module.css";

const AllPostPage = () => {
    const [postId, setPostId] = useState<string>('');

    return (
        <>
            <input type='text' id='searchPost'
                className={style.input}
                value={postId}
                onChange={(event) => setPostId(event.target.value)}
                placeholder="Введите номер поста" />
            <NavButton path={`/posts/${postId}`}>Посмотреть пост {postId}</NavButton>
            <NavButton path={"/"} >Вернуться на главную страницу</NavButton>
            <br />

            <PostListwithLoading posts={[]} />

        </>
    )
}

export default AllPostPage