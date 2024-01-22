import { Center, HStack, Heading, Text, VStack } from "@chakra-ui/react";
import Board from "./Board";
import { ColorTable } from "../../Colors";
import BoardMobile from "./BoardMobile";

export default function EmptyBoardMobile() {
    return (
        <>
            <Center w="100%" h="70px">
                <VStack fontWeight="bold" fontSize="25px">
                    <Text>아직 등록된 질문이 없습니다.</Text>
                    <Text>로그인 후 첫질문을 등록해주세요!</Text>
                </VStack>
            </Center>
            <VStack>
                <BoardMobile
                    bgColor={ColorTable.red}
                    title={"내가만든 질문 등록하기!"}
                    description={"내가만든 질문 등록하기!"}
                />
                <BoardMobile
                    bgColor={ColorTable.blue}
                    title={"내가만든 질문 등록하기!"}
                    description={"내가만든 질문 등록하기!"}
                />
            </VStack>
        </>
    );
}
