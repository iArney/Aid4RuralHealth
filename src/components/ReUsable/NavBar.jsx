import {NavLink, useLocation} from "react-router-dom"
import {useState, useEffect} from "react"
import {useNavigate} from "react-router-dom"
import logo from "../../assets/Aid4RH-Logo.png"
const NavBar = () => {

    const navigate = useNavigate()
    const location = useLocation()
    const [active, setActive] = useState(false)
    useEffect(() => {
       
    }, []);
    return ( 
    <div className="w-full bg-white fixed top-0 z-50 h-16 shadow-md flex items-center justify-between">
        <div>
            <img src={logo} className="w-20 absolute -top-2 left-5 md:left-10 lg:left-36" alt="" />
        </div>
        <div className="absolute right-9 md:hidden">
        <i className="fa-solid fa-bars text-2xl text-cyan-600"></i>
        </div>

        <div className="hidden md:flex relative md:right-1 lg:right-40 h-full justify-center items-center">
            <ul className="list-none flex items-center mx-24 h-full">
                <li className={`${location.pathname === "/"? "border-b-2 border-b-cyan-600" : ""} hover:border-b-2 hover:border-b-cyan-100 cursor-pointer h-full flex items-center`} onClick={()=>navigate('/')}><NavLink to="/" className="px-6">Home</NavLink></li>
                <li className={`${location.pathname === "/about"? "border-b-2 border-b-cyan-600" : ""} hover:border-b-2 hover:border-b-cyan-100 cursor-pointer h-full flex items-center`} onClick={()=>navigate('/about')}><NavLink to="/about" className="px-6">About Us</NavLink></li>
                <li className={`${location.pathname === "/contact"? "border-b-2 border-b-cyan-600" : ""} hover:border-b-2 hover:border-b-cyan-100 cursor-pointer h-full flex items-center`} onClick={()=>navigate('/contact')}><NavLink to="/contact" className="px-6">Contact</NavLink></li>    
            </ul>

            
            <div className="w-24 cursor-pointer h-full flex justify-center items-center hover:border-b-2 border-b-cyan-200">
                Login
            </div>
            <div className=" bg-sky-500 text-slate-50 h-10 w-32 flex items-center justify-center rounded-full cursor-pointer">
                Donate
            </div>
     
        </div>

        
    </div> 
    );
}
 
export default NavBar;