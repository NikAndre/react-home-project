import React from 'react';
import Product from "./product/product";
import propTypes from 'prop-types'


export default function  Menu ({menu}){
    return(
        <div>
            <h1>Menu</h1>
            {menu.map((elem) => {
                return <Product key = {elem.id} product ={elem}/>
            })}
        </div>
    )
}

Menu.propTypes = {
    menu: propTypes.array.isRequired
}