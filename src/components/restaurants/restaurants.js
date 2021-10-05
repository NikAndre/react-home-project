import React,{useState,useMemo} from 'react'
import Restaurant from "../restaurant/restaraunt";
import Navigation from "../navigation/navigation";
import '../../Styles.css'
import propTypes from 'prop-types'
import Cart from "../cart/cart";
import {connect} from "react-redux";
import Tabs from "../navigation/navigation";

function Restaurants (
    {
       restaurants
    }){
    const tabs = restaurants.map(restaurant =>{
        return{
            title : restaurant.name,
            content: <Restaurant restaurant={restaurant}/>

        }})

    return (
        <div className={'container'}>
            <Tabs tabs = {tabs}/>
        </div>
    )
}


export default connect((state)=> ({
    restaurants : Object.values(state.restaurants),
}))(Restaurants)