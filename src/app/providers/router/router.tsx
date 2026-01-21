import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../../shared/layouts/MainLayout";
import HomePage from "../../../pages/HomePage";
import AllPostPage from "../../../pages/AllPostsPage";
import UserPage from "../../../pages/UserPage";
import SinglePostPage from "../../../pages/SinglePostPage";
import UserTodosPage from "../../../pages/UserTodosPage";
import UserAlbumsPage from "../../../pages/UserAlbumsPage";
import UserPostsPage from "../../../pages/UserPostsPage";
import PhotosPage from "../../../pages/PhotosPage";
import NotFoundPage from "../../../pages/NotFoundPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { index: true, element: <HomePage /> },
            { path: "posts", element: <AllPostPage /> },
            { path: "user", element: <UserPage /> },
            { path: "/posts/:id", element: <SinglePostPage /> },
            { path: "/users/:id/todos", element: <UserTodosPage /> },
            { path: "/users/:id/posts", element: <UserPostsPage /> },
            { path: "/users/:id/albums", element: <UserAlbumsPage /> },
            { path: "/albums/:id/photos", element: <PhotosPage /> },
            { path: "*", element: <NotFoundPage /> },
        ],
    }
]);