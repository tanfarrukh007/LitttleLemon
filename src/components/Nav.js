import React from "react";
import littlelemon_logo from "../images/littlelemon_logo.png"
import Scroll from 'react-scroll'
const ScrollLink = Scroll.ScrollLink

const Nav = () => {
    return(
        <nav>
            <img src={littlelemon_logo} alt="Little Lemon Logo" ></img>
            <ul>
                <li><a >Home</a></li>
                <li style={{"cursor":"pointer"}} 
     onClick={() => {
     const anchor = document.querySelector('#Footer')
     anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })}}><a >Footer</a></li>
                <li><a>Menu</a></li>
                <li><a>Reservations</a></li>
                <li><a>Order Online</a></li>
                <li><a>Login</a></li>

            </ul>
        </nav>
    )
}

export default Nav;