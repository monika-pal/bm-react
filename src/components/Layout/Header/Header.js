import { NavLink } from "react-router-dom";
import React from 'react'; 
 import IMAGES from "../../../assets/images/images.js";

const Header = () =>{
    return <header className="bg-[#fff] shadow-lg">
        <nav className="flex items-center justify-start px-20 py-5">
        <img src={ IMAGES.logo_dark } alt="logo" width="180" height="43"/>
            <ul className="flex items-center ml-8">
                <li className="px-4 text-base font-bold text-gray-800">
                <NavLink to='/'>Home</NavLink> 
                </li>
                <li className="px-4 text-base font-bold text-gray-800">
                <NavLink to='/About'>About Us</NavLink>
                </li>
            </ul>
        </nav>
    </header>
};
    
export default Header;