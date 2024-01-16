import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Center, Heading } from "@chakra-ui/react";
import React from "react";
import Notfound from "./screens/defaults/Notfound";
import Layout from "./screens/defaults/Layout";
import Home from "./screens/Home";

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
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
