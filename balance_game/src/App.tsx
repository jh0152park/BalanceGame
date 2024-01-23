import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Center, Heading } from "@chakra-ui/react";
import React, { useEffect } from "react";
import Notfound from "./screens/defaults/Notfound";
import Layout from "./screens/defaults/Layout";
import Home from "./screens/Home";
import Main from "./screens/Main";
import Game from "./screens/Game";
import Mypage from "./screens/Mypage";
import Survey from "./screens/Survey";
import Social from "./screens/Social";
import { useSetRecoilState } from "recoil";
import { CurrentMode } from "./global/projectCommon";

const router = createBrowserRouter(
    [
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
        // social 로그인 시 리다이렉션 할 url
        {
            path: "/auth",
            errorElement: <Notfound />,
            element: <Layout />,
            children: [
                {
                    path: "social/:uid/:email/:nickname/:accessToken",
                    element: <Social />,
                },
            ],
        },
    ],
    { basename: "/BalanceGame_Front" }
);

function App() {
    const setCurrentMode = useSetRecoilState(CurrentMode);

    useEffect(() => {
        if (document.documentElement.clientWidth < 500) {
            setCurrentMode("mobile");
        }
    }, []);

    return <RouterProvider router={router} />;
}

export default App;
