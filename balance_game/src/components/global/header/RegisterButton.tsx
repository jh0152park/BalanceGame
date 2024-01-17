import { Text } from "@chakra-ui/react";
import { ColorTable } from "../../../Colors";
import { useNavigate } from "react-router-dom";

export default function RegisterButton() {
    const navigate = useNavigate();

    function onButtonClick() {
        navigate("/");
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
