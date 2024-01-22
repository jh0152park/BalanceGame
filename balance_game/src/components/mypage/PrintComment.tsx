import { Text, VStack } from "@chakra-ui/react";
import { IWritedComment } from "../../screens/Mypage";

export default function PrinkComment({ comment }: { comment: IWritedComment }) {
    return (
        <VStack
            w="100%"
            alignItems="flex-start"
            border="1px solid whitesmoke"
            borderRadius="5px"
            p="15px"
        >
            <Text fontWeight="bold" fontSize="18px">
                {comment.description}
            </Text>
            <Text fontSize="14px">
                {comment.createdAt.split("T")[0]}{" "}
                {comment.createdAt.split("T")[1].split(".")[0]}
            </Text>
        </VStack>
    );
}
