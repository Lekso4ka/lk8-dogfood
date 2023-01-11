import React, {useContext} from "react";
import {Link} from "react-router-dom";
import Search from "../Search/search";
import "./header.css";
import Ctx from "../../Ctx";

export default ({goods, searchGoods, setModalActive}) => {
    const {user, setUser} = useContext(Ctx);

    const logIn = (e) => {
        e.preventDefault();
        // let name = prompt("Как вас зовут?");
        // if (name) {
        //     localStorage.setItem("user8", name);
        //     setUser(name);
        // }
        // setModalActive(function(previous) {
        //     console.log("Активность модального окна:", previous)
        //     return !previous;
        // });
        setModalActive(prev => !prev);
    }
    const logOut = (e) => {
        e.preventDefault();
        localStorage.removeItem("user8");
        setUser("");
    }
    return <header>
        <Link className="logo" to="/">DogFood</Link>
        <Search data={goods} searchGoods={searchGoods}/>
        {/* <input type="search" placeholder="Поиск..." className="search"/> */}
        <nav className="menu">
            {/* true && true */}
            {user && <Link to="/profile">{user}</Link>}
            {!user && <a href="" onClick={logIn}>Войти</a>}
            {user && <a href="" onClick={logOut}>Выйти</a>}
        </nav>
    </header>
}

// header, footer, main, section, nav, aside, article => div