import React from 'react';

import { ProductCard, Searchbar } from '@components';

import './Restaurant.scss';

const Restaurant = (props) => {

    const {
        onAddProduct,
        name,
        stars,
        kitchen,
        price,
        products } = props;

    return (
        <div className="restaurant">
            <div className="restaurant__header">
                <div className="restaurant__info">
                    <div className="restaurant__title">{name}</div>
                    <div className="restaurant-descr">
                        <div className="restaurant-descr__rating">{stars}</div>
                        <div className="restaurant-descr__price">{`от ${price} ₽`}</div>
                        <div className="restaurant-descr__caregory">{kitchen}</div>
                    </div>
                </div>
                <Searchbar/>
            </div>
            <div className="restaurant__body">
                {
                    products.map((item) => <ProductCard onAddProduct={onAddProduct} key={item.id} item={item} />)
                }
            </div>
        </div>
    )
    
}

export default Restaurant
