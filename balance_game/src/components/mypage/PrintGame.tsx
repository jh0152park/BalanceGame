import { HStack, Text, VStack } from "@chakra-ui/react";
import { ICreatedGame } from "../../screens/Mypage";

export default function PrintGame({ game }: { game: ICreatedGame }) {
    return (
        <VStack
            w="100%"
            alignItems="flex-start"
            border="1px solid whitesmoke"
            borderRadius="5px"
            p="15px"
        >
            <Text fontWeight="bold" fontSize="18px">
                {game.title}
            </Text>
            <HStack>
                <Text>{game.game[0].title}</Text>
                <Text> VS </Text>
                <Text>{game.game[1].title}</Text>
            </HStack>
            <HStack>
                <Text>🎮 {game.totalPlayer}</Text>
                <Text>❤️ {game.like} </Text>
                <Text>💔 {game.dislike}</Text>
            </HStack>
        </VStack>
    );
}
