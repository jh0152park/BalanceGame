import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Center, Heading } from "@chakra-ui/react";
import React from "react";
import Notfound from "./screens/defaults/Notfound";
import Layout from "./screens/defaults/Layout";
import Home from "./screens/Home";
import Main from "./screens/Main";
import Game from "./screens/Game";
import Mypage from "./screens/Mypage";
import Survey from "./screens/Survey";

const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <Notfound />,
        element: <Layout />,
        children: [
            {
                path: "",
                element: <Home />,
            },
            {
                path: "main",
                element: <Main />,
            },
            {
                path: "mypage",
                element: <Mypage />,
            },
            {
                path: "survey",
                element: <Survey />,
            },
            {
                path: "game/:gameCategory",
                element: <Game />,
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
