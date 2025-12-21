import { Outlet } from "react-router-dom";
import { Header } from "./Header";

export function Layout(){
    return (
        <div className="pb-20">
            <Header />
            <Outlet />
        </div>
    )
}