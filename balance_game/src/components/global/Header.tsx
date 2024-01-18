import { HStack, Heading, Text, VStack } from "@chakra-ui/react";
import { ColorTable } from "../../Colors";
import { CATEGORIES } from "../../ProjectTypes";
import CategoryButton from "./header/CategoryButton";
import { useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
    CurrentCategory,
    IsUserLoggedIn,
    UserInformation,
} from "../../global/ProjectCommon";
import SurveyButton from "./header/SurveyButton";
import RegisterButton from "./header/RegisterButton";
import MypageButton from "./header/MypageButton";

export default function Header() {
    const navigate = useNavigate();
    const isUserLoggedIn = useRecoilValue(IsUserLoggedIn);
    const setCurrentCategory = useSetRecoilState(CurrentCategory);
    const userInformation = useRecoilValue(UserInformation);

    function onLogoClick() {
        navigate("/main");
        setCurrentCategory("");
    }

    return (
        <VStack
            w="100%"
            h="100px"
            justifyContent="space-evenly"
            alignItems="center"
        >
            <Heading
                fontFamily="Rubik Burned"
                color={ColorTable.red}
                _hover={{ cursor: "pointer" }}
                onClick={onLogoClick}
            >
                Balance Game
            </Heading>
            <HStack spacing="20px" mt="10px">
                {CATEGORIES.map((category, index) => (
                    <CategoryButton key={index} category={category} />
                ))}

                <SurveyButton />

                {isUserLoggedIn ? <MypageButton /> : <RegisterButton />}
            </HStack>
        </VStack>
    );
}
