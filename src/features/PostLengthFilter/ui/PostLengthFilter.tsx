import { useMemo, useState, type ChangeEvent } from 'react';
import style from './styleInput.module.css';
import filterByLength from '../lib/filterByLength';
import PostCard from '../../../entities/post/ui/PostCard';
import CommentList from '../../../widgets/CommentList/ui/CommentList';
import type { PostType } from '../../../entities/[entity]/model/types';
import ItemList from '../../../shared/ui/ItemList/ItemList';

export type PostLengthFilterProps = {
    posts: PostType[];
};

const PostLengthFilter = (data: PostLengthFilterProps) => {
    const [maxLength, setMaxLength] = useState<string>('');

    const filteredData = useMemo(() => {
        if (maxLength.trim()) {
            const length = parseInt(maxLength, 10);
            return filterByLength(data.posts, length);
        } else {
            return data.posts;
        }
    }, [maxLength, data.posts]);

    return (
        <>
            <input type='text' id='filter'
                className={style.input}
                value={maxLength}
                onChange={(event: ChangeEvent<HTMLInputElement>) => setMaxLength(event.target.value)}
                placeholder="Введите максимальную длину заголовка" />

            <ItemList items={filteredData} renderItem={(post) =>
                <>
                    <PostCard post={post} />
                    <CommentList post={post} />
                </>} />
        </>
    )
}

export default PostLengthFilter


