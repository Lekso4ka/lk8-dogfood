import React from "react";
import "./header.css";

export default () => {
    return <header>
        <a className="logo" href="">DogFood</a>
        <input type="search" placeholder="Поиск..." className="search"/>
        <nav className="menu">
            <a href="">Личный кабинет</a>
            <a href="">Войти</a>
            <a href="">Выйти</a>
        </nav>
    </header>
}

// header, footer, main, section, nav, aside, article => div