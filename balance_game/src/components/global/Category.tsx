import { Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { CATEGORIES_ENG } from "../../ProjectTypes";

interface IProps {
    category: string;
}

export default function Category({ category }: IProps) {
    const navigate = useNavigate();
    const path = CATEGORIES_ENG[category];

    function onClickCategory() {
        navigate(`/game/${path}`);
    }

    return (
        <Text
            fontWeight="bold"
            fontSize="18px"
            _hover={{ cursor: "pointer", color: "red.300" }}
            transition="all 0.1s linear"
            onClick={onClickCategory}
        >
            {category}
        </Text>
    );
}
