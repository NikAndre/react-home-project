import React from "react";
import Review from "./product/review";
import {connect} from "react-redux";

function Reviews ({ arrId }){

    return (
        <div>
            <h1>Reviews</h1>
            <div className={'wrapper'}>
            {
                arrId.map((id)=> (<Review key = {id} id = {id}/>))
            }
            </div>
        </div>
    )
}

export default connect()(Reviews)