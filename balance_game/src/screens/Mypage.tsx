import {
    Box,
    Center,
    HStack,
    Heading,
    Text,
    VStack,
    useDisclosure,
    useToast,
} from "@chakra-ui/react";
import { Helmet } from "react-helmet";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { IsUserLoggedIn, UserInformation } from "../global/ProjectCommon";
import { useMutation, useQuery } from "react-query";
import { getUserInformation, logout } from "../Api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ChangeNameModal from "../components/mypage/ChangeNameModal";
import PrintGame from "../components/mypage/PrintGame";
import PrinkComment from "../components/mypage/PrintComment";

interface IGame {
    title: string;
    description: string;
}

export interface ICreatedGame {
    createdAt: string;
    dislike: number;
    game: IGame[];
    like: number;
    title: string;
    totalPlayer: 11;
}

export interface IWritedComment {
    createdAt: string;
    description: string;
}

interface IMyInformation {
    createdGames: ICreatedGame[];
    writedComments: IWritedComment[];
}

export default function Mypage() {
    const toast = useToast();
    const navigage = useNavigate();
    const userInformation = useRecoilValue(UserInformation);
    const { data, isLoading } = useQuery<IMyInformation>(
        ["mypage", userInformation.accessToken],
        getUserInformation
    );

    const setIsUserLoggedIn = useSetRecoilState(IsUserLoggedIn);
    const setUserInformation = useSetRecoilState(UserInformation);

    const [show, setShow] = useState("null");

    let totalPlayer = 0;
    let totalLike = 0;
    let totalDislike = 0;

    if (data && !isLoading) {
        for (var i of data.createdGames) {
            totalPlayer += i.totalPlayer;
            totalLike += i.like;
            totalDislike += i.dislike;
        }
    }

    const logoutMutation = useMutation(logout, {
        onMutate: () => {
            console.log("logged out start");
        },
        onSuccess: () => {
            console.log("logged out success");
            toast({
                status: "success",
                title: "로그아웃 성공",
            });
            setIsUserLoggedIn(false);
            setUserInformation({
                uid: 0,
                email: "",
                nickname: "",
                accessToken: "",
            });
            setShow("");
            navigage("/");
        },
    });

    function onLogoutClick() {
        logoutMutation.mutate();
    }

    const modal = useDisclosure();

    function onNameChangeClick() {
        modal.onOpen();
    }

    return (
        <>
            <Helmet>
                <title>My page</title>
            </Helmet>
            {isLoading ? null : (
                <VStack
                    w="100%"
                    minH="100vh"
                    px="450px"
                    py="50px"
                    alignItems="flex-start"
                >
                    <Box
                        pt="30px"
                        w="100%"
                        h="250px"
                        display="flex"
                        justifyContent="center"
                        border="1px solid whitesmoke"
                        borderRadius="20px"
                    >
                        <VStack w="100%" h="100%">
                            <VStack>
                                <Heading>{userInformation.nickname}</Heading>
                                <Text>{userInformation.email}</Text>
                            </VStack>
                            <HStack mt="30px" fontWeight="bold">
                                <Center>
                                    내 질문: {data?.writedComments.length} |
                                </Center>
                                <Center>
                                    내 댓글: {data?.writedComments.length} |
                                </Center>
                                <Center>
                                    내가 받은 좋아요: {totalLike} |{" "}
                                </Center>
                                <Center>
                                    내가 받은 싫어요: {totalDislike} |
                                </Center>
                                <Center>
                                    내 질문 플레이 수: {totalPlayer}
                                </Center>
                            </HStack>
                            <HStack mt="20px" fontWeight="bold" spacing="30px">
                                <Center
                                    py="10px"
                                    px="15px"
                                    borderRadius="5px"
                                    border="1px solid whitesmoke"
                                    _hover={{ cursor: "pointer" }}
                                    onClick={onLogoutClick}
                                >
                                    로그아웃
                                </Center>
                                <Center
                                    py="10px"
                                    px="15px"
                                    borderRadius="5px"
                                    border="1px solid whitesmoke"
                                    _hover={{ cursor: "pointer" }}
                                    onClick={onNameChangeClick}
                                >
                                    이름변경
                                </Center>
                            </HStack>
                        </VStack>
                        <ChangeNameModal
                            isOpen={modal.isOpen}
                            onClose={modal.onClose}
                        />
                    </Box>

                    <HStack fontWeight="bold" my="20px" spacing="20px">
                        <Text
                            onClick={() => {
                                setShow("survey");
                            }}
                            color={show === "survey" ? "tomato" : "whitesmoke"}
                            _hover={{ cursor: "pointer" }}
                        >
                            내 질문보기
                        </Text>
                        <Text
                            onClick={() => {
                                setShow("comment");
                            }}
                            color={show === "comment" ? "tomato" : "whitesmoke"}
                            _hover={{ cursor: "pointer" }}
                        >
                            내 댓글보기
                        </Text>
                    </HStack>
                    <>
                        {show === "survey"
                            ? data?.createdGames.map((game, index) => (
                                  <PrintGame key={index} game={game} />
                              ))
                            : data?.writedComments.map((comment, index) => (
                                  <PrinkComment key={index} comment={comment} />
                              ))}
                    </>
                </VStack>
            )}
        </>
    );
}
