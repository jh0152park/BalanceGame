import { Box, Center, HStack, Heading, VStack } from "@chakra-ui/react";
import { Helmet } from "react-helmet";
import { ColorTable } from "../Colors";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Board from "../components/game/Board";
import { CATEGORIES_ENG } from "../ProjectTypes";

export default function Game() {
    const gameList = [];
    const { gameCategory } = useParams();
    const category = Object.keys(CATEGORIES_ENG).find(
        (key) => CATEGORIES_ENG[key] === gameCategory
    );

    const isEmpty = gameList.length === 0;
    const emptyTitle = `${category} 카테고리에 아직 질문이 없습니다!! 로그인 후 질문을 등록해보세요.`;
    const emptyText = "내가만든 질문 등록하기!";

    // console.log(gameCategory);

    return (
        <>
            <Helmet>
                <title>Main</title>
            </Helmet>
            <Center w="100%" h="100vh">
                <VStack mt="-140px">
                    <Center w="100%" h="70px">
                        <Heading>{isEmpty ? emptyTitle : ""}</Heading>
                    </Center>
                    <HStack spacing="50px">
                        <Board
                            bgColor={ColorTable.red}
                            title={isEmpty ? emptyText : "GET READY!"}
                            description="waiting for funny questions"
                        />
                        <Board
                            bgColor={ColorTable.blue}
                            title={isEmpty ? emptyText : "GET READY!"}
                            description="waiting for funny questions"
                        />
                    </HStack>
                </VStack>
            </Center>
        </>
    );
}
