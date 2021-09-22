import { normalizedReviews } from "../../../fixtures";

const defaultReviews =  normalizedReviews.reduce((accum , review)=>{
    accum[review.id] = review
    return accum
},{})


export default (reviews = defaultReviews,action) => {
    const {type} = action
    //console.log(reviews)
    switch (type){
        default
        : return reviews
    }
}