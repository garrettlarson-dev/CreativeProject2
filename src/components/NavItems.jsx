import { Outlet, Link } from "react-router-dom";

const NavItems = () => {
  return (
    <>
    <Link to="/calculator"><img src={require('../img/calc.png')}/></Link>
    <Link to="/calculator"><img src={require('../img/weather.png')}/></Link>
    <Outlet />
    </>
  )
};


export default NavItems;