import { Box, Center, HStack, Heading, VStack } from "@chakra-ui/react";
import { Helmet } from "react-helmet";
import { ColorTable } from "../Colors";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Board from "../components/game/Board";
import { CATEGORIES_ENG, IGame } from "../ProjectTypes";
import { useQuery, useQueryClient } from "react-query";
import { getEntireGame, getGame } from "../Api";
import { useRecoilValue } from "recoil";
import { CurrentCategory } from "../global/ProjectCommon";

export default function Game() {
    // const gameList = [];
    const { gameCategory } = useParams();
    const queryClient = useQueryClient();
    const currentCategory = useRecoilValue(CurrentCategory);
    const category = Object.keys(CATEGORIES_ENG).find(
        (key) => CATEGORIES_ENG[key] === gameCategory
    );
    const { isLoading, data: gameList } = useQuery<IGame[]>(
        ["game", category],
        category === "랜덤" ? getEntireGame : getGame
    );

    const [isEmpty, setIsEmpty] = useState(true);
    const emptyTitle = `${category} 카테고리에 아직 질문이 없습니다!! 로그인 후 질문을 등록해보세요!`;
    const emptyText = "내가만든 질문 등록하기!";

    // console.log(isLoading);
    console.log(gameList);

    // useEffect(() => {
    //     queryClient.refetchQueries(["game", currentCategory]);
    // }, [currentCategory]);

    useEffect(() => {
        if (!isLoading) {
            if (gameList === undefined) {
                setIsEmpty(true);
            } else if (gameList.length === 0) {
                setIsEmpty(true);
            } else {
                setIsEmpty(false);
            }
            queryClient.removeQueries(["game", currentCategory]);
        }
    }, [isLoading]);

    return (
        <>
            <Helmet>
                <title>Main</title>
            </Helmet>
            <Center w="100%" h="100vh">
                <VStack mt="-140px">
                    <Center w="100%" h="70px">
                        <Heading>
                            {isLoading
                                ? "질문지를 갖고오고 있습니다!"
                                : isEmpty
                                ? emptyTitle
                                : ""}
                        </Heading>
                    </Center>
                    <HStack spacing="50px">
                        <Board
                            bgColor={ColorTable.red}
                            title={
                                isLoading
                                    ? "준비하세요!"
                                    : isEmpty
                                    ? emptyText
                                    : ""
                            }
                            description={
                                isLoading
                                    ? "준비하세요!"
                                    : isEmpty
                                    ? emptyText
                                    : ""
                            }
                        />
                        <Board
                            bgColor={ColorTable.blue}
                            title={
                                isLoading
                                    ? "준비하세요!"
                                    : isEmpty
                                    ? emptyText
                                    : ""
                            }
                            description={
                                isLoading
                                    ? "준비하세요!"
                                    : isEmpty
                                    ? emptyText
                                    : ""
                            }
                        />
                    </HStack>
                </VStack>
            </Center>
        </>
    );
}
