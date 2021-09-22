import React from "react";
import Rate from "../rate";
import '../../Styles.css'
import {connect} from "react-redux";

function Review (
    {
     id,
     review,
     user
    }
    ){
    //console.log(user)
    return (
        <div className={'review-block'}>
            <p>User: <b>{user.name}</b></p>
            <p>Text: {review.text} </p>
            <Rate  reviewsId = {[review.id]}/>
        </div>
    )
}

const mapStateToProps = (state,ownProps) => ({
    review : state.reviews[ownProps.id],
    user: state.users[state.reviews[ownProps.id].userId]
})

export default connect(mapStateToProps)(Review)