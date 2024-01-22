import {
    Box,
    Center,
    HStack,
    Heading,
    VStack,
    keyframes,
} from "@chakra-ui/react";
import { ColorTable } from "../../Colors";

export default function Preview() {
    const fontColors = keyframes`
        20% {color: gold;}
        40% {color: dodgerblue;}
        60% {color: lawngreen;}
        80% {color: fuchsia;}
        100% {color: skyblue;}
    `;

    const animation = `${fontColors} 1s infinite`;

    return (
        <VStack mt="95px">
            <Box h="70px">
                <Heading animation={animation} color="whitesmoke">
                    ⬆카테고리를 선택해서 시작해보세요⬆
                </Heading>
            </Box>
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
    );
}
