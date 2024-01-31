import { Outlet } from "react-router-dom";
import Header from "./components/globals/Header";


export default function RootLayout() {
    return(
        <>
            <Header/>
            <main>
                <Outlet/>
            </main>
        </>
    )
}