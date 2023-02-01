import React, {useContext, useState, useEffect} from "react";
import "./index.css";
import Ctx from "../../Ctx";

export default ({name, pictures, price, likes, _id}) => {
    const {user, setFavorites, api, setGoods, setBasket} = useContext(Ctx);
    const [like, setLike] = useState(likes && likes.includes(user._id));

    const update = (e) => {
        e.stopPropagation();
        e.preventDefault();
        setLike(!like); // false => true
        api.setLike(_id, like) // false
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setFavorites(prev => {
                    let arr = prev.filter(el => el._id === _id);
                    return arr.length > 0 ? 
                        prev.filter(el => el._id !== _id) : 
                        [...prev, data]
                })
            })
    }

    const buy = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setBasket(prev => {
            const test = prev.filter(el => el.id === _id)
            if (test.length) {
                return prev.map(el => {
                    if (el.id === _id) {
                        el.cnt++;
                    }
                    return el;
                })
            } else {
                return [...prev, {id: _id, cnt: 1}]
            }
        })
    }

    useEffect(() => {
        api.getProducts()
        .then(res => res.json())
        .then(data => {
            if (!data.error) {
                setGoods(data.products);
            }
        })
    }, [like]) // true

    return <div className="card">
        <img src={pictures} alt={name} style={{height: "100px"}}/>
        {name}
        <h6>{price} ₽</h6>
        <button className="btn" onClick={buy}>Купить</button>
        <span className="card__heart" onClick={update}>
            {
                like 
                ? <i className="fa-solid fa-heart"></i>
                : <i className="fa-regular fa-heart"></i>
            }
        </span>
    </div>
}