import {
    AbsoluteCenter,
    Box,
    Button,
    Center,
    Divider,
    FormControl,
    FormLabel,
    HStack,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    Text,
    VStack,
    useToast,
} from "@chakra-ui/react";
import { IModalProps } from "./StartModal";
import { FieldValues, useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { signUpWithEmail } from "../../Api";
import { ISignUpResponse } from "../../ProjectTypes";

function getUniqStateValue() {
    var stat_str = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
        /[xy]/g,
        function (c) {
            var r = (Math.random() * 16) | 0,
                v = c === "x" ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        }
    );
    return stat_str;
}

export default function RegisterModal({ isOpen, onClose }: IModalProps) {
    const {
        reset,
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const toast = useToast();

    const mutation = useMutation(signUpWithEmail, {
        onMutate: () => {
            console.log("signup with email mutation start");
        },
        onSuccess: (result: ISignUpResponse) => {
            // console.log("mutate success");
            // console.log(result);

            toast({
                status: "success",
                title: "회원가입 성공",
                description: "로그인 후 이용해 주세요!",
            });
            CloseModal();
        },
        onError: (result: any) => {
            // console.log("mutate error");
            // console.log(result);
            // console.log(result.response.data.message);
            toast({
                status: "error",
                title: "회원가입 실패",
                description: result.response.data.message,
            });
            CloseModal();
        },
    });

    function CloseModal() {
        reset();
        onClose();
    }

    function onSubmit(data: FieldValues) {
        const email = data.email;
        const password = data.password.toString();
        const nickname = data.nickname;

        if (password.length < 6) {
            toast({
                status: "warning",
                title: "비밀번호는 최소 6글자 이상입니다",
            });
            return;
        }

        mutation.mutate({ email, password, nickname });
    }

    function onKakaoClick() {
        const kakaoClientId = process.env.REACT_APP_KAKAO_RESTAPI_KEY;
        const redirectUri = process.env.REACT_APP_KAKAO_REDIRECT_URI;
        window.location.href = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${kakaoClientId}&redirect_uri=${redirectUri}`;
    }

    function onNaverClick() {
        const naverClientId = process.env.REACT_APP_NAVER_CLIENT_ID;
        const state = getUniqStateValue();
        const redirectUri = process.env.REACT_APP_NAVER_REDIRECT_URI;
        window.location.href = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${naverClientId}&state=${state}&redirect_uri=${redirectUri}`;
    }

    return (
        <Modal isOpen={isOpen} onClose={CloseModal} isCentered size="xl">
            <ModalOverlay />
            <ModalContent bgColor="black">
                <ModalHeader>회원가입</ModalHeader>
                <ModalCloseButton />
                <ModalBody p="20px">
                    <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
                        <VStack spacing="20px" w="100%">
                            <Input
                                placeholder="이메일"
                                w="100%"
                                type="email"
                                border="1px solid whitesmoke"
                                color="whitesmoke"
                                fontSize="15px"
                                _placeholder={{
                                    color: "whitesmoke",
                                    fontsize: "15px",
                                }}
                                {...register("email", {
                                    required: "이메일주소",
                                })}
                                isInvalid={Boolean(errors.email?.message)}
                            />
                            <Input
                                placeholder="비밀번호"
                                w="100%"
                                type="password"
                                border="1px solid whitesmoke"
                                color="whitesmoke"
                                fontSize="15px"
                                _placeholder={{
                                    color: "whitesmoke",
                                    fontsize: "15px",
                                }}
                                {...register("password", {
                                    required: "비밀번호",
                                })}
                                isInvalid={Boolean(errors.password?.message)}
                            />
                            <Input
                                placeholder="닉네임"
                                w="100%"
                                type="text"
                                border="1px solid whitesmoke"
                                color="whitesmoke"
                                fontSize="15px"
                                _placeholder={{
                                    color: "whitesmoke",
                                    fontsize: "15px",
                                }}
                                {...register("nickname", {
                                    required: "닉네임",
                                })}
                                isInvalid={Boolean(errors.nickname?.message)}
                            />
                            {/* <Text color="red.300" fontWeight="bold">
                                {errors.email?.message as ""}
                                {errors.password?.message as ""}
                                {errors.nickname?.message as ""}
                            </Text> */}
                        </VStack>
                        <VStack w="100%" justifyContent="center" mt="20px">
                            <Button
                                w="100%"
                                colorScheme="purple"
                                onClick={CloseModal}
                            >
                                취소하기
                            </Button>
                            <Button w="100%" colorScheme="cyan" type="submit">
                                생성하기
                            </Button>
                        </VStack>
                    </VStack>
                    <Box position="relative" w="100%" my="30px" mx="auto">
                        <Divider />
                        <AbsoluteCenter px="4" pb="4px">
                            or
                        </AbsoluteCenter>
                    </Box>
                    <VStack justifyContent="center">
                        <Button
                            w="100%"
                            bgColor="#FEE20A"
                            color="black"
                            fontWeight="bold"
                            onClick={onKakaoClick}
                        >
                            카카오 회원가입
                        </Button>
                        <Button
                            w="100%"
                            bgColor="#19C048"
                            color="black"
                            fontWeight="bold"
                            onClick={onNaverClick}
                        >
                            네이버 회원가입
                        </Button>
                    </VStack>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
}
