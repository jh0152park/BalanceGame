import { Box, Center, HStack, Heading, VStack } from "@chakra-ui/react";
import { Helmet } from "react-helmet";
import { ColorTable } from "../Colors";

export default function Main() {
    return (
        <>
            <Helmet>
                <title>Main</title>
            </Helmet>
            <Center w="100%" h="100vh">
                <VStack mt="-300px">
                    <Heading>⬆카테고리를 선택해서 시작해보세요⬆</Heading>
                    <HStack spacing="50px">
                        <Center
                            w="500px"
                            h="400px"
                            borderRadius="20px"
                            bgColor={ColorTable.red}
                            fontWeight="bold"
                            fontSize="50px"
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
                        >
                            Ready?
                        </Center>
                    </HStack>
                </VStack>
            </Center>
        </>
    );
}
