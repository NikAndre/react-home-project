import {INCREMENT,DECREMENT,PRODREMOVE} from './constant'

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
