import React from 'react'
import { Link } from 'react-router-dom';

const RestauranCard = (props) => {

    const { 
        item: { 
            id,
            name, 
            image, kitchen, 
            price, stars, 
            timeOfDelivery 
        } 
    } = props;

    return (
        <Link to={`/restaurants/${id}`} className="restaurant-card">
            <div className="restaurant-card__preview">
                <img src={image} alt="Фото ресторана" />
            </div>
            <div className="restaurant-card__info">
                <div className="restaurant-card__header">
                    <div className="restaurant-card__title">{name}</div>
                    <div className="restaurant-card__tag">{`${timeOfDelivery} мин.`}</div>
                </div>
                <div className="restaurant-descr">
                    <div className="restaurant-descr__rating">{stars}</div>
                    <div className="restaurant-descr__price">{`от ${price} ₽`}</div>
                    <div className="restaurant-descr__caregory">{kitchen}</div>
                </div>
            </div>
        </Link>
    )
    
}

export default RestauranCard
