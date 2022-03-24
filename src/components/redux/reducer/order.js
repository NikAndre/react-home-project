export default (state = {}, action) => {
    const { type, payload } = action;
    let result = { ...state };
    switch (type) {
        case 'increment':
            return { ...state, [payload.id]: (state[payload.id] || 0) + 1 };
        case 'decrement':
            return { ...state, [payload.id]: state[payload.id] > 0 ? state[payload.id] - 1 : 0 };
        case 'PRODREMOVE':
            delete result[payload.id];
            return { ...result };
        default:
            return state;
    }
};
