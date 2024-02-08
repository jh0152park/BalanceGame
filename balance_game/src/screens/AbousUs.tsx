import {
    Box,
    Grid,
    GridItem,
    HStack,
    Icon,
    Image,
    Text,
    VStack,
    keyframes,
} from "@chakra-ui/react";
import { Helmet } from "react-helmet";
import { ImGithub } from "react-icons/im";
import { FaInstagram } from "react-icons/fa";
import { RiKakaoTalkLine } from "react-icons/ri";
import { useRecoilValue } from "recoil";
import { CurrentMode } from "../global/projectCommon";

const rotate = keyframes({
    "100%": {
        transform: "rotateY(360deg)",
    },
});

export default function AboutUs() {
    const isMobile = useRecoilValue(CurrentMode) === "mobile";

    return (
        <>
            <Helmet>
                <title>About Us</title>
            </Helmet>
            {isMobile ? (
                <VStack
                    w="100%"
                    justifyContent="center"
                    pt="150px"
                    spacing="50px"
                >
                    <VStack>
                        <Box
                            w="180px"
                            h="180px"
                            borderRadius="50%"
                            bgColor="black"
                            // animation={`${rotate} 5s infinite linear`}
                        >
                            <Image
                                src="https://avatars.githubusercontent.com/u/118165975?v=4"
                                w="100%"
                                h="100%"
                                objectFit="cover"
                                borderRadius="50%"
                            />
                        </Box>
                        <VStack mt="10px" spacing="10px">
                            <Text fontWeight="bold" fontSize="18px">
                                Frontend
                            </Text>
                            <Text fontWeight="bold" fontSize="18px">
                                박재현
                            </Text>
                            <Icon
                                as={ImGithub}
                                w="30px"
                                h="30px"
                                _hover={{
                                    cursor: "pointer",
                                    transform: "scale(1.1)",
                                }}
                                transition="all 0.1s linear"
                                onClick={() => {
                                    window.open(
                                        "https://github.com/jh0152park"
                                    );
                                }}
                            />
                        </VStack>
                    </VStack>

                    <VStack>
                        <Box
                            w="180px"
                            h="180px"
                            borderRadius="50%"
                            bgColor="black"
                            // animation={`${rotate} 5s infinite linear`}
                        >
                            <Image
                                src="https://avatars.githubusercontent.com/u/120432007?v=4"
                                w="100%"
                                h="100%"
                                objectFit="cover"
                                borderRadius="50%"
                            />
                        </Box>
                        <VStack mt="10px" spacing="10px">
                            <Text fontWeight="bold" fontSize="18px">
                                Backend
                            </Text>
                            <Text fontWeight="bold" fontSize="18px">
                                김유현
                            </Text>
                            <Icon
                                as={ImGithub}
                                w="30px"
                                h="30px"
                                _hover={{
                                    cursor: "pointer",
                                    transform: "scale(1.1)",
                                }}
                                transition="all 0.1s linear"
                                onClick={() => {
                                    window.open(
                                        "https://github.com/Yuhyeon0516"
                                    );
                                }}
                            />
                        </VStack>
                    </VStack>

                    <VStack>
                        <Box
                            w="180px"
                            h="180px"
                            borderRadius="50%"
                            bgColor="black"
                            // animation={`${rotate} 5s infinite linear`}
                        >
                            <Image
                                src="https://avatars.githubusercontent.com/u/147706345?v=4"
                                w="100%"
                                h="100%"
                                objectFit="cover"
                                borderRadius="50%"
                            />
                        </Box>
                        <VStack mt="10px" spacing="10px">
                            <Text fontWeight="bold" fontSize="18px">
                                Web, App, RPA 개발 문의
                            </Text>
                            <Text fontWeight="bold" fontSize="18px">
                                Instead of me
                            </Text>
                            <HStack>
                                <Icon
                                    as={ImGithub}
                                    w="30px"
                                    h="30px"
                                    _hover={{
                                        cursor: "pointer",
                                        transform: "scale(1.1)",
                                    }}
                                    transition="all 0.1s linear"
                                    onClick={() => {
                                        window.open(
                                            "https://github.com/Instead-of-me"
                                        );
                                    }}
                                />
                                <Icon
                                    as={FaInstagram}
                                    w="30px"
                                    h="30px"
                                    _hover={{
                                        cursor: "pointer",
                                        transform: "scale(1.1)",
                                    }}
                                    transition="all 0.1s linear"
                                    onClick={() => {
                                        window.open(
                                            "https://www.instagram.com/_instead_of_me/"
                                        );
                                    }}
                                />
                                <Icon
                                    as={RiKakaoTalkLine}
                                    w="30px"
                                    h="30px"
                                    _hover={{
                                        cursor: "pointer",
                                        transform: "scale(1.1)",
                                    }}
                                    transition="all 0.1s linear"
                                    onClick={() => {
                                        window.open(
                                            "http://pf.kakao.com/_sXxoPG/chat",
                                            "Instead of me",
                                            "popup=yes"
                                        );
                                    }}
                                />
                            </HStack>
                        </VStack>
                    </VStack>
                </VStack>
            ) : (
                <HStack
                    w="100%"
                    justifyContent="center"
                    pt="150px"
                    spacing="50px"
                >
                    <VStack>
                        <Box
                            w="180px"
                            h="180px"
                            borderRadius="50%"
                            bgColor="black"
                            // animation={`${rotate} 5s infinite linear`}
                        >
                            <Image
                                src="https://avatars.githubusercontent.com/u/118165975?v=4"
                                w="100%"
                                h="100%"
                                objectFit="cover"
                                borderRadius="50%"
                            />
                        </Box>
                        <VStack mt="10px" spacing="10px">
                            <Text fontWeight="bold" fontSize="18px">
                                Frontend
                            </Text>
                            <Text fontWeight="bold" fontSize="18px">
                                박재현
                            </Text>
                            <Icon
                                as={ImGithub}
                                w="30px"
                                h="30px"
                                _hover={{
                                    cursor: "pointer",
                                    transform: "scale(1.1)",
                                }}
                                transition="all 0.1s linear"
                                onClick={() => {
                                    window.open(
                                        "https://github.com/jh0152park"
                                    );
                                }}
                            />
                        </VStack>
                    </VStack>

                    <VStack>
                        <Box
                            w="180px"
                            h="180px"
                            borderRadius="50%"
                            bgColor="black"
                            // animation={`${rotate} 5s infinite linear`}
                        >
                            <Image
                                src="https://avatars.githubusercontent.com/u/120432007?v=4"
                                w="100%"
                                h="100%"
                                objectFit="cover"
                                borderRadius="50%"
                            />
                        </Box>
                        <VStack mt="10px" spacing="10px">
                            <Text fontWeight="bold" fontSize="18px">
                                Backend
                            </Text>
                            <Text fontWeight="bold" fontSize="18px">
                                김유현
                            </Text>
                            <Icon
                                as={ImGithub}
                                w="30px"
                                h="30px"
                                _hover={{
                                    cursor: "pointer",
                                    transform: "scale(1.1)",
                                }}
                                transition="all 0.1s linear"
                                onClick={() => {
                                    window.open(
                                        "https://github.com/Yuhyeon0516"
                                    );
                                }}
                            />
                        </VStack>
                    </VStack>

                    <VStack>
                        <Box
                            w="180px"
                            h="180px"
                            borderRadius="50%"
                            bgColor="black"
                            // animation={`${rotate} 5s infinite linear`}
                        >
                            <Image
                                src="https://avatars.githubusercontent.com/u/147706345?v=4"
                                w="100%"
                                h="100%"
                                objectFit="cover"
                                borderRadius="50%"
                            />
                        </Box>
                        <VStack mt="10px" spacing="10px">
                            <Text fontWeight="bold" fontSize="18px">
                                Web, App, RPA 개발 문의
                            </Text>
                            <Text fontWeight="bold" fontSize="18px">
                                Instead of me
                            </Text>
                            <HStack>
                                <Icon
                                    as={ImGithub}
                                    w="30px"
                                    h="30px"
                                    _hover={{
                                        cursor: "pointer",
                                        transform: "scale(1.1)",
                                    }}
                                    transition="all 0.1s linear"
                                    onClick={() => {
                                        window.open(
                                            "https://github.com/Instead-of-me"
                                        );
                                    }}
                                />
                                <Icon
                                    as={FaInstagram}
                                    w="30px"
                                    h="30px"
                                    _hover={{
                                        cursor: "pointer",
                                        transform: "scale(1.1)",
                                    }}
                                    transition="all 0.1s linear"
                                    onClick={() => {
                                        window.open(
                                            "https://www.instagram.com/_instead_of_me/"
                                        );
                                    }}
                                />
                                <Icon
                                    as={RiKakaoTalkLine}
                                    w="30px"
                                    h="30px"
                                    _hover={{
                                        cursor: "pointer",
                                        transform: "scale(1.1)",
                                    }}
                                    transition="all 0.1s linear"
                                    onClick={() => {
                                        window.open(
                                            "http://pf.kakao.com/_sXxoPG/chat",
                                            "Instead of me",
                                            "popup=yes"
                                        );
                                    }}
                                />
                            </HStack>
                        </VStack>
                    </VStack>
                </HStack>
            )}
        </>
    );
}
