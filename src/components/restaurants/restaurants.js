import React from 'react';
import Restaurant from '../restaurant/restaraunt';
import '../../Styles.css';
import { connect } from 'react-redux';
import Tabs from '../navigation/navigation';

function Restaurants({ restaurants }) {
    const tabs = restaurants.map((restaurant) => {
        return {
            title: restaurant.name,
            content: <Restaurant restaurant={restaurant} />
        };
    });

    return (
        <div className={'container'}>
            <Tabs tabs={tabs} />
        </div>
    );
}

export default connect((state) => ({
    restaurants: Object.values(state.restaurants)
}))(Restaurants);
