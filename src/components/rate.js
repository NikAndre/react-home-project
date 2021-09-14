import React from "react";
import star from  '../images/star2.jpg'
import '../Styles.css'

export default function Rate(props){
    console.log(props)
    const renderStarRate = () => {
        const arr = []
        let i = 0
        while(i < props.rate){
            i++
            arr.push(<p><img className={'img-star'} src={star} alt = 'star'></img></p>)
    }
    return arr
    }

    return (
        <div className={'img-wrapper'}>
            <p>Rating :</p>
            {renderStarRate()}
        </div>
    )
}