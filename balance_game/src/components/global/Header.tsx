import { HStack, Heading, Text, VStack } from "@chakra-ui/react";
import { ColorTable } from "../../Colors";
import { CATEGORIES } from "../../ProjectTypes";
import Category from "./Category";
import { useNavigate } from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();

    function onLogoClick() {
        navigate("/main");
    }

    return (
        <VStack
            w="100%"
            h="100px"
            justifyContent="space-evenly"
            alignItems="center"
        >
            <Heading
                fontFamily="Rubik Burned"
                color={ColorTable.red}
                _hover={{ cursor: "pointer" }}
                onClick={onLogoClick}
            >
                Balance Game
            </Heading>
            <HStack spacing="20px" mt="10px">
                {CATEGORIES.map((category, index) => (
                    <Category key={index} category={category} />
                ))}
                <Text
                    fontWeight="bold"
                    fontSize="18px"
                    color="yellow.300"
                    _hover={{ cursor: "pointer", color: "yellow.400" }}
                    transition="all 0.1s linear"
                >
                    나도 질문 등록하기!
                </Text>
            </HStack>
        </VStack>
    );
}
