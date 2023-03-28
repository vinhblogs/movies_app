import React, { useState } from "react"
import Upcomming from "../components/Upcomming/Upcomming"
import Homes from "../components/homes/Homes"
import { latest, recommended, upcome } from "../dummyData"
import Trending from "../components/trending/Trending"

function HomePages(){
    const [items,setItems]=useState(upcome)
    const [item,setItem]=useState(latest)
    const [rec,setRec]=useState(recommended)
    
    return (
        <div>
            <Homes/>
            
            <Upcomming items={items} title="Upcomming Movies"/>
            <Upcomming items={item} title="Latest Movies"/>
            <Trending />
            <Upcomming items={rec} title="Recommend Movies"/>
            
        </div>
    )
}
export default HomePages