import { useCallback, useEffect, useState } from "react";
import type { IPropsPost } from "../../../entities/post/ui/PostCard";
import React from "react";
import CommentCard from "../../../entities/post/ui/CommentCard";

type CommentType = {
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string,
};

async function fetchDataComments() {
    const responseComments = await fetch('https://comments-2efbd-default-rtdb.firebaseio.com/comments.json');
    const comments = await responseComments.json();
    return { comments };
};

const CommentList = ({ post }: IPropsPost) => {
    const [data, setData] = useState({ comments: [] });
    const [expanded, setExpanded] = useState(false);
    const buttonContent = expanded ? 'Скрыть' : 'Развернуть комментарии';

    const toggleExpand = useCallback(() => {
        setExpanded(!expanded);
    }, [expanded]);

    /*Попытка оптимизировать запросы на сервер  
    const loadData = useCallback(async () => {
        try {
            const result = await fetchDataComments();
            setData(result);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }, [])
    useEffect(() => {
        if (!data.comments.length) {
            loadData();// синхронно с setData - ошибка
        }
    }, [data.comments, loadData]);*/

    useEffect(() => {
        async function loadData() {
            try {
                const result = await fetchDataComments();
                setData(result);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        if (!data.comments.length) { loadData(); }
    }, [data.comments]);

    return (
        <React.Fragment>
            <button className="commentButton" onClick={toggleExpand}>{buttonContent}</button>
            {expanded && data.comments
                .filter((comment: CommentType) => post.id === comment.postId)
                .map((comment: CommentType) => <CommentCard key={comment.id} comment={comment} />)
            }
        </React.Fragment>
    )
}

export default CommentList