import {
    Button,
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

export default function RegisterModal({ isOpen, onClose }: IModalProps) {
    const { reset, register, handleSubmit } = useForm();

    function CloseModal() {
        reset();
        onClose();
    }

    function onSubmit(data: FieldValues) {
        console.log(data);
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
                        <HStack w="100%" justifyContent="center" mt="20px">
                            <Button
                                px="40px"
                                colorScheme="purple"
                                onClick={CloseModal}
                            >
                                취소하기
                            </Button>
                            <Button px="40px" colorScheme="cyan" type="submit">
                                생성하기
                            </Button>
                        </HStack>
                    </VStack>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
}
