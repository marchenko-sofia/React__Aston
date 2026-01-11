import { useCallback, useEffect, useState } from "react";
import type { IPropsPost } from "../../../entities/post/ui/PostCard";
import React from "react";
import CommentCard from "../../../entities/post/ui/CommentCard";
import style from "../../../shared/lib/hoc/styleLoader.module.css";

type CommentType = {
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string,
};

const CommentList = ({ post }: IPropsPost) => {
    const [expanded, setExpanded] = useState(false);
    const buttonContent = expanded ? 'Скрыть' : 'Развернуть комментарии';

    const toggleExpand = useCallback(() => {
        setExpanded(!expanded);
    }, [expanded]);

    // Попытка использовать кастомный хук получения данных
    // const url = "https://comments-2efbd-default-rtdb.firebaseio.com/comments.json";
    // const { comments, isLoading } = useFetchData<CommentType>(url);

    const [comments, setСomments] = useState<CommentType[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        let ignore = false;
        const fetchPosts = async () => {
            try {
                const responseСomments = await fetch('https://comments-2efbd-default-rtdb.firebaseio.com/comments.json');
                const comments = await responseСomments.json();
                if (!ignore) {
                    setСomments(comments);
                }
            } catch (error) {
                console.error('Ошибка при получении комментариев:', error);
            } finally {
                setIsLoading(false);
            }
        }
        fetchPosts();
        return () => {
            ignore = true;
        }
    }, []);

    if (isLoading) {
        return <p className={style.loader}>...Загрузка...</p>;
    }
    return (
        <React.Fragment>
            <button className="commentButton" onClick={toggleExpand}>{buttonContent}</button>
            {expanded && comments
                .filter((comment: CommentType) => post.id === comment.postId)
                .map((comment: CommentType) => <CommentCard key={comment.id} comment={comment} />)
            }
        </React.Fragment>
    )
}

export default CommentList