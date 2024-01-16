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

export default function LoginModal({ isOpen, onClose }: IModalProps) {
    const toast = useToast();
    const navigate = useNavigate();
    const { reset, register, handleSubmit } = useForm();

    function CloseModal() {
        reset();
        onClose();
    }

    function onSubmit(data: FieldValues) {
        // connect to register of backend code
        console.log(data);
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
