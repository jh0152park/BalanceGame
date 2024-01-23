import { Outlet, useLocation } from "react-router-dom";
import Header from "../../components/global/Header";
import { Box } from "@chakra-ui/react";
import GoogleAds from "./GoogleAds";
import { useRecoilValue } from "recoil";
import {
    CurrentMode,
    SCREEN_HEIGHT,
    SCREEN_WIDTH,
} from "../../global/projectCommon";
import HeaderMobile from "../../components/global/HeaderMoboile";

export default function Layout() {
    const location = useLocation();
    const is_home = location.pathname === "/";
    const isMobile = useRecoilValue(CurrentMode) === "mobile";

    return (
        <Box
            w="100%"
            minH={isMobile ? "100vh" : "125vh"}
            p={isMobile ? "15px" : "30px"}
            position={"relative"}
        >
            {!is_home ? isMobile ? <HeaderMobile /> : <Header /> : null}
            <Outlet />
            {!isMobile ? (
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
            ) : (
                <>
                    <Box
                        w={`${SCREEN_WIDTH * 1}px`}
                        h={`${SCREEN_HEIGHT * 0.1}px`}
                        position="absolute"
                        top={0}
                        left={0}
                        right={0}
                        mx={"auto"}
                    >
                        <GoogleAds />
                    </Box>
                </>
            )}
        </Box>
    );
}
