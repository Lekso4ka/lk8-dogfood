import React from "react";
import Card from "../components/Card";
import {Link} from "react-router-dom";

export default ({data}) => {
    return <>
        <h1>Каталог товаров</h1>
        <div className="cards">
            {/* Опасно! Работают профи, не пытайтесь повторить это сами!  */}
            {data.map((el, i) => <Link to={`/catalog/${el._id}`} key={el._id}>
                <Card key={"card_" + i} text={el.name} like={(i + 1) % 2 === 0}/>
            </Link>)}
        </div>
    </>
}