import { useEffect, useState } from "react";
import type { PostType } from "../../../../entities/[entity]/model/types";

const usePosts = () => {
    const [posts, setPosts] = useState<PostType[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        let ignore = false;
        const fetchPosts = async () => {
            try {
                const responsePosts = await fetch('https://posts-a4627-default-rtdb.firebaseio.com/posts.json');
                const posts = await responsePosts.json();
                if (!ignore) {
                    setPosts(posts);
                }
            } catch (error) {
                console.error('Ошибка при получении постов:', error);
            } finally {
                setIsLoading(false);
            }
        }
        fetchPosts();
        return () => {
            ignore = true;
        }
    }, []);

    return { posts, isLoading }
}

export default usePosts