import { Outlet, useLocation } from "react-router-dom";
import Header from "../../components/global/Header";
import { Box } from "@chakra-ui/react";

export default function Layout() {
    const location = useLocation();
    const is_home = location.pathname === "/";

    return (
        <Box w="100%" h="100vh" p="30px">
            {!is_home && <Header />}
            <Outlet />
        </Box>
    );
}
