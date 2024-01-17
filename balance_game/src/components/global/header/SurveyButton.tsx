import { Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { CurrentCategory } from "../../../global/ProjectCommon";

export default function SurveyButton() {
    const navigate = useNavigate();
    const setCurrentCategory = useSetRecoilState(CurrentCategory);

    function onButtonClick() {
        // check user already logged in or not

        navigate("/survey");
        setCurrentCategory("");
    }

    return (
        <Text
            fontWeight="bold"
            fontSize="18px"
            color="yellow.300"
            _hover={{ cursor: "pointer", color: "yellow.400" }}
            transition="all 0.1s linear"
            onClick={onButtonClick}
        >
            나도 질문 등록하기!
        </Text>
    );
}
