import {
    Box,
    Center,
    HStack,
    Heading,
    Icon,
    Text,
    VStack,
} from "@chakra-ui/react";
import { IGame } from "../../ProjectTypes";
import { ColorTable } from "../../Colors";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { CurrentCategory } from "../../global/ProjectCommon";
import { SlLike, SlDislike } from "react-icons/sl";
import { FcLike, FcDislike } from "react-icons/fc";

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

    function nextSurvey() {
        if (sequenceIndex === games.length - 1) {
            navigate("/main");
            setCurrentCategory("");
            return;
        }

        setIsSelected(false);
        setIsLeftClick(false);
        setIsRightClick(false);
        setSequenceIndex((prev) => prev + 1);
    }

    function leftSurveyClick() {
        setIsLeftClick(true);
        setIsSelected(true);
    }

    function rightSurveyClick() {
        setIsRightClick(true);
        setIsSelected(true);
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
                                borderRadius="20px"
                                bgColor={ColorTable.red}
                                fontWeight="bold"
                                fontSize="50px"
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
                                borderRadius="20px"
                                bgColor="whiteAlpha.800"
                                color="black"
                                fontWeight="bold"
                                fontSize="18px"
                            >
                                {!isSelected
                                    ? games[sequence[sequenceIndex]].game[0]
                                          .description
                                    : isLeftClick
                                    ? games[sequence[sequenceIndex]].game[0]
                                          .selectedCount + 1
                                    : games[sequence[sequenceIndex]].game[0]
                                          .selectedCount}
                            </Center>
                        </VStack>
                        <VStack>
                            <Center
                                w="500px"
                                h="400px"
                                borderRadius="20px"
                                bgColor={ColorTable.blue}
                                fontWeight="bold"
                                fontSize="50px"
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
                                borderRadius="20px"
                                bgColor="whiteAlpha.800"
                                color="black"
                                fontWeight="bold"
                                fontSize="18px"
                            >
                                {!isSelected
                                    ? games[sequence[sequenceIndex]].game[1]
                                          .description
                                    : isRightClick
                                    ? games[sequence[sequenceIndex]].game[1]
                                          .selectedCount + 1
                                    : games[sequence[sequenceIndex]].game[1]
                                          .selectedCount}
                            </Center>
                        </VStack>
                    </HStack>

                    <Center
                        w="100%"
                        h="100px"
                        mt="20px"
                        border="1px solid white"
                    >
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
                </Box>
            ))}
        </>
    );
}
