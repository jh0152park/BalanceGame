import { Center, HStack, Heading } from "@chakra-ui/react";
import Board from "./Board";
import { ColorTable } from "../../Colors";

export default function LoadingBoard() {
    return (
        <>
            <Center w="100%" h="70px">
                <Heading>질문지를 갖고오고 있습니다!</Heading>
            </Center>
            <HStack spacing="50px">
                <Board
                    bgColor={ColorTable.red}
                    title={"준비하세요!"}
                    description={"준비하세요!"}
                />
                <Board
                    bgColor={ColorTable.blue}
                    title={"준비하세요!"}
                    description={"준비하세요!"}
                />
            </HStack>
        </>
    );
}
