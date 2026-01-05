import { useMemo, useState } from 'react';
import style from './styleInput.module.css';
import styles from '../../../widgets/PostList/postList.module.css';
import styleLi from '../../../entities/post/ui/postCard.module.css';
import filterByLength from '../lib/filterByLength';
import type { PostType } from '../../../widgets/PostList/PostList';
import PostCard from '../../../entities/post/ui/PostCard';
import CommentList from '../../../widgets/CommentList/ui/CommentList';

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
                onChange={(event) => setMaxLength(event.target.value)}
                placeholder="Введите максимальную длину заголовка" />

            <ul className={styles.postList}>
                {filteredData.map((post: PostType) => (
                    <li key={post.id} className={styleLi.postCard}>
                        <PostCard post={post} />
                        <CommentList post={post} />
                    </li>
                ))}
            </ul>
        </>
    )
}

export default PostLengthFilter