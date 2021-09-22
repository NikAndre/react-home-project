import React from "react";
import star from  '../images/star2.jpg'
import '../Styles.css'
import propTypes from 'prop-types'
import {connect} from "react-redux";

function Rate(
    {
        reviewsId,
        rate
    }){
    //console.log(rate, reviewsId)
    const renderStarRate = () => {
        const arr = []
        let i = 0
        while(i < rate/reviewsId.length){
            i++
            arr.push(<p><img className={'img-star'} src={star} alt = 'star'></img></p>)
    }
    return arr
    }

    return (
        <div  className={'img-wrapper'}>
            <p>Rating :</p>
            {renderStarRate()}
        </div>
    )
}

Rate.propTypes = {
    rate: propTypes.number.isRequired
}

export default connect((state,ownProps)=>({
   rate: ownProps.reviewsId.map(id => state.reviews[id])
       .reduce((accum,review) => {
           //console.log(review)
            accum += review.rating
           return accum
       },0)
}))(Rate)