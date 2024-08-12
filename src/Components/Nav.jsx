import { Link } from "react-router-dom";


export function Nav() {
    return (
        <>
            <div className="navcontainer">
                <div className="nav">
                    <Link to="/"><button>Home</button></Link>
                    <Link to="/Page1"><button>Page 01</button></Link>
                    <Link to="/Page2"><button>Page 02</button></Link>
                    <Link to="/Page3"><button>Page 03</button></Link>
                </div>
            </div>
        </>

    )
}
