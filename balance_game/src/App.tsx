import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Center, Heading } from "@chakra-ui/react";
import React from "react";

const router = createBrowserRouter([]);

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
