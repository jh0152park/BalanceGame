import { HStack, Heading, VStack } from "@chakra-ui/react";
import { ColorTable } from "../../colors";
import { CATEGORIES } from "../../projectTypes";
import CategoryButton from "./header/CategoryButton";
import { useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { CurrentCategory, IsUserLoggedIn } from "../../global/projectCommon";
import SurveyButton from "./header/SurveyButton";
import RegisterButton from "./header/RegisterButton";
import MypageButton from "./header/MypageButton";

export default function Header() {
    const navigate = useNavigate();
    const isUserLoggedIn = useRecoilValue(IsUserLoggedIn);
    const setCurrentCategory = useSetRecoilState(CurrentCategory);

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
            zIndex="99"
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
