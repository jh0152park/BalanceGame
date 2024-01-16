import { Center, Heading, VStack } from "@chakra-ui/react";
import { ColorTable } from "../Colors";

export default function Home() {
    return (
        <Center w="100%" h="100vh">
            <VStack>
                <VStack>
                    <Heading fontFamily="Rubik Burned" color={ColorTable.red}>
                        Balance Game
                    </Heading>
                    <Heading fontFamily="Rubik Burned">by</Heading>
                    <Heading fontFamily="Rubik Burned" color={ColorTable.blue}>
                        Instead of me
                    </Heading>
                </VStack>

                <VStack mt="200px" spacing="20px">
                    <Center
                        w="150px"
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
                        시작하기
                    </Center>
                    <Center
                        w="150px"
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
                        w="150px"
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
                        회원가입
                    </Center>
                </VStack>
            </VStack>
        </Center>
    );
}
