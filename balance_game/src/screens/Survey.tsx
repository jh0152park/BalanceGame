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

export default function Survey() {
    const toast = useToast();
    const navigate = useNavigate();
    const [category, setCategory] = useState("");
    const { register, reset, handleSubmit } = useForm();

    function onSubmit(data: FieldValues) {
        if (category === "") {
            toast({
                status: "warning",
                title: "카테고리를 선택해 주세요",
            });
            return;
        }

        console.log(category);
        console.log(data);

        // post 날리고
        // 리셋하고
        // 맨첨으로 복귀
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
                <Box w="50%">
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

                <Box w="50%">
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

                <Box w="50%">
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

                <Box w="50%">
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

                <Box w="50%">
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

                <Box w="50%">
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
