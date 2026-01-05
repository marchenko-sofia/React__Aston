import React, { type FC, useState, useEffect } from 'react';
import type { PostType } from '../../../widgets/PostList/PostList';
import style from '../hoc/styleLoader.module.css';

// Интерфейс пропсов для HOC
export interface IWithLoadingProps {
    children?: React.ReactNode;
    loader?: React.ReactNode; // 
    fetchDataPost(): Promise<{
        posts: PostType[];
    }>; // Метод для получения данных
}

// Общий тип для оборачиваемых компонентов
type LoadedComponent = FC<IWithLoadingProps>;

// Основная функция HOC
const withLoading = (WrappedComponent: LoadedComponent): LoadedComponent => {
    return (
        (props: IWithLoadingProps) => {
            const { loader = <div className={style.loader}>...Загрузка...</div>, fetchDataPost } = props;
            const [loading, setLoading] = useState(true);

            useEffect(() => {
                const loadData = async () => {
                    await fetchDataPost();
                    setLoading(false);
                };
                loadData();
            }, [fetchDataPost]);

            return loading ? loader : <WrappedComponent {...props} />;
        }) as LoadedComponent;
};

export default withLoading