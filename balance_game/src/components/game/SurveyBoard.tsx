import { Center, HStack, Heading, VStack } from "@chakra-ui/react";
import { IGame } from "../../ProjectTypes";
import Board from "./Board";
import { ColorTable } from "../../Colors";

export default function SurveyBoard({ games }: { games: IGame[] }) {
    console.log(games);
    return (
        <>
            {games.slice(0, 1).map((survey) => (
                <>
                    <Center w="100%" h="70px">
                        <Heading>{survey.title}</Heading>
                    </Center>
                    <HStack spacing="50px">
                        <VStack>
                            <Center
                                w="500px"
                                h="400px"
                                borderRadius="20px"
                                bgColor={ColorTable.red}
                                fontWeight="bold"
                                fontSize="50px"
                                _hover={{ cursor: "pointer", fontSize: "60px" }}
                                transition="all 0.1s linear"
                            >
                                {survey.game[0].title}
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
                                {survey.game[0].description}
                            </Center>
                        </VStack>
                        <VStack>
                            <Center
                                w="500px"
                                h="400px"
                                borderRadius="20px"
                                bgColor={ColorTable.blue}
                                fontWeight="bold"
                                fontSize="50px"
                                _hover={{ cursor: "pointer", fontSize: "60px" }}
                                transition="all 0.1s linear"
                            >
                                {survey.game[1].title}
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
                                {survey.game[1].description}
                            </Center>
                        </VStack>
                    </HStack>
                </>
            ))}
        </>
    );
}
