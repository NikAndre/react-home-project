import React from "react";
import Rate from "../rate";
import '../../Styles.css'
import {connect} from "react-redux";

function Review (
    {
     id,
     review
    }
    ){
    //console.log(review)
    return (
        <div className={'review-block'}>
            <p>User: <b>{review.user}</b></p>
            <p>Text: {review.text} </p>
            <Rate  reviewsId = {[review.id]}/>
        </div>
    )
}


const mapStateToProps = (state,ownProps) => ({
    review : state.reviews[ownProps.id]
})


export default connect(mapStateToProps)(Review)