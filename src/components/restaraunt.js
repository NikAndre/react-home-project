import React from "react";
import Menu from "./menu";
import Rate from "./rate";
import Reviews from "./reviews";

export default function Restaurant(props){
    const getRestaurantRating = () =>{
        const summRating = props.restaurant.reviews.map((review) => {
            return review.rating
        })
            .reduce((accum, rate)=>{
                accum += rate
                return accum
            },0)
        return  summRating/props.restaurant.reviews.length
    }

    getRestaurantRating()

    return(
        <div>
            <Menu menu = {props.restaurant.menu}/>
            <Reviews reviews = {props.restaurant.reviews}/>
            <h1>Restaurant rating</h1>
            <Rate rate = {getRestaurantRating()}/>
        </div>
    )
}