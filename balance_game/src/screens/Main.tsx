import { VStack } from "@chakra-ui/react";
import { Helmet } from "react-helmet";
import Preview from "../components/main/Preview";
import { useRecoilValue } from "recoil";
import { CurrentMode } from "../global/ProjectCommon";
import PreviewMobile from "../components/main/PreviewMobile";

export default function Main() {
    const isMobile = useRecoilValue(CurrentMode) === "mobile";

    return (
        <>
            <Helmet>
                <title>밸런스 VS 게임</title>
            </Helmet>
            <VStack w="100%" h="100vh">
                {isMobile ? <PreviewMobile /> : <Preview />}
            </VStack>
        </>
    );
}
