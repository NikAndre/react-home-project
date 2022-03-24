import React from 'react';
import { connect } from 'react-redux';
import CartProduct from '../cart-product/cart-product';
import { orderProductsSelector, countTotalPriceSelector } from '../redux/selectors';

const Cart = ({ products, totalPrice }) => {
    return (
        <div className={'cart-wrapper'}>
            <h1>Cart</h1>
            {products.map((product) => {
                return <CartProduct key={product.id} product={product} />;
            })}
            <h2>Total price: {totalPrice}$</h2>
        </div>
    );
};
const mapStateToProps = (state, ownProps) => ({
    products: orderProductsSelector(state),
    totalPrice: countTotalPriceSelector(state)
});

export default connect(mapStateToProps)(Cart);
