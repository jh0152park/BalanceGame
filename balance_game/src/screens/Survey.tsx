import {
    Box,
    Button,
    Center,
    Heading,
    Input,
    Select,
    VStack,
    useToast,
} from "@chakra-ui/react";
import { CATEGORIES } from "../ProjectTypes";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { createGame } from "../Api";
import { useRecoilValue } from "recoil";
import { CurrentMode, UserInformation } from "../global/ProjectCommon";
import { go_to_top } from "../Util";

export default function Survey() {
    const toast = useToast();
    const navigate = useNavigate();
    const [category, setCategory] = useState("");
    const { register, reset, handleSubmit } = useForm();
    const userInformation = useRecoilValue(UserInformation);
    const isMobile = useRecoilValue(CurrentMode) === "mobile";
    const width = isMobile ? "100%" : "50%";

    const mutation = useMutation(createGame, {
        onMutate: () => {
            console.log("post survey start");
        },
        onSuccess: (result) => {
            console.log("post survey success");
            // console.log(result);
            toast({
                status: "success",
                title: "질문지 등록 성공",
            });
            reset();
            navigate("/main");
            go_to_top(0);
        },
        onError: (result: any) => {
            console.log("post survey error");
            // console.log(result);
            toast({
                status: "error",
                title: "질문지 등록 실패",
                description: result.response.data.message,
            });
        },
    });

    function onSubmit(data: FieldValues) {
        if (category === "") {
            toast({
                status: "warning",
                title: "카테고리를 선택해 주세요",
            });
            return;
        }

        const title = data.title;
        const game = [
            {
                title: data.game_title1,
                description: data.game_description1,
            },
            {
                title: data.game_title2,
                description: data.game_description2,
            },
        ];
        const accessToken = userInformation.accessToken;

        mutation.mutate({ category, title, game, accessToken });
    }

    return (
        <Center w="100%" minH="100vh" pt="150px">
            <VStack
                w="100%"
                h="100%"
                spacing="50px"
                as="form"
                onSubmit={handleSubmit(onSubmit)}
            >
                <Box w={width}>
                    <Heading mb="20px">카테고리</Heading>
                    <Select
                        placeholder="선택해주세요"
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        {CATEGORIES.map((category, index) => (
                            <option key={index} value={category}>
                                {category}
                            </option>
                        ))}
                    </Select>
                </Box>

                <Box w={width}>
                    <Heading mb="20px">질문지 제목</Heading>
                    <Input
                        color="white"
                        fontSize="15px"
                        placeholder="예시) 탕수육은 부먹 vs 찍먹"
                        _placeholder={{
                            color: "whitesmoke",
                            fontsize: "15px",
                        }}
                        {...register("title", { required: true })}
                    />
                </Box>

                <Box w={width}>
                    <Heading mb="20px">선택지1</Heading>
                    <Input
                        color="white"
                        fontSize="15px"
                        placeholder="예시) 부먹"
                        _placeholder={{
                            color: "whitesmoke",
                            fontsize: "15px",
                        }}
                        {...register("game_title1", { required: true })}
                    />
                </Box>

                <Box w={width}>
                    <Heading mb="20px">선택지1 설명</Heading>
                    <Input
                        color="white"
                        fontSize="15px"
                        placeholder="예시) 부어먹어야 부드러움"
                        _placeholder={{
                            color: "whitesmoke",
                            fontsize: "15px",
                        }}
                        {...register("game_description1", { required: true })}
                    />
                </Box>

                <Box w={width}>
                    <Heading mb="20px">선택지2</Heading>
                    <Input
                        color="white"
                        fontSize="15px"
                        placeholder="예시) 찍먹"
                        _placeholder={{
                            color: "whitesmoke",
                            fontsize: "15px",
                        }}
                        {...register("game_title2", { required: true })}
                    />
                </Box>

                <Box w={width}>
                    <Heading mb="20px">선택지2 설명</Heading>
                    <Input
                        color="white"
                        fontSize="15px"
                        placeholder="예시) 찍먹해야 바삭함"
                        _placeholder={{
                            color: "whitesmoke",
                            fontsize: "15px",
                        }}
                        {...register("game_description2", { required: true })}
                    />
                </Box>

                <Button mb="50px" px="30px" colorScheme="twitter" type="submit">
                    제출하기
                </Button>
            </VStack>
        </Center>
    );
}
