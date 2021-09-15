import React from 'react';
import Product from "./product/product";


export default function  Menu (props){
    return(
        <div>
            <h1>Menu</h1>
            {props.menu.map((elem) => {
                return <Product key = {elem.id} product ={elem}/>
            })}
        </div>
    )
}