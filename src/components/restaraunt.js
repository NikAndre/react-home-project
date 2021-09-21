import React from "react";
import Menu from "./menu";
import Rate from "./rate";
import Reviews from "./reviews";
import propTypes from 'prop-types'
import {connect} from "react-redux";

function Restaurant({restaurant}){
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



    return(
        <div>
            <div>
                <Menu menu = {restaurant.menu}/>
                <Reviews arrId = {restaurant.reviews}/>
            </div>
        </div>
    )
}

Restaurant.propTypes ={
    restaurant: propTypes.shape({
        menu: propTypes.array,
        reviews: propTypes.array.isRequired
    }).isRequired
}




export default connect()(Restaurant)