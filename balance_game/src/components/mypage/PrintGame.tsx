import { HStack, Text, VStack } from "@chakra-ui/react";
import { ICreatedGame } from "../../screens/Mypage";
import { useRecoilValue } from "recoil";
import { CurrentMode } from "../../global/ProjectCommon";

export default function PrintGame({ game }: { game: ICreatedGame }) {
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
                {game.title}
            </Text>
            <HStack fontSize={isMobile ? "14px" : "16px"} my="10px">
                <Text>{game.game[0].title}</Text>
                <Text> VS </Text>
                <Text>{game.game[1].title}</Text>
            </HStack>
            <HStack fontSize={isMobile ? "14px" : "16px"}>
                <Text>🎮 {game.totalPlayer}</Text>
                <Text>❤️ {game.like} </Text>
                <Text>💔 {game.dislike}</Text>
            </HStack>
        </VStack>
    );
}
