import React, { type FC } from 'react';
import type { PostType } from '../../../widgets/PostList/PostList';
import usePosts from '../../../features/PostList/model/hooks/usePosts';
import style from '../hoc/styleLoader.module.css';

// Интерфейс пропсов для HOC
export interface IWithLoadingProps {
    children?: React.ReactNode;
    posts: PostType[];
}

// Общий тип для оборачиваемых компонентов
type LoadedComponent = FC<IWithLoadingProps>;

// Основная функция HOC
const withLoading = (WrappedComponent: LoadedComponent): LoadedComponent => {
    return (
        (props: IWithLoadingProps) => {
            const { posts, isLoading } = usePosts();

            if (isLoading) {
                return <p className={style.loader}>...Загрузка...</p>;
            }

            return <WrappedComponent {...props} posts={posts} />;
        }) as LoadedComponent;
};

export default withLoading