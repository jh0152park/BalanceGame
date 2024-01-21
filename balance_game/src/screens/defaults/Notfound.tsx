import { Center, Heading, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function Notfound() {
    const navigate = useNavigate();

    function onGoHomeClick() {
        navigate("/");
    }

    return (
        <Center w="100%" h="100vh">
            <VStack>
                <Heading>404 Error</Heading>
                <Heading>🐝 잘못된 페이지 입니다 🐝</Heading>
                <Heading
                    onClick={onGoHomeClick}
                    _hover={{
                        cursor: "pointer",
                        color: "skyblue",
                        transform: ["scale(1.1)"],
                    }}
                    transition="all 0.2s linear"
                >
                    홈으로 돌아가기
                </Heading>
            </VStack>
        </Center>
    );
}
