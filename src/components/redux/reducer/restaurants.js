import { normalizedRestaurants as defaultRestaurants } from '../../../fixtures';

// const defaultRestaurants =  normalizedRestaurants.reduce((accum , restaurant)=>{
//     accum[restaurant.id] = restaurant
//     return accum
// },{})

export default (restaurants = defaultRestaurants, action) => {
    const { type } = action;
    console.log(restaurants);
    switch (type) {
        default:
            return restaurants;
    }
};
