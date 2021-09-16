import {INCREMENT,DECREMENT} from './constant'

export const increment = (id = 0)=>({
    type: INCREMENT,
    payload: {
        id : id
    }
})
export const decrement = (id = 0)=>({
    type: DECREMENT,
    payload: {
        id : id
    }
})