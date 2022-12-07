import React from "react";
import "./style.css";

export default ({isActive, setState}) => {
    let style = {
        display: isActive && "flex",
        // display: isActive ? "flex": "none"
    }
    return <div className="modal-container" style={style}>
        <div className="modal">
            <div className="modal-close" onClick={() => setState(false)}/>
            <h2>Modal</h2>
        </div>
    </div>
}