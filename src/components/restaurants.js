import React,{useState,useMemo} from 'react'
import Restaurant from "./restaraunt";
import Navigation from "./navigation";
import '../Styles.css'




export default function Restaurants (props){
    const [activeId, setActiveId] = useState(props.restaurants[0].id)

    const activeRestaurant = useMemo(
        () => props.restaurants.find(restaurant => restaurant.id === activeId),
        [activeId,props.restaurants]
    )

    return (
        <div className={'container'}>
            <Navigation
                restaurants = {props.restaurants}
                onRestaurantClick = {(id) => {setActiveId(id)} }
            />
            <Restaurant  restaurant = {activeRestaurant}  />

        </div>
    )
}