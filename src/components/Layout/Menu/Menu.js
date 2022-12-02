import { NavLink } from "react-router-dom";

const Menu = () =>{
    return <ul className="flex items-center ml-8">
    <li className="px-4 text-base font-bold text-secondary ">
    <NavLink to='/About' className='flex'>About Us <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"/></svg></NavLink>
    </li>
    <li className="px-4 text-base font-bold text-secondary">
    <NavLink to='/About' className='flex'>Industries <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"/></svg></NavLink>
    </li>
    <li className="px-4 text-base font-bold text-secondary">
    <NavLink to='/About' className='flex'>Solutions <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"/></svg></NavLink>
    </li>
    <li className="px-4 text-base font-bold text-secondary">
    <NavLink to='/About' className='flex'>Sustainability </NavLink>
    </li>
    <li className="px-4 text-base font-bold text-secondary">
    <NavLink to='/About' className='flex'>Blog </NavLink>
    </li>
    <li className="px-4 text-base font-bold text-secondary">
    <NavLink to='/About' className='flex'>Newsroom </NavLink>
    </li>
    
</ul>
}

export default Menu;