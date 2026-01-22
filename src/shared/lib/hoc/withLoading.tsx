import { type FC, type PropsWithChildren } from 'react';
import usePosts from '../../../features/PostList/model/hooks/usePosts';
import style from '../hoc/styleLoader.module.css';
import type { PostType } from '../../../entities/[entity]/model/types';

// Интерфейс пропсов для HOC
export type withLoadingProps = {
    posts: PostType[];
}

// Общий тип для оборачиваемых компонентов
type LoadedComponent = FC<withLoadingProps>;

// Основная функция HOC
const withLoading = (WrappedComponent: LoadedComponent): LoadedComponent => {
    return (
        (props: PropsWithChildren<withLoadingProps>) => {
            const { posts, isLoading } = usePosts();

            if (isLoading) {
                return <p className={style.loader}>...Загрузка...</p>;
            }

            return <WrappedComponent {...props} posts={posts} />;
        }) as LoadedComponent;
};

export default withLoading