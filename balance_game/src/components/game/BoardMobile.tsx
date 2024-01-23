import { Center, Text, VStack } from "@chakra-ui/react";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../../global/projectCommon";

interface IBoradProps {
    bgColor: string;
    title: string;
    description: string;
}

export default function BoardMobile({
    bgColor,
    title,
    description,
}: IBoradProps) {
    return (
        <VStack w="100%">
            <Center
                w={`${SCREEN_WIDTH * 0.9}px`}
                h={`${SCREEN_HEIGHT * 0.25}px`}
                borderRadius="20px"
                bgColor={bgColor}
                fontWeight="bold"
            >
                <VStack>
                    <Text textAlign="center" fontSize="30px">
                        {title}
                    </Text>
                    <Text textAlign="center" fontSize="15px">
                        {description}
                    </Text>
                </VStack>
            </Center>
        </VStack>
    );
}
