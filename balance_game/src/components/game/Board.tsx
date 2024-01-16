import { Center, VStack } from "@chakra-ui/react";

interface IBoradProps {
    bgColor: string;
    title: string;
    description: string;
}

export default function Board({ bgColor, title, description }: IBoradProps) {
    return (
        <VStack>
            <Center
                w="500px"
                h="400px"
                borderRadius="20px"
                bgColor={bgColor}
                fontWeight="bold"
                fontSize="50px"
            >
                {title}
            </Center>
            <Center
                w="500px"
                h="150px"
                borderRadius="20px"
                bgColor="whiteAlpha.800"
                color="black"
                fontWeight="bold"
                fontSize="18px"
            >
                {description}
            </Center>
        </VStack>
    );
}
