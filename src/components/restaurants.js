import React,{useState,useMemo} from 'react'
import Restaurant from "./restaraunt";
import Navigation from "./navigation";
import '../Styles.css'
import propTypes from 'prop-types'
import Cart from "./cart";
import {connect} from "react-redux";
import Tabs from "./navigation";

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