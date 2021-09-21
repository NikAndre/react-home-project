import {createSelector} from 'reselect'

const restaurantsSelector = state =>  state.restaurants
const orderSelector = state =>  state.order
const productsSelector = state =>  state.products
const reviewsSelector = state =>  state.reviews

export const orderProductsSelector =  createSelector(
    productsSelector,
    orderSelector,
    (products,order) => {


    return  Object.keys(order).map(productId => products[productId])
        .map(product => {
            return {
                id: product.id,
                name: product.name,
                amount: order[product.id],
                subTotal: product.price * order[product.id]
            }
        })
})
export const countTotalPriceSelector  = createSelector(
    orderProductsSelector,
    (orderProducts) => {
     return  orderProducts.reduce((accum, product) => {
       return   accum += product.subTotal
     },0)
})