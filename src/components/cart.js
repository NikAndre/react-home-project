import React from "react";
import propTypes from 'prop-types'
import {connect} from "react-redux";
import CartProduct from "./cart-product";



const Cart = (
    {
        amount
    }) => {
    //console.log(amount)

    const getId = Object.entries(amount).map(product =>{
        return {
            id: product[0],
            amount: product[1]
        }
    })

    //console.log(getId)

    return (
        <div className={'cart-wrapper'}>
            <h1>Cart</h1>
            {getId.map((elem) => {
                return <CartProduct key = {elem.id} id ={elem.id} amount={elem.amount}/>
            })}
        </div>
    )
}
const mapStateToProps = (state,ownProps)=> ({
    amount : state.order
})



export  default  connect(mapStateToProps)(Cart)