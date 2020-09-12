import React from 'react';
import RestaurantCard from './RestaurantCard';
import './Restaurants.scss';

const Restaurants = ({ restaurants }) => {

    return (
        <div className="restaurants">
            <div className="restaurants__header">
                <div className="restaurants__title">
                    Рестораны
                </div>
            </div>
            <div className="restaurants__body">
                { restaurants.map((item) => <RestaurantCard key={item.id} item={item} />) }
            </div>
        </div>
    )
    
};

export default Restaurants
