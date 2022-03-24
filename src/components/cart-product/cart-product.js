import React from 'react';
import { decrement, increment, prodRemove } from '../redux/actions';
import { connect } from 'react-redux';

const CartProduct = ({ product, increment, decrement, prodRemove }) => {
    console.log(product);

    return (
        <div key={product.id} className={'cart-product_wrapper'}>
            <div className={'cart-product_wrapper_name'}>
                <p>{product.name}</p>
            </div>
            <div className={'cart-product_count-block'}>
                <button onClick={() => decrement(product.id)}> - </button>
                <p> {product.amount}</p>
                <button onClick={() => increment(product.id)}> + </button>
                <button onClick={() => prodRemove(product.id)}> x </button>
            </div>
            <p className={'cart-product_wrapper_fullprice'}>Price : {product.subTotal} $</p>
        </div>
    );
};
const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = {
    increment,
    decrement,
    prodRemove
};

export default connect(mapStateToProps, mapDispatchToProps)(CartProduct);
