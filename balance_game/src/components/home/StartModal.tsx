import {
    Button,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Text,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { go_to_top } from "../../utils/util";

export interface IModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function StartModal({ isOpen, onClose }: IModalProps) {
    const navigate = useNavigate();

    function onStartClick() {
        navigate("/main");
        go_to_top(0);
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose} isCentered size="lg">
            <ModalOverlay />
            <ModalContent bgColor="black">
                <ModalHeader>밸런스게임 시작하기</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Text>
                        회원가입 및 로그인을 하지 않을경우 게임진행은 가능하나
                        댓글달기 및 새로운 밸런스게임 질문지 생성이
                        불가능합니다!
                    </Text>
                </ModalBody>
                <ModalFooter my="10px">
                    <Button mr="10px" bgColor="purple.300" onClick={onClose}>
                        취소하기
                    </Button>
                    <Button
                        mr="10px"
                        bgColor="purple.300"
                        onClick={onStartClick}
                    >
                        시작하기
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}
