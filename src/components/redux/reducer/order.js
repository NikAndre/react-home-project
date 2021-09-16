export default (state = {},action) => {
    const {type,payload} = action
    console.log(state, payload)
    switch (type) {
        case 'increment'
        : return {...state,[payload.id]: (state[payload.id] || 0) + 1 }
        case 'decrement'
        : return {...state,[payload.id]:
            state[payload.id] === 0
            ? 0
            : (state[payload.id] || 0) - 1 }
        default
        : return state
    }
}