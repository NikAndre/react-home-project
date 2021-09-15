import React from "react";
import Menu from "./menu";
import Rate from "./rate";
import Reviews from "./reviews";
import propTypes from 'prop-types'

export default function Restaurant({restaurant}){
    const getRestaurantRating = () =>{
        const sumRating = restaurant.reviews.map((review) => {
            return review.rating
        })
            .reduce((accum, rate)=>{
                accum += rate
                return accum
            },0)
        return  sumRating/restaurant.reviews.length
    }

    getRestaurantRating()

    return(
        <div>
            <Menu menu = {restaurant.menu}/>
            <Reviews reviews = {restaurant.reviews}/>
            <h1>Restaurant rating</h1>
            <Rate rate = {getRestaurantRating()}/>
        </div>
    )
}

Restaurant.propTypes ={
    restaurant: propTypes.shape({
        menu: propTypes.array,
        reviews: propTypes.array.isRequired
    }).isRequired
}