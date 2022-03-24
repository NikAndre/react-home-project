import { normalizedUsers } from '../../../fixtures';

const defaultUsers = normalizedUsers.reduce((accum, user) => {
    accum[user.id] = user;
    return accum;
}, {});

export default (users = defaultUsers, action) => {
    const { type } = action;
    switch (type) {
        default:
            return users;
    }
};
