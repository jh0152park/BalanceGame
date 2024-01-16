import { Text } from "@chakra-ui/react";

interface IProps {
    category: string;
}

export default function Category({ category }: IProps) {
    return (
        <Text
            fontWeight="bold"
            fontSize="18px"
            _hover={{ cursor: "pointer", color: "red.300" }}
            transition="all 0.1s linear"
        >
            {category}
        </Text>
    );
}
