import React, { useState } from "react"
import { homeData } from "../../dummyData"
import './home.css'
import Home from "./Home"
function Homes(){
    const [items,setItems]=useState(homeData)
    
    return (
        <div>
            <section className="home">
                <Home items={items}/>
            </section>
            <div className="mragin"></div>
        </div>
    )
}
export default Homes