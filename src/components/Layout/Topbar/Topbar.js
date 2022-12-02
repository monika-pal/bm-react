import { NavLink } from "react-router-dom";

const Topbar = ()=>{
    return <div className="bg-graybg">
        <div className="container-none md:container lg:container mx-auto px-3">
            <div className="flex justify-between items-center">
                <ul>
                    <li className="font-regular lg:text-base text-xs"><a className="text-secondary block" href= "https://india.paperex-expo.com/Home" target="_blank">Meet us at <span className="font-bold">Paperex</span> 2022. </a> </li>
                </ul>
                <ul className="flex items-center">
                    <li className="px-4 lg:text-sm text-xs font-semibold text-gray">
                    <NavLink to='/Career'>Careers</NavLink> 
                    </li>
                    <li className="px-4 lg:text-sm text-xs font-semibold text-gray">
                    <NavLink to='/About'>Events</NavLink>
                    </li>
                    <li className="px-3 lg:text-sm text-xs font-semibold py-2 mx-1 bg-brand">
                    <NavLink to='/Contact' className="block text-xs lg:text-sm text-white">Contact Us</NavLink>
                    </li>
                    <li className="px-4 text-xs lg:text-sm font-semibold text-gray">
                    <NavLink to='/Resources'>Resources</NavLink>
                    </li>
                </ul>
            </div>
        </div> 
    </div>
   
}
export default Topbar;