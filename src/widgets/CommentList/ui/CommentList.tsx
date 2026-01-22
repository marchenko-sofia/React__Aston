import { useCallback, useState } from "react";
import type { PostCardProps } from "../../../entities/post/ui/PostCard";
import CommentCard from "../../../entities/post/ui/CommentCard";
import style from "../../../shared/lib/hoc/styleLoader.module.css";
import { commentsApi } from "../../../entities/[entity]/api/commentsApi";
import type { CommentType } from "../../../entities/[entity]/model/types";

import type { MouseEvent } from "react";


const CommentList = ({ post }: PostCardProps) => {
    const [expanded, setExpanded] = useState(false);
    const buttonContent = expanded ? 'Скрыть' : 'Развернуть комментарии';
    const { data: comments, isLoading, error } = commentsApi.useGetAllCommentsQuery('');

    const toggleExpand = useCallback((event: MouseEvent<HTMLButtonElement>) => {
        setExpanded(!expanded);
        console.log(event.target);
    }, [expanded]);

    return (
        <>
            {isLoading && <p className={style.loader}>...Загрузка...</p>}
            {error && <p>Упс!<sub>I Did It Again</sub> Произошла ошибка</p>}

            <button className="commentButton" onClick={toggleExpand}>{buttonContent}</button>

            {expanded && comments && comments
                .filter((comment: CommentType) => post.id === comment.postId)
                .map((comment: CommentType) => <CommentCard key={comment.id} comment={comment} />)
            }
        </>
    )
};

export default CommentList