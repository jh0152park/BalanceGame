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
import { CurrentCategory } from "../../global/projectCommon";
import { SlLike, SlDislike } from "react-icons/sl";
import { FcLike, FcDislike } from "react-icons/fc";
import Comment from "./Comment";
import { useMutation } from "react-query";
import { disLikeSurvey, likeSurvey, selectSurvey } from "../../Api";

import GoogleAds from "../../screens/defaults/GoogleAds";
import { go_to_top } from "../../utils/util";

export default function SurveyBoard({ games }: { games: IGame[] }) {
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
    }, []);

    // console.log(games);
    // console.log(sequence);
    return (
        <>
            {sequence.slice(sequenceIndex, sequenceIndex + 1).map((survey) => (
                <Box key={sequenceIndex}>
                    <Center w="100%" h="70px">
                        <Heading>
                            {games[sequence[sequenceIndex]].title}
                        </Heading>
                    </Center>
                    <HStack spacing="50px" position="relative">
                        {isSelected && (
                            <Center
                                w="1050px"
                                h="560px"
                                position="absolute"
                                bgColor="rgba(255, 255, 255, 0.4)"
                                borderRadius="20px"
                                zIndex="99"
                            >
                                <Box
                                    color="black"
                                    _hover={{
                                        cursor: "pointer",
                                        textDecoration: "underline",
                                    }}
                                    onClick={nextSurvey}
                                >
                                    <Heading>
                                        {sequenceIndex !== games.length - 1
                                            ? "클릭해서 다음 질문으로"
                                            : "마지막 질문이었습니다, 새로운 질문을 등록해보세요!"}
                                    </Heading>
                                </Box>
                            </Center>
                        )}

                        <VStack>
                            <Center
                                w="500px"
                                h="400px"
                                p="5px"
                                borderRadius="20px"
                                bgColor={ColorTable.red}
                                fontWeight="bold"
                                fontSize="50px"
                                textAlign="center"
                                _hover={{ cursor: "pointer", fontSize: "60px" }}
                                transition="all 0.1s linear"
                                position="relative"
                                onClick={leftSurveyClick}
                            >
                                {games[sequence[sequenceIndex]].game[0].title}
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
                                w="500px"
                                h="150px"
                                p="5px"
                                borderRadius="20px"
                                bgColor="whiteAlpha.800"
                                color="black"
                                fontWeight="bold"
                                fontSize="25px"
                                textAlign="center"
                            >
                                {!isSelected ? (
                                    games[sequence[sequenceIndex]].game[0]
                                        .description
                                ) : (
                                    <VStack>
                                        <Text>
                                            {
                                                games[sequence[sequenceIndex]]
                                                    .game[0].selectedCount
                                            }{" "}
                                            표
                                        </Text>
                                        <Text>
                                            {
                                                games[sequence[sequenceIndex]]
                                                    .game[0].selectedRatio
                                            }{" "}
                                            %
                                        </Text>
                                    </VStack>
                                )}
                            </Center>
                        </VStack>
                        <VStack>
                            <Center
                                w="500px"
                                h="400px"
                                p="5px"
                                borderRadius="20px"
                                bgColor={ColorTable.blue}
                                fontWeight="bold"
                                fontSize="50px"
                                textAlign="center"
                                _hover={{ cursor: "pointer", fontSize: "60px" }}
                                transition="all 0.1s linear"
                                position="relative"
                                onClick={rightSurveyClick}
                            >
                                {games[sequence[sequenceIndex]].game[1].title}
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
                            <Center
                                w="500px"
                                h="150px"
                                p="5px"
                                borderRadius="20px"
                                bgColor="whiteAlpha.800"
                                color="black"
                                fontWeight="bold"
                                fontSize="25px"
                                textAlign="center"
                            >
                                {!isSelected ? (
                                    games[sequence[sequenceIndex]].game[1]
                                        .description
                                ) : (
                                    <VStack>
                                        <Text>
                                            {
                                                games[sequence[sequenceIndex]]
                                                    .game[1].selectedCount
                                            }{" "}
                                            표
                                        </Text>
                                        <Text>
                                            {
                                                games[sequence[sequenceIndex]]
                                                    .game[1].selectedRatio
                                            }{" "}
                                            %
                                        </Text>
                                    </VStack>
                                )}
                            </Center>
                        </VStack>
                    </HStack>

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
