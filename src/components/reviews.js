import React from "react";
import Review from "./product/review";

export default function Reviews (props){
    return (
        <div>
            <h1>Reviews</h1>
            <div className={'wrapper'}>
            {
                props.reviews.map((review)=> (<Review key = {review.id} review = {review}/>))
            }
            </div>
        </div>
    )
}