import { Center, HStack, Heading, VStack } from "@chakra-ui/react";
import Board from "./Board";
import { ColorTable } from "../../colors";
import BoardMobile from "./BoardMobile";

export default function LoadingBoardMobile() {
    return (
        <>
            <Center w="100%" h="70px">
                <Heading fontSize="25px">질문지를 갖고오고 있습니다!</Heading>
            </Center>
            <VStack w="100%">
                <BoardMobile
                    bgColor={ColorTable.red}
                    title={"준비하세요!"}
                    description={"준비하세요!"}
                />
                <BoardMobile
                    bgColor={ColorTable.blue}
                    title={"준비하세요!"}
                    description={"준비하세요!"}
                />
            </VStack>
        </>
    );
}
