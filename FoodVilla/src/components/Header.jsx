import { LOGO_URL } from "../utils/constant"
import { useState } from "react"

 const Header = () => {

    const[btnName, setBtnName] = useState("Login")

    return (
        <div className="header">
            <div>
                <img className="Logo" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>  
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button 
                        className="login"
                        onClick={()=>{btnName ==="Login"?setBtnName("Logout"):setBtnName("Login")}}
                        >{btnName}</button>
                    
                </ul>
             </div>
        </div>
    )
}
export default Header