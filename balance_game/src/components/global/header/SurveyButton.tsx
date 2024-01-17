import { Text } from "@chakra-ui/react";

export default function SurveyButton() {
    return (
        <Text
            fontWeight="bold"
            fontSize="18px"
            color="yellow.300"
            _hover={{ cursor: "pointer", color: "yellow.400" }}
            transition="all 0.1s linear"
        >
            나도 질문 등록하기!
        </Text>
    );
}
