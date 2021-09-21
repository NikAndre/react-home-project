import { restaurants as defaultRestaurants} from "../../../fixtures";


export default (restaurants = defaultRestaurants,action) => {
    const {type} = action
    console.log(restaurants)
    switch (type){
        default
        : return restaurants
    }
}