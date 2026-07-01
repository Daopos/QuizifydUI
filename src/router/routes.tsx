import HomeLayout from "@/layout/HomeLayout";
import AddArticle from "@/pages/AddArticle";
import Home from "@/pages/Home";
import { createBrowserRouter, Navigate } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        children: [
            { path: "home", element: <Home /> },
            { path: "addArticle", element: <AddArticle /> }
        ]
    },
])

export default router;