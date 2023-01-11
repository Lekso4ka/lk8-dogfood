import React, { useState, useEffect, useContext } from "react";
import {useParams, Link} from "react-router-dom";
import Review from "../components/Review/review";
import Ctx from "../Ctx";

export default ({}) => {
    const {id} = useParams();
    const [product, setProduct] = useState({});
    // По id товара получаются данные о товаре для отрисовки страницы с товаром
    const {api} = useContext(Ctx);
    useEffect(() => {
        api.getProduct(id)
            .then(res => res.json())
            .then(data => {
                setProduct(data);
            })
    })
    return <>
        <h1>{product.name || "Страница товара"}</h1>
        <p>{id}</p>
        <Link to="/catalog">Назад</Link>
        <h2>Отывы</h2>
        <div className="reviews">
            {product.reviews && product.reviews.length > 0 && product.reviews.map((el, i) => <Review {...el} key={i}/>)}
        </div>
    </>
}