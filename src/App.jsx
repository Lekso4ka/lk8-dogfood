import React from "react";
import "./style.css";

import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import Card from "./components/Card";

const smiles = [<span>^_^</span>, "=)", "O_o", ";(", "^_0", "@_@", "–_–"];

const App = () => {
    return (
        <div className="container">
            <Header/>
            <main>
                <h1>Главная страница</h1>
                <div className="cards">
                    {/* {smiles} */}
                    {/* {smiles.map((el, i) => <span key={i}>{el}</span>)} */}
                    {/* key={"card_" + i} => card_0, card_1, ... */}
                    {smiles.map((el, i) => <Card key={"card_" + i} text={el} like={(i + 1) % 2 === 0}/>)}
                </div>
            </main>
            <Footer/>
        </div>
    )
}
// (5 + 2) * 3
export default App;