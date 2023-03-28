import React from "react";


function Ucard({item:{id,cover, name, time}}){
    return (
        <div>
            <div className="MovieBox">
                <div className="img">
                    <img src={cover} alt=""></img>              
                </div>
                <div className="text">
                    <h3>{name}</h3>
                    <span>{time} </span><br/>
                    <button className="primary-btn">
                        <i className="fa fa-play"></i>PLAY NOW
                    </button>
                </div>

            </div>
        </div>
    )
}
export default Ucard