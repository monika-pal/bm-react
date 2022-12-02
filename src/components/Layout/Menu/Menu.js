import { NavLink } from "react-router-dom";

const Menu = () =>{
    return <ul className="flex items-center ml-8">
    <li className="px-4 text-base font-bold text-gray-800">
    <NavLink to='/'>Home</NavLink> 
    </li>
    <li className="px-4 text-base font-bold text-gray-800">
    <NavLink to='/About'>About Us</NavLink>
    </li>
</ul>
}

export default Menu;