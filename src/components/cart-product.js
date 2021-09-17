import React from "react";
import {restaurants} from "../fixtures";
import {decrement, increment,prodRemove} from "./redux/actions";
import {connect} from "react-redux";

const CartProduct = (
    {
        id,
        amount,
        increment,
        decrement,
        prodRemove

    }
    ) => {

    const productFromFixturesArray = restaurants.map(restaurant => {
        return restaurant.menu
    })
        .flat()
        .find(product => product.id = id)
    //console.log(productFromFixturesArray)

    return (
        <div key={productFromFixturesArray.id} className={'wrapper'}>
            <div>
                <p>{productFromFixturesArray.name}</p>
            </div>
            <span> Full price :</span>
            <p>{productFromFixturesArray.price * amount} $</p>
            <div>
            <div className={'wrapper'}>
                <span>count : </span>
                <p> {amount}</p>
            </div>
            <div className={'wrapper'}>
                <button onClick={() => decrement(id)}> - </button>
                <button onClick={() => increment(id)}> + </button>
                <button onClick={() => prodRemove(id)}> x </button>
            </div>
            </div>
        </div>
    )
}
const mapStateToProps = (state,ownProps) => ({
    amount : state.order[ownProps.id]
})

const mapDispatchToProps = {
    increment,
    decrement,
    prodRemove
}


export default  connect(mapStateToProps,mapDispatchToProps)(CartProduct);