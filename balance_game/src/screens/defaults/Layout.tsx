import { Outlet, useLocation } from "react-router-dom";
import Header from "../../components/global/Header";

export default function Layout() {
    const location = useLocation();
    const is_home = location.pathname === "/";

    return (
        <>
            {!is_home && <Header />}
            <Outlet />
        </>
    );
}
