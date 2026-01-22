import { configureStore } from '@reduxjs/toolkit';
import { albumsApi } from '../../../entities//[entity]/api/albumsApi';
import { commentsApi } from '../../../entities//[entity]/api/commentsApi';
import { postsApi } from '../../../entities//[entity]/api/postsApi';
import { todosApi } from '../../../entities//[entity]/api/todosApi';
import { setupListeners } from '@reduxjs/toolkit/query/react';

// Настройка стора
const store = configureStore({
    reducer: {
        [albumsApi.reducerPath]: albumsApi.reducer,
        [commentsApi.reducerPath]: commentsApi.reducer,
        [postsApi.reducerPath]: postsApi.reducer,
        [todosApi.reducerPath]: todosApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([
            albumsApi.middleware,
            commentsApi.middleware,
            postsApi.middleware,
            todosApi.middleware,
        ]),
});

// Автоматическое удаление старых запросов и поддержка инвалидации кеша
setupListeners(store.dispatch);

export default store