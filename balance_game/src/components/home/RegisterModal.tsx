import {
    Button,
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
import { ISignUpResponse } from "../../projectTypes";
import SocialButton from "../../utils/logins/SocialButton";

export default function RegisterModal({ isOpen, onClose }: IModalProps) {
    const {
        reset,
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const toast = useToast();

    const kakaoLogo = require("../../resource/카카오_로고.png");
    const naverLogo = require("../../resource/네이버_로고.png");

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

    return (
        <Modal isOpen={isOpen} onClose={CloseModal} isCentered size="xl">
            <ModalOverlay />
            <ModalContent bgColor="black">
                <ModalHeader>회원가입</ModalHeader>
                <ModalCloseButton />
                <ModalBody p="35px">
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
                        </VStack>
                        <HStack w="100%" justifyContent="center" mt="20px">
                            <Button
                                w="100%"
                                h="40px"
                                bgColor="purple.300"
                                type="submit"
                            >
                                생성하기
                            </Button>
                            <Button
                                w="100%"
                                h="40px"
                                bgColor="purple.300"
                                onClick={CloseModal}
                            >
                                취소하기
                            </Button>
                        </HStack>
                        <VStack w="100%">
                            <SocialButton
                                width={400}
                                height={40}
                                logoWidth={20}
                                logoHeight={20}
                                logoColor="#000000"
                                bgColor="#FEE500"
                                logoUrl={kakaoLogo}
                                social="카카오"
                            />
                            <SocialButton
                                width={400}
                                height={40}
                                logoWidth={20}
                                logoHeight={20}
                                logoColor="#FFFFFF"
                                bgColor="#03C75A"
                                logoUrl={naverLogo}
                                social="네이버"
                            />
                        </VStack>
                    </VStack>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
}
