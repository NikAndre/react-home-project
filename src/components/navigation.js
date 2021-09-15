import React from 'react'
import propTypes from 'prop-types'

export default function Navigation (props){
    return(
        <div>
            {props.restaurants.map((restaurant) => <button
                key = {restaurant.id}
                onClick = {() => props.onRestaurantClick(restaurant.id)}
            >
                {restaurant.name}
            </button> )}
        </div>
    )
}

Navigation.propTypes = {
    restaurants: propTypes.array.isRequired
}