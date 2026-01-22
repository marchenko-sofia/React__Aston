import type { PostType } from "../../../entities/[entity]/model/types";

const filterByLength = (data: PostType[], maxLength: number): PostType[] => {
    const filteredData = data.filter((post: PostType) => post.title.length <= maxLength);
    return filteredData;
}

export default filterByLength