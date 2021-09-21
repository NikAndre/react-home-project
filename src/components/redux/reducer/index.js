import {combineReducers} from "redux";
import orderReducer from  './order'
import defaultRest from './restaurants'


const reducer = combineReducers(
    {
        foo: 'bar',
        order : orderReducer,
        restaurants: defaultRest
    }
)

export default reducer;