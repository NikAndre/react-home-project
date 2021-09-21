import { normalizedReviews as defaultReviews} from "../../../fixtures";

export default (reviews = defaultReviews,action) => {
    const {type} = action
    console.log(reviews)
    switch (type){
        default
        : return reviews
    }
}