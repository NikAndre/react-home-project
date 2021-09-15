import React from 'react'
import counter from "../hocs/counter";
import '../../Styles.css'
import propTypes from 'prop-types'


function Product({product, count, increment, decrement}){


    return(
        <div key = {product.id} className={'wrapper'}>
            <div>
                <p>{product.name}</p>
                {product.ingredients.map(ingredient => (<p>{ingredient}</p>))}
            </div>
            <p>{product.price} $</p>
            <div className={'wrapper'}>
                <button onClick={decrement}> - </button>
                <p> count  : {count}</p>
                <button onClick={increment}> + </button>
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
    count: propTypes.number,
    increment: propTypes.func,
    decrement: propTypes.func
}

export default  counter (Product);