import React from "react";
import Rate from "../rate";
import '../../Styles.css'

export default function Review (props){
    return (
        <div className={'review-block'}>
            <p>User: <b>{props.review.user}</b></p>
            <p>Text: {props.review.text} </p>
            <Rate  rate = {props.review.rating}/>
        </div>
    )
}