import {combineReducers} from "redux";
import orderReducer from  './order'
import defaultRest from './restaurants'
import defaultProd from './products'
import defaultRev from './reviews'


const reducer = combineReducers(
    {
        foo: 'bar',
        order : orderReducer,
        restaurants: defaultRest,
        products: defaultProd,
        reviews: defaultRev
    }
)

export default reducer;