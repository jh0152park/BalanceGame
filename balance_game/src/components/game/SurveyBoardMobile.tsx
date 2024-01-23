import {
    Box,
    Center,
    HStack,
    Heading,
    Icon,
    Text,
    VStack,
} from "@chakra-ui/react";
import { IGame } from "../../projectTypes";
import { ColorTable } from "../../colors";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import {
    CurrentCategory,
    SCREEN_HEIGHT,
    SCREEN_WIDTH,
} from "../../global/projectCommon";
import { SlLike, SlDislike } from "react-icons/sl";
import { FcLike, FcDislike } from "react-icons/fc";
import Comment from "./Comment";
import { useMutation } from "react-query";
import { disLikeSurvey, likeSurvey, selectSurvey } from "../../Api";
import { go_to_top } from "../../utils/util";
import GoogleAds from "../../screens/defaults/GoogleAds";

export default function SurveyBoardMobile({ games }: { games: IGame[] }) {
    const navigate = useNavigate();
    const [sequence, setSequence] = useState<number[]>([]);
    const [sequenceIndex, setSequenceIndex] = useState(0);
    const [isSelected, setIsSelected] = useState(false);
    const [isLeftClick, setIsLeftClick] = useState(false);
    const [isRightClick, setIsRightClick] = useState(false);
    const setCurrentCategory = useSetRecoilState(CurrentCategory);

    // relate like
    const [likeClick, setLikeClick] = useState(false);
    const [disLikeClick, setDisLikeClick] = useState(false);

    // mutation
    const seleceMutation = useMutation(selectSurvey, {
        onMutate: () => {
            console.log("select mutation start");
        },
        onSuccess: (result) => {
            console.log("select mutation success");
            console.log(result);
        },
        onError: (result) => {
            console.log("select mutation failed");
            console.log(result);
        },
    });

    const likeMutation = useMutation(likeSurvey, {
        onMutate: () => {
            console.log("like mutation start");
        },
        onSuccess: (result) => {
            console.log("like mutation success");
            console.log(result);
        },
        onError: (result) => {
            console.log("like mutation failed");
            console.log(result);
        },
    });

    const disLikeMutation = useMutation(disLikeSurvey, {
        onMutate: () => {
            console.log("like mutation start");
        },
        onSuccess: (result) => {
            console.log("like mutation success");
            console.log(result);
        },
        onError: (result) => {
            console.log("like mutation failed");
            console.log(result);
        },
    });

    function nextSurvey() {
        getLikeMutation();
        getDisLikeMutation();

        if (sequenceIndex === games.length - 1) {
            navigate("/main");
            setCurrentCategory("");
            go_to_top(0);
            return;
        }

        setIsSelected(false);
        setIsLeftClick(false);
        setIsRightClick(false);
        setLikeClick(false);
        setDisLikeClick(false);
        setSequenceIndex((prev) => prev + 1);
    }

    function leftSurveyClick() {
        setIsLeftClick(true);
        setIsSelected(true);
        const gamesId = games[sequence[sequenceIndex]].gamesId;
        const gameId = games[sequence[sequenceIndex]].game[0].gameId;
        seleceMutation.mutate({ gamesId, gameId });
    }

    function rightSurveyClick() {
        setIsRightClick(true);
        setIsSelected(true);
        const gamesId = games[sequence[sequenceIndex]].gamesId;
        const gameId = games[sequence[sequenceIndex]].game[1].gameId;
        seleceMutation.mutate({ gamesId, gameId });
    }

    function sequenceGenerator() {
        let indexs: number[] = [];
        let i = 0;

        while (i < games.length) {
            let index = Math.floor(Math.random() * games.length);
            if (!indexs.includes(index)) {
                indexs.push(index);
                i++;
            }
        }
        setSequence(indexs);
    }

    // relate like
    function toggleLike() {
        setLikeClick((prev) => !prev);
    }

    function toggleDisLike() {
        setDisLikeClick((prev) => !prev);
    }

    function getLikeMutation() {
        if (!likeClick) {
            return;
        }
        const gamesId = games[sequence[sequenceIndex]].gamesId;
        likeMutation.mutate({ gamesId });
    }

    function getDisLikeMutation() {
        if (!disLikeClick) {
            return;
        }
        const gamesId = games[sequence[sequenceIndex]].gamesId;
        disLikeMutation.mutate({ gamesId });
    }

    useEffect(() => {
        sequenceGenerator();
        setIsSelected(false);
        setIsLeftClick(false);
        setIsRightClick(false);
        setLikeClick(false);
        setDisLikeClick(false);
    }, []);

    // console.log(games);
    // console.log(sequence);
    return (
        <>
            {sequence.slice(sequenceIndex, sequenceIndex + 1).map((survey) => (
                <Box key={sequenceIndex}>
                    <Center w="100%" h="70px">
                        <Text fontWeight="bold" fontSize="25px">
                            {games[sequence[sequenceIndex]].title}
                        </Text>
                    </Center>
                    <VStack spacing="50px" position="relative">
                        {isSelected && (
                            <Center
                                w={`${SCREEN_WIDTH * 0.9}px`}
                                h={`${SCREEN_HEIGHT * 0.51}px`}
                                position="absolute"
                                bgColor="rgba(255, 255, 255, 0.4)"
                                borderRadius="20px"
                                zIndex="99"
                            >
                                <Box color="black" onClick={nextSurvey}>
                                    <Text
                                        fontSize="30px"
                                        fontWeight="bold"
                                        textAlign="center"
                                    >
                                        {sequenceIndex !== games.length - 1
                                            ? "클릭해서 다음 질문으로"
                                            : "끝! 새질문을 등록해보세요!"}
                                    </Text>
                                </Box>
                            </Center>
                        )}

                        <VStack>
                            <Center
                                p="5px"
                                w={`${SCREEN_WIDTH * 0.9}px`}
                                h={`${SCREEN_HEIGHT * 0.25}px`}
                                borderRadius="20px"
                                bgColor={ColorTable.red}
                                fontWeight="bold"
                                textAlign="center"
                                position="relative"
                                onClick={leftSurveyClick}
                            >
                                <VStack>
                                    <Text fontSize="30px">
                                        {
                                            games[sequence[sequenceIndex]]
                                                .game[0].title
                                        }
                                    </Text>
                                    <Text fontSize="20px">
                                        {
                                            games[sequence[sequenceIndex]]
                                                .game[0].description
                                        }
                                    </Text>
                                    {isSelected && (
                                        <VStack
                                            mt="10px"
                                            fontSize="15px"
                                            color="black"
                                            fontWeight="bold"
                                        >
                                            <Text>
                                                {
                                                    games[
                                                        sequence[sequenceIndex]
                                                    ].game[0].selectedCount
                                                }{" "}
                                                표
                                            </Text>
                                            <Text>
                                                {
                                                    games[
                                                        sequence[sequenceIndex]
                                                    ].game[0].selectedRatio
                                                }{" "}
                                                %
                                            </Text>
                                        </VStack>
                                    )}
                                </VStack>
                                {isLeftClick && (
                                    <Heading
                                        position="absolute"
                                        top="10px"
                                        right="30px"
                                        fontSize="50px"
                                    >
                                        ✓
                                    </Heading>
                                )}
                            </Center>

                            <Center
                                p="5px"
                                w={`${SCREEN_WIDTH * 0.9}px`}
                                h={`${SCREEN_HEIGHT * 0.25}px`}
                                borderRadius="20px"
                                bgColor={ColorTable.blue}
                                fontWeight="bold"
                                textAlign="center"
                                position="relative"
                                onClick={rightSurveyClick}
                            >
                                <VStack>
                                    <Text fontSize="25px">
                                        {
                                            games[sequence[sequenceIndex]]
                                                .game[1].title
                                        }
                                    </Text>
                                    <Text fontSize="15px">
                                        {
                                            games[sequence[sequenceIndex]]
                                                .game[1].description
                                        }
                                    </Text>
                                    {isSelected && (
                                        <VStack
                                            mt="10px"
                                            fontSize="15px"
                                            color="black"
                                            fontWeight="bold"
                                        >
                                            <Text>
                                                {
                                                    games[
                                                        sequence[sequenceIndex]
                                                    ].game[1].selectedCount
                                                }{" "}
                                                표
                                            </Text>
                                            <Text>
                                                {
                                                    games[
                                                        sequence[sequenceIndex]
                                                    ].game[1].selectedRatio
                                                }{" "}
                                                %
                                            </Text>
                                        </VStack>
                                    )}
                                </VStack>

                                {isRightClick && (
                                    <Heading
                                        position="absolute"
                                        top="10px"
                                        right="30px"
                                        fontSize="50px"
                                    >
                                        ✓
                                    </Heading>
                                )}
                            </Center>
                        </VStack>
                    </VStack>

                    <Center w="100%" h="100px" mt="20px">
                        <VStack>
                            <Text fontSize="20px" fontWeight="bold">
                                질문 작성자:{" "}
                                {games[sequence[sequenceIndex]].writer}
                            </Text>
                            <HStack spacing="20px" mt="10px">
                                <Center>
                                    <Center w="100px">
                                        <Text fontWeight="bold" fontSize="25px">
                                            {likeClick
                                                ? games[sequence[sequenceIndex]]
                                                      .like + 1
                                                : games[sequence[sequenceIndex]]
                                                      .like}
                                        </Text>
                                    </Center>
                                    <Icon
                                        as={FcLike}
                                        w="30px"
                                        h="30px"
                                        _hover={{
                                            cursor: "pointer",
                                            transform: "scale(1.2)",
                                        }}
                                        transition="all 0.1s linear"
                                        onClick={toggleLike}
                                    />
                                </Center>
                                <Center>
                                    <Icon
                                        as={FcDislike}
                                        w="30px"
                                        h="30px"
                                        _hover={{
                                            cursor: "pointer",
                                            transform: "scale(1.2)",
                                        }}
                                        transition="all 0.1s linear"
                                        onClick={toggleDisLike}
                                    />
                                    <Center w="100px">
                                        <Text fontWeight="bold" fontSize="25px">
                                            {disLikeClick
                                                ? games[sequence[sequenceIndex]]
                                                      .dislike - 1
                                                : games[sequence[sequenceIndex]]
                                                      .dislike}
                                        </Text>
                                    </Center>
                                </Center>
                            </HStack>
                        </VStack>
                    </Center>

                    <Comment
                        gamesId={games[sequence[sequenceIndex]].gamesId}
                        comment={games[sequence[sequenceIndex]].comment}
                    />
                </Box>
            ))}
        </>
    );
}
