import "./header.css"
import React, { useState } from "react"
import { Link } from "react-router-dom"
import Login from "../login/Login"
import Dropdown2 from "./Dropdown"
function Header(){
    const [Mobile, setMobile]=useState(false)
    return (
        <div>
            <header>
                <div className="container flexSB">
                    <nav className="flexSB">
                         <div className="logo">
                            <img src="./images/logo.png" alt="" />
                         </div>
                         {/*onClick={()=>setMobile(false)} */}
                         <ul className={Mobile?"navMenu-list":"flexSB"} >
                            <Link to="/">Home</Link>
                            <Link to="/series">Series</Link>
                            <Link to="/movies">Movies</Link>
                            <Link to="/pages">Pages</Link>
                            <Link to="/pricing">Pricing</Link>
                            <Link to="/contact">Contact</Link>
                         </ul>
                         <button className="toggle" onClick={()=>setMobile(!Mobile)}>
                            {Mobile ? <i className="fa fa-times"></i>:<i className="fa fa-bars"></i>}
                         </button>                       
                    </nav>
                   
                    <div className="account flexSB">
                        {/* <i class="fa fa-search login2"></i>
                        <i class="fa fa-bell login2"></i> */}
                        <Dropdown2></Dropdown2>
                        <Dropdown2></Dropdown2>
                   
                        
                    {/* <i class="fa fa-user login2 login2-user"></i> */}
                        
                        <button>Subcribe Now</button>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header