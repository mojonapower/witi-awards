import * as React from "react";
import "../styles/card.css"
import photo from "../../public/techs.png"

export const Card = ({img})=>{
    return <div  className="card">
            <img style={{borderRadius: " 35.025px  35.025px 0 0"}} src={photo}/>
            <div style={{display:"flex"}}>
                <div>
    parte 1
                </div>
                <div>
parte 2
                </div>
            </div>
    </div>
}