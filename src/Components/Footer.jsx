import { Link } from "react-router-dom"

export function Footer() {

    return (
        <>
            <p>Iulian I. ©2024. All rightes reserved. Go to
                <Link to="/">Home</Link>
                <Link to="/Page1">Page 01</Link>
                <Link to="/Page2">Page 02</Link>
                <Link to="/Page3">Page 03</Link></p>
        </>
    )
}