import type { PostType } from '../../../widgets/PostList/PostList';

const filterByLength = (data: PostType[], maxLength: number) => {
    const filteredData = data.filter((post: PostType) => post.title.length <= maxLength);
    return filteredData;
}

export default filterByLength