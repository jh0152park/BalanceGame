import { Text, VStack } from "@chakra-ui/react";
import { IWritedComment } from "../../screens/Mypage";
import { useRecoilValue } from "recoil";
import { CurrentMode } from "../../global/ProjectCommon";

export default function PrinkComment({ comment }: { comment: IWritedComment }) {
    const isMobile = useRecoilValue(CurrentMode) === "mobile";

    return (
        <VStack
            w="100%"
            alignItems="flex-start"
            border="1px solid whitesmoke"
            borderRadius="5px"
            p="15px"
        >
            <Text fontWeight="bold" fontSize={isMobile ? "15px" : "18px"}>
                {comment.description}
            </Text>
            <Text fontSize={isMobile ? "11px" : "14px"}>
                {comment.createdAt.split("T")[0]}{" "}
                {comment.createdAt.split("T")[1].split(".")[0]}
            </Text>
        </VStack>
    );
}
