import { normalizedReviews } from "../../../fixtures";

const defaultReviews =  normalizedReviews.reduce((accum , review)=>{
        accum[review.id] = review
        return accum
    },{})

export default (reviews = defaultReviews,action) => {
    const {type,payload} = action
    console.log(payload)
    switch (type){
        case 'ADDREVIEW'
        :   const result =  {...reviews, ...payload}
            console.log(result)
            return result
        default
        : return reviews
    }
}

