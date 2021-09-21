import {createSelector} from 'reselect'

const restaurantsSelector = state =>  state.restaurants
const orderSelector = state =>  state.order




export const orderProductsSelector =  createSelector(
    restaurantsSelector,
    orderSelector,
    (restaurants,order) => {
        const allProducts = restaurants.flatMap(restaurant => restaurant.menu)

    return  Object.keys(order).map(productId => allProducts.find(product => product.id === productId))
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