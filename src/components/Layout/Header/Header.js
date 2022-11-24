import { NavLink } from "react-router-dom";
import React from 'react'; 
import IMAGES from "../../../assets/images/images";
import Menu from "../Menu/Menu";

const Header = () =>{
    return <header className="bg-[#fff] shadow-lg">
        <nav className="flex items-center justify-start px-20 py-5">
        <NavLink to='/Home'><img src={ IMAGES.logo_dark } alt="logo" width="180" height="43"/></NavLink>
            <Menu />
        </nav>
    </header>
};
    
export default Header;