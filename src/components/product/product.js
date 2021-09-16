import React from 'react'
import '../../Styles.css'
import propTypes from 'prop-types'
import {connect} from "react-redux";
import {decrement, increment} from "../redux/actions";



function Product(
    {
        product,
        amount = 0,
        increment,
        decrement,

    }){
    return(
        <div key = {product.id} className={'wrapper'}>
            <div>
                <p>{product.name}</p>
                <div className={'wrapper'}>
                {product.ingredients.map(ingredient => (<p>{ingredient}</p>))}
                </div>
            </div>
            <p>{product.price} $</p>
            <div className={'wrapper'}>
                <p>count  : </p>
                <button onClick={() => decrement(product.id)}> - </button>
                <p> {amount}</p>
                <button onClick={() => increment(product.id)}> + </button>
            </div>
        </div>
    )
}

Product.propTypes = {
    product : propTypes.shape({
            name: propTypes.string,
            ingredients: propTypes.array.isRequired,
            price: propTypes.number
        }
    ).isRequired,
    amount: propTypes.number,
    increment: propTypes.func,
    decrement: propTypes.func
}
const mapStateToProps = (state,ownProps) => ({
    amount : state.order[ownProps.product.id]
})

const mapDispatchToProps = {
    increment,
    decrement
}


export default  connect(mapStateToProps,mapDispatchToProps)(Product);
//export default  counter (Product);