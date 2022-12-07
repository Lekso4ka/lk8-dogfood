import React from "react";
import "./style.css";

import Signup from "./Signup";

export default ({isActive, setState}) => {
    let style = {
        display: isActive && "flex",
        // display: isActive ? "flex": "none"
    }
    return <div className="modal-container" style={style}>
        <div className="modal">
            <div className="modal-close" onClick={() => setState(false)}/>
            <h2>Зарегистрироваться</h2>
            <Signup/>
        </div>
    </div>
}