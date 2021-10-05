import React from "react";
import {restaurants} from "../../fixtures";
import {decrement, increment,prodRemove} from "../redux/actions";
import {connect} from "react-redux";

const CartProduct = (
    {
        product,
        increment,
        decrement,
        prodRemove

    }
    ) => {
    console.log(product)

    return (
        <div key={product.id} className={'wrapper'}>
            <div>
                <p>{product.name}</p>
            </div>
            <span> Full price :</span>
            <p>{product.subTotal} $</p>
            <div>
            <div className={'wrapper'}>
                <span>count : </span>
                <p> {product.amount}</p>
            </div>
            <div className={'wrapper'}>
                <button onClick={() => decrement(product.id)}> - </button>
                <button onClick={() => increment(product.id)}> + </button>
                <button onClick={() => prodRemove(product.id)}> x </button>
            </div>
            </div>
        </div>
    )
}
const mapStateToProps = (state,ownProps) => ({}
)

const mapDispatchToProps = {
    increment,
    decrement,
    prodRemove
}


export default  connect(mapStateToProps,mapDispatchToProps)(CartProduct);