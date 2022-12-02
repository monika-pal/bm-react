import { NavLink } from "react-router-dom";
import React from 'react'; 
import IMAGES from "../../../assets/images/images";
import Menu from "../Menu/Menu";
import Topbar from "../Topbar/Topbar";

const Header = () =>{
    return <header className="bg-[#fff] shadow-lg">
        <Topbar />
        <nav className="container-none md:container lg:container mx-auto px-3">
            <div className="flex items-center justify-between py-3">
            <NavLink to='/Home'><img src={ IMAGES.logo_dark } alt="logo" width="180" height="43"/></NavLink>
            <Menu />
            </div>
        </nav>
    </header>
};
    
export default Header;