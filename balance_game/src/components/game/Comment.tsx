import {
    Box,
    Button,
    Center,
    HStack,
    Input,
    Text,
    VStack,
    useToast,
} from "@chakra-ui/react";
import { FieldValues, useForm } from "react-hook-form";
import { IComment, IGame } from "../../ProjectTypes";
import { useState } from "react";
import { useMutation } from "react-query";
import { createComment } from "../../Api";
import { useRecoilValue } from "recoil";
import { UserInformation } from "../../global/ProjectCommon";

export default function Comment({
    gamesId,
    comment,
}: {
    gamesId: string | number;
    comment: IComment[];
}) {
    const toast = useToast();
    const { register, reset, handleSubmit } = useForm();
    const [comments, setComments] = useState<IComment[]>(comment);
    const userInformation = useRecoilValue(UserInformation);

    const mutation = useMutation(createComment, {
        onMutate: () => {
            console.log("post comment start");
        },
        onSuccess: (result: IGame) => {
            console.log("post comment success");
            // console.log(result);
            setComments(result.comment);
            reset();
            toast({
                status: "success",
                title: "댓글달기 성공",
            });
        },
        onError: (result) => {
            console.log("post comment failed");
            // console.log(result);
            toast({
                status: "error",
                title: "댓글달기 실패",
                description: "로그인이 정상적으로 되었는지 확인이 필요합니다.",
            });
        },
    });

    const dump_comment = [
        {
            writer: "김유현",
            description: "레전드 바지 팝니다",
            createdAt: "2024-01-17T00:35:10.687Z",
        },
        {
            writer: "김병섭",
            description: "ㅋㅋㅋ레전드레전드레전드",
            createdAt: "2024-01-17T00:35:10.687Z",
        },
    ];

    function onSubmit(data: FieldValues) {
        const description = data.comment;
        const accessToken = userInformation.accessToken;

        mutation.mutate({ gamesId, description, accessToken });
    }

    return (
        <VStack w="100%">
            <HStack
                w="100%"
                h="50px"
                as="form"
                onSubmit={handleSubmit(onSubmit)}
            >
                <Input
                    w="90%"
                    color="whitesmoke"
                    fontSize="15px"
                    placeholder="댓글을 입력해주세요"
                    _placeholder={{ color: "whitesmoke", fontSize: "15px" }}
                    {...register("comment", { required: true })}
                />
                <Button
                    w="10%"
                    h="40px"
                    bgColor="whitesmoke"
                    color="black"
                    fontWeight="bold"
                    borderRadius="10px"
                    type="submit"
                >
                    등록
                </Button>
            </HStack>
            {comments.map((cmt, index) => (
                <Box
                    key={index}
                    w="100%"
                    border="1px solid rgba(255, 255, 255, 0.1)"
                    borderRadius="10px"
                    p="15px"
                >
                    <VStack w="100%" alignItems="flex-start">
                        <HStack alignItems="center">
                            <Text>{cmt.writer}</Text>
                            <Text fontSize="12px">
                                {cmt.createdAt.split("T")[0]}
                            </Text>
                        </HStack>
                        <Text fontWeight="bold">{cmt.description}</Text>
                    </VStack>
                </Box>
            ))}
        </VStack>
    );
}
