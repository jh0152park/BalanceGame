import { Text, useToast } from "@chakra-ui/react";
import { ColorTable } from "../../../colors";
import { useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
    CurrentCategory,
    CurrentMode,
    IsUserLoggedIn,
} from "../../../global/projectCommon";

export default function MypageButton() {
    const toast = useToast();
    const navigate = useNavigate();
    const setCurrentCategory = useSetRecoilState(CurrentCategory);
    const isUserLoggedIn = useRecoilValue(IsUserLoggedIn);
    const isMobile = useRecoilValue(CurrentMode) === "mobile";

    function onButtonClick() {
        if (!isUserLoggedIn) {
            toast({
                status: "warning",
                title: "로그인 후 이용할 수 있습니다",
            });
            return;
        }

        navigate("/mypage");
        setCurrentCategory("");
    }

    return (
        <Text
            fontWeight="bold"
            fontSize={isMobile ? "15px" : "18px"}
            color={ColorTable.orange}
            _hover={{ cursor: "pointer", color: ColorTable.darkOrange }}
            transition="all 0.1s linear"
            onClick={onButtonClick}
        >
            마이페이지
        </Text>
    );
}
