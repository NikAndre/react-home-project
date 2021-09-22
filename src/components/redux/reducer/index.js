import {combineReducers} from "redux";
import orderReducer from  './order'
import defaultRest from './restaurants'
import defaultProd from './products'
import defaultRev from './reviews'
import defaultUsers from './users'


const reducer = combineReducers(
    {
        foo: 'bar',
        order : orderReducer,
        restaurants: defaultRest,
        products: defaultProd,
        reviews: defaultRev,
        users: defaultUsers
    }
)

export default reducer;