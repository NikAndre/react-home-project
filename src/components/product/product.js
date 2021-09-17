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
    const {id,name,price} = product
    return(
        <div key = {id} className={'wrapper'}>
            <div>
                <p>{name}</p>
                <div className={'wrapper'}>
                {product.ingredients.map(ingredient => (<p>{ingredient}</p>))}
                </div>
            </div>
            <p>{price} $</p>
            <div className={'wrapper'}>
                <p>count  : </p>
                <button onClick={() => decrement(id)}> - </button>
                <p> {amount}</p>
                <button onClick={() => increment(id)}> + </button>
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