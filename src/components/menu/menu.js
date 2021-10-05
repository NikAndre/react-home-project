import React from 'react';
import Product from "../product/product";
import propTypes from 'prop-types'
import Cart from "../cart/cart";


export default function  Menu ({menu}){
    return(
        <div>
            <h1>Menu</h1>
            <div>
            {menu.map((id) => {
                return <Product key = {id} id ={id}/>
            })}
            </div>
            <div>
                <Cart />
            </div>
        </div>
    )
}

Menu.propTypes = {
    menu: propTypes.array.isRequired
}