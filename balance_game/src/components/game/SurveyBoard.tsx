import { Center, HStack, Heading } from "@chakra-ui/react";
import { IGame } from "../../ProjectTypes";
import Board from "./Board";
import { ColorTable } from "../../Colors";

export default function SurveyBoard({ games }: { games: IGame[] }) {
    console.log(games);
    return (
        <>
            <Center w="100%" h="70px">
                <Heading>게임 타이틀</Heading>
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
