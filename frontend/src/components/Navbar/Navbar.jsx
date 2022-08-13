import "./Navbar.scss";
import EmlaakLogo from "../../assets/EmlaakPic.jpg";
import { Link, Outlet } from "react-router-dom";

const NAV_MENU = ["Home", "Blog", "Projects", "Videos", "About-Us", "Contact"];

const Navbar = () => {

    return (
        <>
            <div className="nav-container">
                <Link to="/" className="logo-container">
                    <img src={EmlaakLogo} alt="Emlaak Logo" className="logo" />
                </Link>

                <div className="nav-links-container">
                    {NAV_MENU.map((menu, index) => {
                        return (
                            <Link
                                to={
                                    menu === "Home" ?
                                        "/" :
                                        `/${menu.toLowerCase()}`
                                }
                                key={index}
                                className="nav-link"
                            >
                                {menu.replace("-", " ")}
                            </Link>
                        )
                    })}
                </div>
            </div>
            <Outlet />
        </>
    );
};

export default Navbar;
