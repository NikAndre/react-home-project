import React from 'react'
import useAmount  from '../hooks/use-amount'


export default function Product(props){
   const {count,increment,decrement} = useAmount()

    return(
        <div>
            <p>{props.product.name}</p>
            <p>{props.product.price} $</p>
            <button onClick={decrement}> - </button>
            <p> count  : {count}</p>
            <button onClick={increment}> + </button>

        </div>
    )

}