import React, {useContext} from "react";
import { Star, StarFill } from "react-bootstrap-icons";
import Ctx from "../../Ctx";

export default ({author, rating, created_at}) => {
    const {authors} = useContext(Ctx);
    const person = authors.filter(a => a._id === author)[0];
    console.log(author);
    console.log(person);
    const setRating = (n) => {
        let stars = [];
        for (let i = 0; i < n; i++) {
            stars.push(<StarFill key={i}/>);
        }
        for (let i = stars.length; i < 5; i++) {
            stars.push(<Star key={i}/>);
        }
        return stars;
    }
    return <>
        <h3>{person && person.name || ""}</h3>
        <div>{setRating(rating)}</div>
        <div>{new Date(created_at).toLocaleString()}</div>
    </>
}