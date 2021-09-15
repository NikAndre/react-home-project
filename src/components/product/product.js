import React from 'react'
import counter from "../hocs/counter";
import '../../Styles.css'


function Product(props){
   const {count,increment,decrement} = props

    return(
        <div className={'wrapper'}>
            <p>{props.product.name}</p>
            <p>{props.product.price} $</p>
            <div className={'wrapper'}>
                <button onClick={decrement}> - </button>
                <p> count  : {count}</p>
                <button onClick={increment}> + </button>
            </div>
        </div>
    )

}

export default  counter (Product);