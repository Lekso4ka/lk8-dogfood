import React, {useState} from "react";
import "./style.css";
import products from "./assets/data.json";

import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import Modal from "./components/Modal";

import Home from "./pages/Home.jsx";
import Catalog from "./pages/Catalog.jsx";

import {Api} from "./Api";

const smiles = [<span>^_^</span>, "=)", "O_o", ";(", "^_0", "@_@", "–_–"];

const App = () => {
    const [user, setUser] = useState(localStorage.getItem("user8"));
    const [modalActive, setModalActive] = useState(false);
    const [api, setApi] = useState(new Api(""));
    return (
        <>
            <div className="container">
                <Header 
                    user={user} 
                    setUser={setUser} 
                    products={products} 
                    setModalActive={setModalActive}
                />
                <main>
                    {user ? <Catalog data={products}/> : <Home data={smiles}/>}
                </main>
                <Footer/>
            </div>
            {/* 
                isActive, setState - параметры, которые работают внутри компонента Modal
                modalActive, setModalActive - значения, которые сохраняются внутри параметров
            */}
            <Modal isActive={modalActive} setState={setModalActive} api={api}/>
        </>
    )
}
export default App;
