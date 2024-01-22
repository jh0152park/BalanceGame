import { Text, useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
    CurrentCategory,
    CurrentMode,
    IsUserLoggedIn,
} from "../../../global/ProjectCommon";

export default function SurveyButton() {
    const toast = useToast();
    const navigate = useNavigate();
    const setCurrentCategory = useSetRecoilState(CurrentCategory);
    const isUserLoggedIn = useRecoilValue(IsUserLoggedIn);
    const isMobile = useRecoilValue(CurrentMode) === "mobile";

    function onButtonClick() {
        // check user already logged in or not
        if (!isUserLoggedIn) {
            toast({
                status: "warning",
                title: "로그인 후 이용할 수 있습니다",
                description: "질문지는 로그인한 사용자만 등록할 수 있습니다!",
            });
            return;
        }
        navigate("/survey");
        setCurrentCategory("");
    }

    return (
        <Text
            fontWeight="bold"
            fontSize={isMobile ? "15px" : "18px"}
            color="yellow.300"
            _hover={{ cursor: "pointer", color: "yellow.400" }}
            transition="all 0.1s linear"
            onClick={onButtonClick}
        >
            나도 질문 등록하기!
        </Text>
    );
}
