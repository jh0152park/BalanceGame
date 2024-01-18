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
    VStack,
} from "@chakra-ui/react";
import { IModalProps } from "./StartModal";
import { FieldValues, useForm } from "react-hook-form";

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
    const { reset, register, handleSubmit } = useForm();

    function CloseModal() {
        reset();
        onClose();
    }

    function onSubmit(data: FieldValues) {
        // connect to register of backend code
        console.log(data);
    }

    function onKakaoClick() {}

    function onNaverClick() {
        const naver_client_id = process.env.REACT_APP_NAVER_CLIENT_ID;
        const state = getUniqStateValue();
        const redirect_uri = "http://localhost:8080/auth/social/naver/cb";
        window.location.href = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${naver_client_id}&state=${state}&redirect_uri=${redirect_uri}`;
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
                                    required: true,
                                })}
                            />
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
