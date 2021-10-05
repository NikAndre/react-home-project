import React from "react";
import Menu from "../menu/menu";
import Rate from "../rate/rate";
import Reviews from "../reviews/reviews";
import propTypes from 'prop-types'
import {connect} from "react-redux";
import Tabs from "../navigation/navigation";

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

    const tabs = [
       {title: 'Menu' , content : <Menu menu = {restaurant.menu}/>},
       {title: 'Reviews' , content : <Reviews arrId = {restaurant.reviews} />}
    ]

    return(
        <div>
            <Tabs tabs={tabs}/>
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