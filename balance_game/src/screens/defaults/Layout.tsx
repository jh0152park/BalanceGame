import { Outlet, useLocation } from "react-router-dom";
import Header from "../../components/global/Header";
import { Box } from "@chakra-ui/react";
import GoogleAds from "./GoogleAds";

export default function Layout() {
    const location = useLocation();
    const is_home = location.pathname === "/";

    return (
        <Box w="100%" minH="100vh" p="30px" position={"relative"}>
            {!is_home && <Header />}
            <Outlet />
            <Box w={"200px"} position={"absolute"} left={0} top={0} bottom={0}>
                <GoogleAds />
            </Box>
            <Box w={"200px"} position={"absolute"} right={0} top={0} bottom={0}>
                <GoogleAds />
            </Box>
        </Box>
    );
}
