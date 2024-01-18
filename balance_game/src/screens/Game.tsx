import { Center, VStack } from "@chakra-ui/react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { CATEGORIES_ENG, IGame } from "../ProjectTypes";
import { useQuery, useQueryClient } from "react-query";
import { getEntireGame, getGame } from "../Api";
import { useRecoilValue } from "recoil";
import { CurrentCategory } from "../global/ProjectCommon";
import LoadingBoard from "../components/game/LoadingBoard";
import EmptyBoard from "../components/game/EmptyBoard";
import SurveyBoard from "../components/game/SurveyBoard";

export default function Game() {
    const { gameCategory } = useParams();
    const queryClient = useQueryClient();
    const currentCategory = useRecoilValue(CurrentCategory);

    const category = Object.keys(CATEGORIES_ENG).find(
        (key) => CATEGORIES_ENG[key] === gameCategory
    );

    const [isEmpty, setIsEmpty] = useState(true);
    const { isLoading, data: gameList } = useQuery<IGame[]>(
        ["game", category],
        category === "랜덤" ? getEntireGame : getGame
    );

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
                    {isLoading || gameList === undefined ? (
                        <LoadingBoard />
                    ) : isEmpty ? (
                        <EmptyBoard />
                    ) : (
                        <SurveyBoard games={gameList} />
                    )}
                </VStack>
            </Center>
        </>
    );
}
