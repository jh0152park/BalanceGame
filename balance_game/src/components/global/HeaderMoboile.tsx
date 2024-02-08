import { Grid, HStack, Heading, VStack } from "@chakra-ui/react";
import { ColorTable } from "../../colors";
import { useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { CurrentCategory, IsUserLoggedIn } from "../../global/projectCommon";
import { CATEGORIES } from "../../projectTypes";
import CategoryButton from "./header/CategoryButton";
import SurveyButton from "./header/SurveyButton";
import MypageButton from "./header/MypageButton";
import RegisterButton from "./header/RegisterButton";
import AboutUsButton from "./header/AboutUsButton";

export default function HeaderMobile() {
    const navigate = useNavigate();
    const isUserLoggedIn = useRecoilValue(IsUserLoggedIn);
    const setCurrentCategory = useSetRecoilState(CurrentCategory);

    function onLogoClick() {
        navigate("/main");
        setCurrentCategory("");
    }

    return (
        <VStack w="100%" h="100px" zIndex="99">
            <Heading
                fontFamily="Rubik Burned"
                color={ColorTable.red}
                _hover={{ cursor: "pointer" }}
                onClick={onLogoClick}
            >
                Balance Game
            </Heading>
            <Grid templateColumns="repeat(5, 1fr)" gap="10px" mt="15px">
                {CATEGORIES.map((category, index) => (
                    <CategoryButton key={index} category={category} />
                ))}
            </Grid>
            <HStack justifyContent="center" w="100%" mt="10px" spacing="30px">
                <SurveyButton />
                {isUserLoggedIn ? <MypageButton /> : <RegisterButton />}
                <AboutUsButton />
            </HStack>
        </VStack>
    );
}
