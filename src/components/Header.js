
//named import
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
//functional component Cap-Name
const Header = () => {
    const [btnName, setBtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();
    return (
        <div className="flex justify-between bg-pink-200">
            <div className="logo-container">
                <img className="w-32" src={LOGO_URL} />
            </div>
       
            <div className="flex items-center">
                <ul className="flex p-8 m-8">

                    <li className="px-5">Online Status: {onlineStatus ? "ONLINE" : "OFFLINE"}</li>
                    <li className="px-5"> <Link to="./" >Home</Link> </li>
                    <li className="px-5"> <Link to="/about" >About Us</Link></li>
                    <li className="px-5"><Link to="/contact">Contact Us</Link></li>
                    <li className="px-5"><Link to="/grocery">Grocery</Link></li>
                    <li className="px-5">Cart</li>
                    <button className="login-btn" onClick={() => {
                        btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
                    }}>{btnName}</button>
                </ul>
            </div>
        
        </div >


    )

}
export default Header;