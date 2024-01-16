import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Center, Heading } from "@chakra-ui/react";
import React from "react";
import Notfound from "./screens/defaults/Notfound";
import Layout from "./screens/defaults/Layout";

const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <Notfound />,
        element: <Layout />,
    },
]);

function App() {
    return (
        // <Center w="100%" h="100vh">
        //     <Heading fontFamily="Rubik Burned">
        //         Balance Game by Instead of me
        //     </Heading>
        // </Center>
        <RouterProvider router={router} />
    );
}

export default App;
