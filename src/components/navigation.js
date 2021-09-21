import React from 'react'
import propTypes from 'prop-types'

export default function Navigation (props){
    return(
        <div className={'navigation-holder'}>
            {props.restaurants.map((restaurant) => <button
                key = {restaurant.id}
                onClick = {() => props.onRestaurantClick(restaurant.id)}
                className={''}
            >
                {restaurant.name}
            </button> )}
        </div>
    )
}

Navigation.propTypes = {
    restaurants: propTypes.array.isRequired
}