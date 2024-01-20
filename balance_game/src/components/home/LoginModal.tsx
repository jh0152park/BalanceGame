import { useNavigate } from "react-router-dom";
import { IModalProps } from "./StartModal";
import {
    Button,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    VStack,
    useToast,
} from "@chakra-ui/react";
import { FieldValues, useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { signInWithEmail } from "../../Api";
import { ISignInResponse } from "../../ProjectTypes";
import { useSetRecoilState } from "recoil";
import { IsUserLoggedIn, UserInformation } from "../../global/ProjectCommon";

export default function LoginModal({ isOpen, onClose }: IModalProps) {
    const toast = useToast();
    const navigate = useNavigate();
    const { reset, register, handleSubmit } = useForm();
    const setIsUserLoggedIn = useSetRecoilState(IsUserLoggedIn);
    const setUserInformation = useSetRecoilState(UserInformation);

    const mutation = useMutation(signInWithEmail, {
        onMutate: () => {
            console.log("Sign in with email mutation start");
        },
        onSuccess: (result: ISignInResponse) => {
            console.log("Sign in with email mutation success");
            // console.log(result);

            setUserInformation({
                uid: result.uid,
                email: result.email,
                nickname: result.nickname,
                accessToken: result.accessToken,
            });
            setIsUserLoggedIn(true);

            toast({
                status: "success",
                title: "로그인 성공",
                description: `환영합니다 ${result.nickname}님`,
            });

            CloseModal();
            navigate("/main");
        },
        onError: (result: any) => {
            console.log("Sign in with email mutation fail");
            // console.log(result);
            toast({
                status: "error",
                title: "로그인 실패",
                description: "이메일주소 혹은 비밀번호를 다시 확인해주세요",
            });
            CloseModal();
        },
    });

    function CloseModal() {
        reset();
        onClose();
    }

    function onSubmit(data: FieldValues) {
        /**
         * Can not use {email, password}: FieldValues form
         * Due to we have to convert type of password to string
         */
        const email = data.email;
        const password = data.password.toString();

        mutation.mutate({ email, password });
    }

    return (
        <Modal isOpen={isOpen} onClose={CloseModal} isCentered size="lg">
            <ModalOverlay />
            <ModalContent bgColor="black">
                <ModalHeader>로그인</ModalHeader>
                <ModalCloseButton />
                <ModalBody p="20px">
                    <VStack
                        spacing="20px"
                        w="100%"
                        as="form"
                        onSubmit={handleSubmit(onSubmit)}
                    >
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
                            {...register("email", { required: true })}
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
                                required: true,
                            })}
                        />
                        <Button
                            w="100%"
                            colorScheme="purple"
                            onClick={CloseModal}
                        >
                            취소하기
                        </Button>
                        <Button w="100%" colorScheme="cyan" type="submit">
                            로그인
                        </Button>
                    </VStack>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
}
