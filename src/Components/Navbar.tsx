import { Link } from "react-router-dom"
import { LinkNewWindow } from "./Link"

export default function Navbar(){
    return <nav className="Nav">
        <Link to="/">webweb</Link>

        <ul>
            <li><Link to="/proj">Projects</Link></li>
            <li><LinkNewWindow href="https://github.com/Intermentality" noColorChange>Github</LinkNewWindow></li>
        </ul>
    </nav>
}