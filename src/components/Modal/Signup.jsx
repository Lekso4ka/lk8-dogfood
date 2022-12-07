import React, {useState} from "react";

export default () => {
    return <form>
        <input 
            type="email" 
            placeholder="Введите вашу почту" 
            value={""} 
            onChange={(e) => {}}
        />
        <input 
            type="password" 
            placeholder="Пароль" 
            value={""} 
            onChange={(e) => {}}
        />
        <input 
            type="password" 
            placeholder="Повторить пароль" 
            value={""} 
            onChange={(e) => {}}
        />
    </form>
}
