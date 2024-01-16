import { Box, Center, HStack, Heading, VStack } from "@chakra-ui/react";
import { Helmet } from "react-helmet";
import { ColorTable } from "../Colors";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Board from "../components/game/Board";

export default function Game() {
    const { gameCategory } = useParams();

    // console.log(gameCategory);

    return (
        <>
            <Helmet>
                <title>Main</title>
            </Helmet>
            <Center w="100%" h="100vh">
                <VStack mt="-140px">
                    <Center w="100%" h="70px">
                        <Heading>Game Title</Heading>
                    </Center>
                    <HStack spacing="50px">
                        <Board
                            bgColor={ColorTable.red}
                            title="READY!"
                            description="waiting for funny questions"
                        />
                        <Board
                            bgColor={ColorTable.blue}
                            title="READY!"
                            description="waiting for funny questions"
                        />
                    </HStack>
                </VStack>
            </Center>
        </>
    );
}
