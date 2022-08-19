import "./Navbar.scss";
import EmlaakLogo from "../../assets/EmlaakPic.jpg";
import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';

const NAV_MENU = ["Home", "Blog", "Projects", "Videos", "About-Us", "Contact"];

const Navbar = () => {
    const [currentPage, setCurrentPage] = useState('Home')
    const [toggle, setToggle] = useState(false)

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
                                style={{
                                    borderBottom: menu === currentPage ?
                                        "2px solid #fff" :
                                        "",
                                }}
                                onClick={() => setCurrentPage(menu)}
                            >
                                {menu.replace("-", " ")}
                            </Link>
                        )
                    })}
                </div>

                <div className="menu-container">
                    <MenuIcon
                        className="menu-icon"
                        onClick={() => { setToggle(!toggle) }}
                    />

                    <div
                        className="menu-links-container"
                        style={{ display: toggle ? "flex" : "none", }}
                    >
                        <div className="menu-links-list">
                            {NAV_MENU.map((menu, index) => {
                                return (
                                    <Link
                                        to={
                                            menu === "Home" ?
                                                "/" :
                                                `/${menu.toLowerCase()}`
                                        }
                                        key={index}
                                        className="menu-link"
                                        style={{
                                            borderBottom: menu === currentPage ?
                                                "2px solid white" :
                                                "",
                                        }}
                                        onClick={() => setCurrentPage(menu)}
                                    >
                                        {menu.replace("-", " ")}
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <Outlet />
        </>
    );
};

export default Navbar;
