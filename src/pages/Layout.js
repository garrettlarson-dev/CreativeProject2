import { Outlet, Link } from "react-router-dom";
import "./Layout.css"

const Layout = () => {
  return (
    <>
    <ul className="navMenu">
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/calculator">Calculator</Link>
        </li>
        <li>
            <Link to="/weather">Weather</Link>
        </li>
    </ul>
    <Outlet />
    </>
  )
};

export default Layout;