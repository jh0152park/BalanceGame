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
import { IModalProps } from "../home/StartModal";
import { FieldValues, useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { changeNickname } from "../../Api";
import { UserInformation } from "../../global/ProjectCommon";
import { useRecoilState, useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";

export default function ChangeNameModal({ isOpen, onClose }: IModalProps) {
    const toast = useToast();
    const navigate = useNavigate();
    const { register, handleSubmit, reset } = useForm();
    const [userInformation, setUserInformation] =
        useRecoilState(UserInformation);

    const mutation = useMutation(changeNickname, {
        onMutate: () => {
            console.log("change nickname start");
        },
        onSuccess: (result: any) => {
            console.log("change nickname success");
            console.log(result.nickname);
            setUserInformation({
                nickname: result.nickname,
                uid: userInformation.uid,
                email: userInformation.email,
                accessToken: userInformation.accessToken,
            });
            toast({
                status: "success",
                title: "이름변경 성공",
            });
            clear();
            navigate("/main");
        },
        onError: () => {
            console.log("change nickname fail");
            toast({
                status: "error",
                title: "이미 사용중인 이름입니다.",
            });
            clear();
        },
    });

    function onSubmit({ nickname }: FieldValues) {
        const accessToken = userInformation.accessToken;
        mutation.mutate({ nickname, accessToken });
    }

    function clear() {
        reset();
        onClose();
    }

    return (
        <Modal isOpen={isOpen} onClose={clear} isCentered size="lg">
            <ModalOverlay />
            <ModalContent bgColor="black">
                <ModalHeader>이름변경</ModalHeader>
                <ModalCloseButton />
                <ModalBody p="35px">
                    <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
                        <Input
                            placeholder="새로운 닉네임"
                            color="whitesmoke"
                            fontSize="15px"
                            _placeholder={{
                                color: "whitesmoke",
                                fontSize: "15px",
                            }}
                            {...register("nickname", { required: true })}
                        />
                        <Button w="100%" type="submit">
                            변경하기
                        </Button>
                    </VStack>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
}
