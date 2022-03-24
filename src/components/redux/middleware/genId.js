import { v4 as uuidv4 } from 'uuid';

export default (store) => (next) => (action) => {
    const { type, payload } = action;
    const newId = uuidv4();
    const newUserId = uuidv4();
    //console.log(action)
    switch (type) {
        case 'ADDREVIEW':
            action.payload = {
                [newId]: {
                    id: newId,
                    userId: newUserId,
                    text: payload.text,
                    rating: payload.rating
                }
            };
            return next(action);
        default:
            return next(action);
    }
};
