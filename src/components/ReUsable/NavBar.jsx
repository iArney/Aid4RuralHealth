// import {NavLink} from "react-router-dom"
import logo from "../../assets/Aid4RH-Logo.png"
const NavBar = () => {
    return ( 
    <div className="w-full bg-white fixed top-0 z-50 h-16 shadow-md flex items-center justify-between">
        <div>
            <img src={logo} className="w-20 absolute -top-2 left-5 md:left-24 lg:left-36" alt="" />
        </div>
        <div className="absolute right-9 md:hidden">
        <i className="fa-solid fa-bars text-2xl text-cyan-600"></i>
        </div>

        <div className="hidden md:flex relative md:right-16 lg:right-96 h-full">
            <ul className="list-none flex items-center mx-24 h-full">
                <li className="h-full flex items-center border-b-2 border-b-cyan-600"><a href="" className="px-6">Home</a></li>
                <li className="h-full flex items-center"><a href="#" className="px-6">About Us</a></li>
                <li className="h-full flex items-center"><a href="#" className="px-6">Contact</a></li>    
            </ul>
        </div>
    </div> 
    );
}
 
export default NavBar;