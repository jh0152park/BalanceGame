import {
    Box,
    Center,
    HStack,
    Heading,
    VStack,
    keyframes,
} from "@chakra-ui/react";
import { ColorTable } from "../../Colors";

export default function PreviewMobile() {
    const fontColors = keyframes`
        20% {color: gold;}
        40% {color: dodgerblue;}
        60% {color: lawngreen;}
        80% {color: fuchsia;}
        100% {color: skyblue;}
    `;

    const animation = `${fontColors} 1s infinite`;

    return (
        <VStack mt="95px" w="100%" h="100vh">
            <Box h="70px">
                <Heading
                    animation={animation}
                    color="whitesmoke"
                    fontSize="23px"
                >
                    ⬆카테고리를 선택해서 시작해보세요⬆
                </Heading>
            </Box>
            <VStack w="100%" h="100%">
                <Center
                    w="90%"
                    h="30%"
                    borderRadius="20px"
                    bgColor={ColorTable.red}
                    fontWeight="bold"
                    fontSize="50px"
                >
                    Are you
                </Center>
                <Center
                    w="90%"
                    h="30%"
                    borderRadius="20px"
                    bgColor={ColorTable.blue}
                    fontWeight="bold"
                    fontSize="50px"
                >
                    Ready?
                </Center>
            </VStack>
        </VStack>
    );
}
