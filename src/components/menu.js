import React from 'react';
import Product from "./product/product";


export default function  Menu (props){
    return(
        <div>
            {props.menu.map((elem) => {
                return <Product key = {elem.id} product ={elem}/>
            })}
        </div>
    )
}