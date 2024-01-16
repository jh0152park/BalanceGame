import { Box, Heading } from "@chakra-ui/react";
import { Helmet } from "react-helmet";

export default function Main() {
    return (
        <>
            <Helmet>
                <title>Main</title>
            </Helmet>
            <Box w="100%" h="100vh">
                <Heading>Main</Heading>
            </Box>
        </>
    );
}
