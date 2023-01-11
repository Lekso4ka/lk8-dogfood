import React, {useState, useEffect} from "react";
// Router - маршрут
import {Routes, Route} from "react-router-dom";
import "./style.css";
// import products from "./assets/data.json";

import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import Modal from "./components/Modal";

import Home from "./pages/Home.jsx";
import Catalog from "./pages/Catalog.jsx";
import Profile from "./pages/Profile";
import Product from "./pages/Product";

import {Api} from "./Api";
import Ctx from "./Ctx";

const PATH = "/";
// const PATH = "/lk8-dogfood/";

const smiles = [<span>^_^</span>, "=)", "O_o", ";(", "^_0", "@_@", "–_–"];

const App = () => {
    const [user, setUser] = useState(localStorage.getItem("user8"));
    const [token, setToken] = useState(localStorage.getItem("token8"));
    const [modalActive, setModalActive] = useState(false);
    const [api, setApi] = useState(new Api(token));
    const [goods, setGoods] = useState([]);
    const [visibleGoods, setVisibleGoods] = useState(goods);

    useEffect(() => {
        console.log("Hello!")
        console.log(token);
        if (token) {
            // загрузить данные с сервера
            api.getProducts()
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setGoods(data.products);
                })
        }
    }, []) // функция отработает один раз при создании компонента

    useEffect(() => {
        console.log("Change token");
        setApi(new Api(token));
        setUser(localStorage.getItem("user8"));
    }, [token])

    useEffect(() => {
        if (!user) {
            localStorage.removeItem("token8");
            setToken(null);
        }
    }, [user])

    useEffect(() => {
        if (token) {
            // загрузить данные с сервера
            api.getProducts()
                .then(res => res.json())
                .then(data => {
                    setGoods(data.products);
                })
        }
    }, [api])
    useEffect(() => {
        setVisibleGoods(goods);
    }, [goods])

    return (
        <Ctx.Provider value={{
            user: user,
            token: token,
            api: api,
            setUser: setUser,
            setToken: setToken,
            setApi: setApi
        }}>
            <div className="container">
                <Header 
                    goods={goods}
                    searchGoods={setVisibleGoods}
                    setModalActive={setModalActive}
                />
                <main>
                    {/* {user ? <Catalog data={goods}/> : <Home data={smiles}/>} */}
                    <Routes>
                        <Route path={PATH} element={<Home data={smiles}/>}/>
                        <Route path={PATH + "catalog"} element={<Catalog data={visibleGoods}/>}/>
                        <Route path={PATH + "profile"} element={<Profile/>}/>
                        <Route path={PATH + "catalog/:id"} element={<Product/>}/>
                    </Routes>
                </main>
                <Footer/>
            </div>
            {/* 
                isActive, setState - параметры, которые работают внутри компонента Modal
                modalActive, setModalActive - значения, которые сохраняются внутри параметров
            */}
            <Modal isActive={modalActive} setState={setModalActive}/>
        </Ctx.Provider>
    )
}
export default App;
