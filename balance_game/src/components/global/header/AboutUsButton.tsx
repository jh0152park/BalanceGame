import { Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { CurrentCategory, CurrentMode } from "../../../global/projectCommon";

export default function AboutUsButton() {
    const navigate = useNavigate();
    const isMobile = useRecoilValue(CurrentMode) === "mobile";

    function onClickCategory() {
        navigate(`/aboutus`);
    }

    return (
        <Text
            fontWeight="bold"
            color="#00B5D8"
            fontSize={isMobile ? "15px" : "18px"}
            transition="all 0.1s linear"
            onClick={onClickCategory}
            _hover={{ cursor: "pointer" }}
        >
            About Us
        </Text>
    );
}
