import { HStack, Heading, VStack } from "@chakra-ui/react";
import { ColorTable } from "../../Colors";
import { CATEGORIES } from "../../ProjectTypes";
import Category from "./Category";

export default function Header() {
    return (
        <VStack
            w="100%"
            h="100px"
            justifyContent="space-evenly"
            alignItems="center"
        >
            <Heading fontFamily="Rubik Burned" color={ColorTable.red}>
                Balance Game
            </Heading>
            <HStack spacing="20px" mt="10px">
                {CATEGORIES.map((category, index) => (
                    <Category key={index} category={category} />
                ))}
            </HStack>
        </VStack>
    );
}
