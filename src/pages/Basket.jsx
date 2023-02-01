import React, {useContext, useState} from "react";
import {Table, Image, Button, ButtonGroup} from "react-bootstrap";

import Ctx from "../Ctx";

/*
    +1) Создать массив корзины как Ctx
    +2) сохранять корзину в localStorage
    +3) Создать страницу Cart и подключить к ней роутер
    +4) Создать ссылку на страницу с корзиной (header)
    +5) Научиться добавлять товары в корзину
    6) Отобразить информацию о корзине
    7) Изменять количество товаров в корзине и пересчитывать сумму
    [{
        id: "...",
        cnt: "..."
    }]
*/

export default () => {
    const [gds, setGds] = useState([]);
    const {basket, goods} = useContext(Ctx);
    return <>
        <h1>Корзина</h1>
        {basket.length > 0 && <Table hover>
            <thead>
                <tr>
                    <th>Изображение</th>
                    <th>Название</th>
                    <th>Количество</th>
                    <th>Цена</th>
                </tr>
            </thead>
            <tbody>
                {basket.map((el) => <tr key={el.id}>
                    <td>{el.id}</td>
                    <td></td>
                    <td>{el.cnt}</td>
                </tr>)}
            </tbody>
            <tfoot>
                <tr>
                    <td colSpan={3} className="text-end fw-bold fs-3">ИТОГО:</td>
                    <td className="fw-bold fs-3">0</td>
                </tr>
            </tfoot>
        </Table>}
    </>
}