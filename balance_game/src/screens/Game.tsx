import { Center, VStack } from "@chakra-ui/react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { CATEGORIES_ENG, IGame } from "../ProjectTypes";
import { useQuery, useQueryClient } from "react-query";
import { getEntireGame, getGame } from "../Api";
import { useRecoilValue } from "recoil";
import { CurrentCategory, CurrentMode } from "../global/ProjectCommon";
import LoadingBoard from "../components/game/LoadingBoard";
import EmptyBoard from "../components/game/EmptyBoard";
import SurveyBoard from "../components/game/SurveyBoard";
import LoadingBoardMobile from "../components/game/LoadingBoardMobile";
import EmptyBoardMobile from "../components/game/EmptyBoardMobile";
import SurveyBoardMobile from "../components/game/SurveyBoardMobile";

export default function Game() {
    const { gameCategory } = useParams();
    const queryClient = useQueryClient();
    const currentCategory = useRecoilValue(CurrentCategory);
    const isMobile = useRecoilValue(CurrentMode) === "mobile";

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
            <VStack w="100%">
                <VStack mt="95px">
                    {isLoading || gameList === undefined ? (
                        isMobile ? (
                            <LoadingBoardMobile />
                        ) : (
                            <LoadingBoard />
                        )
                    ) : isEmpty ? (
                        isMobile ? (
                            <EmptyBoardMobile />
                        ) : (
                            <EmptyBoard />
                        )
                    ) : isMobile ? (
                        <SurveyBoardMobile games={gameList} />
                    ) : (
                        <SurveyBoard games={gameList} />
                    )}
                </VStack>
            </VStack>
        </>
    );
}
