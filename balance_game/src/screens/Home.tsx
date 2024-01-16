import { Center, Heading, VStack, useDisclosure } from "@chakra-ui/react";
import { ColorTable } from "../Colors";
import StartModal from "../components/home/StartModal";
import { Helmet } from "react-helmet";
import RegisterModal from "../components/home/RegisterModal";

export default function Home() {
    // const { isOpen, onOpen, onClose } = useDisclosure();
    const startModal = useDisclosure();
    const registerModal = useDisclosure();

    return (
        <>
            <Helmet>
                <title>Welcome</title>
            </Helmet>
            <Center w="100%" h="100vh">
                <VStack>
                    <VStack>
                        <Heading
                            fontFamily="Rubik Burned"
                            color={ColorTable.red}
                        >
                            Balance Game
                        </Heading>
                        <Heading fontFamily="Rubik Burned">by</Heading>
                        <Heading
                            fontFamily="Rubik Burned"
                            color={ColorTable.blue}
                        >
                            Instead of me
                        </Heading>
                    </VStack>

                    <VStack mt="200px" spacing="20px">
                        <Center
                            w="250px"
                            h="50px"
                            fontWeight="bold"
                            fontSize="18px"
                            borderRadius="10px"
                            backgroundColor="purple.300"
                            _hover={{
                                cursor: "pointer",
                                bgColor: "purple.500",
                                transform: "scale(1.05)",
                            }}
                            transition="all 0.2s linear"
                        >
                            로그인
                        </Center>
                        <Center
                            w="250px"
                            h="50px"
                            fontWeight="bold"
                            fontSize="18px"
                            borderRadius="10px"
                            backgroundColor="purple.300"
                            _hover={{
                                cursor: "pointer",
                                bgColor: "purple.500",
                                transform: "scale(1.05)",
                            }}
                            transition="all 0.2s linear"
                            onClick={registerModal.onOpen}
                        >
                            회원가입
                        </Center>
                        <Center
                            w="250px"
                            h="50px"
                            fontWeight="bold"
                            fontSize="18px"
                            borderRadius="10px"
                            backgroundColor="purple.300"
                            _hover={{
                                cursor: "pointer",
                                bgColor: "purple.500",
                                transform: "scale(1.05)",
                            }}
                            transition="all 0.2s linear"
                            onClick={startModal.onOpen}
                        >
                            시작하기
                        </Center>
                    </VStack>

                    <StartModal
                        isOpen={startModal.isOpen}
                        onClose={startModal.onClose}
                    />
                    <RegisterModal
                        isOpen={registerModal.isOpen}
                        onClose={registerModal.onClose}
                    />
                </VStack>
            </Center>
        </>
    );
}
