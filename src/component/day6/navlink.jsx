
import { NavLink } from "react-router-dom";

const NavLinkComp = () => {

    const activeLink = {
        color: "red",
    }

    return (
        <div style={{display: "flex", gap:"10px"}}>
            <NavLink
            to="/contact"
            style={({isActive}) =>(isActive ? activeLink:null)}>contact-us</NavLink>

<NavLink
            to="/home"
            style={({isActive}) =>(isActive ? activeLink:null)}>Home</NavLink>

<NavLink
            to="/about"
            style={({isActive}) =>(isActive ? activeLink:null)}>About</NavLink>
        
        </div>
    )

}

export default NavLinkComp;