import {
    Box,
    Center,
    HStack,
    Heading,
    Input,
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

interface IGame {
    title: string;
    description: string;
}

interface ICreatedGame {
    createdAt: string;
    dislike: number;
    game: IGame[];
    like: number;
    title: string;
    totalPlayer: 11;
}

interface IWritedComment {
    createdAd: string;
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
                <Box
                    w="100%"
                    minH="100vh"
                    display="flex"
                    justifyContent="flex-start"
                    px="450px"
                    py="50px"
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
                </Box>
            )}
        </>
    );
}
