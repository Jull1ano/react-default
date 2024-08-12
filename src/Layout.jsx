import { Outlet } from "react-router-dom";
import { Nav } from "./Components/Nav";
import { Footer } from "./Components/Footer";

export function Layout() {
    return (
        <>
            <header>
                <Nav />
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    )
}