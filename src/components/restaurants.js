import React,{useState,useMemo} from 'react'
import Restaurant from "./restaraunt";
import Navigation from "./navigation";
import '../Styles.css'
import propTypes from 'prop-types'
import Cart from "./cart";
import {connect} from "react-redux";



function Restaurants (
    {
       restaurants
    }){
    //console.log(restaurants)

    const [activeId, setActiveId] = useState(restaurants[0].id)

    const activeRestaurant = useMemo(
        () => restaurants.find(restaurant => restaurant.id === activeId),
        [activeId,restaurants]
    )

    return (
        <div className={'container'}>
            <Navigation
                restaurants = {restaurants}
                onRestaurantClick = {(id) => {setActiveId(id)} }
            />
            <div className={'component-wrapper'}>
            <Restaurant  restaurant = {activeRestaurant}  />
            <Cart
                restaurants = {restaurants}
            />
            </div>
        </div>
    )
}
Restaurants.propTypes = {
    restaurants: propTypes.arrayOf({
    id: propTypes.string.isRequired
}).isRequired
}

export default connect((state)=> ({
    restaurants : state.restaurants
}))(Restaurants)