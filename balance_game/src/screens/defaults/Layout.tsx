import { Outlet, useLocation } from "react-router-dom";
import Header from "../../components/global/Header";
import { Box } from "@chakra-ui/react";
import GoogleAds from "./GoogleAds";
import { useRecoilValue } from "recoil";
import { CurrentMode } from "../../global/ProjectCommon";
import HeaderMobile from "../../components/global/HeaderMoboile";

export default function Layout() {
    const location = useLocation();
    const is_home = location.pathname === "/";
    const currentMode = useRecoilValue(CurrentMode);
    const isMobile = currentMode === "mobile";

    return (
        <Box w="100%" minH="125vh" p="30px" position={"relative"}>
            {!is_home ? isMobile ? <HeaderMobile /> : <Header /> : null}
            <Outlet />
            {!isMobile && (
                <>
                    <Box
                        w={"200px"}
                        position={"absolute"}
                        left={0}
                        top={0}
                        bgColor="blue"
                    >
                        <GoogleAds />
                    </Box>
                    <Box
                        w={"200px"}
                        position={"absolute"}
                        left={0}
                        top={"600px"}
                        bgColor="green"
                    >
                        <GoogleAds />
                    </Box>
                    <Box
                        w={"200px"}
                        position={"absolute"}
                        right={0}
                        top={0}
                        bgColor="blue"
                    >
                        <GoogleAds />
                    </Box>
                    <Box
                        w={"200px"}
                        position={"absolute"}
                        right={0}
                        top={"600px"}
                        bgColor="green"
                    >
                        <GoogleAds />
                    </Box>
                </>
            )}
        </Box>
    );
}
