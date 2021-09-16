import React,{useState,useMemo} from 'react'
import Restaurant from "./restaraunt";
import Navigation from "./navigation";
import '../Styles.css'
import propTypes from 'prop-types'




export default function Restaurants ({restaurants}){
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
            <Restaurant  restaurant = {activeRestaurant}  />

        </div>
    )
}
Restaurants.propTypes = {
    restaurants: propTypes.arrayOf({
    id: propTypes.string.isRequired
}).isRequired
}