import { Text } from "@chakra-ui/react";
import { ColorTable } from "../../../Colors";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { CurrentCategory } from "../../../global/ProjectCommon";

export default function RegisterButton() {
    const navigate = useNavigate();
    const setCurrentCategory = useSetRecoilState(CurrentCategory);

    function onButtonClick() {
        navigate("/");
        setCurrentCategory("");
    }

    return (
        <Text
            fontWeight="bold"
            fontSize="18px"
            color={ColorTable.teal}
            _hover={{ cursor: "pointer", color: ColorTable.darkTeal }}
            transition="all 0.1s linear"
            onClick={onButtonClick}
        >
            로그인|회원가입
        </Text>
    );
}
