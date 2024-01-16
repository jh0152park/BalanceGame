import { Box, Center, HStack, VStack } from "@chakra-ui/react";
import { Helmet } from "react-helmet";
import { ColorTable } from "../Colors";
import { useParams } from "react-router-dom";

export default function Game() {
    const { gameCategory } = useParams();

    console.log(gameCategory);

    return (
        <>
            <Helmet>
                <title>Main</title>
            </Helmet>
            <Center w="100%" h="100vh">
                <VStack mt="-300px">
                    <Box h="70px"></Box>
                    <HStack spacing="50px">
                        <Center
                            w="500px"
                            h="400px"
                            borderRadius="20px"
                            bgColor={ColorTable.red}
                            fontWeight="bold"
                            fontSize="50px"
                            _hover={{ cursor: "pointer", fontSize: "60px" }}
                            transition="all 0.2s linear"
                        >
                            Are you
                        </Center>
                        <Center
                            w="500px"
                            h="400px"
                            borderRadius="20px"
                            bgColor={ColorTable.blue}
                            fontWeight="bold"
                            fontSize="50px"
                            _hover={{ cursor: "pointer", fontSize: "60px" }}
                            transition="all 0.2s linear"
                        >
                            Ready?
                        </Center>
                    </HStack>
                </VStack>
            </Center>
        </>
    );
}
