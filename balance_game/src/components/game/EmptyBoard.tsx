import { Center, HStack, Heading } from "@chakra-ui/react";
import Board from "./Board";
import { ColorTable } from "../../colors";

export default function EmptyBoard() {
    return (
        <>
            <Center w="100%" h="70px">
                <Heading>
                    아직 등록된 질문이 없습니다, 로그인 후 첫질문을
                    등록해주세요!
                </Heading>
            </Center>
            <HStack spacing="50px">
                <Board
                    bgColor={ColorTable.red}
                    title={"내가만든 질문 등록하기!"}
                    description={"내가만든 질문 등록하기!"}
                />
                <Board
                    bgColor={ColorTable.blue}
                    title={"내가만든 질문 등록하기!"}
                    description={"내가만든 질문 등록하기!"}
                />
            </HStack>
        </>
    );
}
