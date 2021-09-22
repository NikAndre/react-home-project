import {INCREMENT,DECREMENT,PRODREMOVE,ADDREVIEW} from './constant'

export const increment = (id = 0)=>({
    type: INCREMENT,
    payload: {
        id

    }
})
export const decrement = (id = 0)=>({
    type: DECREMENT,
    payload: {
        id
    }
})
export const prodRemove = (id = 0)=>({
    type: PRODREMOVE,
    payload: {
        id
    }
})
export const addReview = (name = "0",text = "", rating = 0)=>({
    type: ADDREVIEW,
    payload: {
        name,
        text,
        rating
    }
})
