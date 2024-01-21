import { Text } from "@chakra-ui/react";
import { ColorTable } from "../../../Colors";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { CurrentCategory } from "../../../global/ProjectCommon";

export default function MypageButton() {
    const navigate = useNavigate();
    const setCurrentCategory = useSetRecoilState(CurrentCategory);

    function onButtonClick() {
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
