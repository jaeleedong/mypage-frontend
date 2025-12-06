import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/BlogLayout";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";
import CategoryPage from "../pages/CategoryPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        errorElement: <NotFoundPage />,
        children: [
            { index: true, element: <HomePage /> },
            { path: "category/:type", element: <CategoryPage /> },
        ],
    },
]);