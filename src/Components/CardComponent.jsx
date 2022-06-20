import React from "react";
import "../../src/index.css"
const CardComponent = (props) => {
    return(
    <> 
    
   
    <div className="column">
        <img
            src= {props.imgsrc}
            alt="some image"
            className="card_img"/>
        <div className="cardDesign">
        <div className="card_info">
            <span className="card_category">
                {props.title}
            </span>
            <h3 className="card_title">
               {props.label}
            </h3>
            <a href={props.link} target="_blank">
                <button>Click here</button>
            </a>
            </div>
        </div>
    </div>
 
</>
    );
}

export default CardComponent