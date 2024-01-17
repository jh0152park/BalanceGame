import { Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { CATEGORIES_ENG } from "../../../ProjectTypes";
import { useRecoilState } from "recoil";
import { CurrentCategory } from "../../../global/ProjectCommon";

interface IProps {
    category: string;
}

export default function CategoryButton({ category }: IProps) {
    const navigate = useNavigate();
    const path = CATEGORIES_ENG[category];
    const [currentCategory, setCurrentCategory] =
        useRecoilState(CurrentCategory);

    function onClickCategory() {
        navigate(`/game/${path}`);
        setCurrentCategory(category);
    }

    return (
        <Text
            fontWeight="bold"
            fontSize="18px"
            _hover={{ cursor: "pointer", color: "red.300" }}
            transition="all 0.1s linear"
            onClick={onClickCategory}
            color={currentCategory === category ? "red.300" : "whitesmoke"}
        >
            {category}
        </Text>
    );
}
