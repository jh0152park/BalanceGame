import { Text, useToast } from "@chakra-ui/react";
import { ColorTable } from "../../../Colors";
import { useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { CurrentCategory, IsUserLoggedIn } from "../../../global/ProjectCommon";

export default function MypageButton() {
    const toast = useToast();
    const navigate = useNavigate();
    const setCurrentCategory = useSetRecoilState(CurrentCategory);
    const isUserLoggedIn = useRecoilValue(IsUserLoggedIn);

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
            fontSize="18px"
            color={ColorTable.orange}
            _hover={{ cursor: "pointer", color: ColorTable.darkOrange }}
            transition="all 0.1s linear"
            onClick={onButtonClick}
        >
            마이페이지
        </Text>
    );
}
