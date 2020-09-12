import React from 'react'

import './ProductCard.scss';
import { connect } from 'react-redux';

const ProductCard = (props) => {
    
    const { 
        onAddProduct,
        cartItems,
        item: {
            id,
            description,
            image,
            name,
            price
        }
    } = props;

    const getProductAmount = (productId) => cartItems.find((item) => item.id === productId);

    return (
        <div className="product-card">
            <div className="product-card__preview">
                <img src={`http://localhost:3000/${image}`} alt="Фото продукта" />
            </div>
            <div className="product-card__body">
                <div className="product-card__title">
                    {name}
                </div>
                <p className="product-card__ingredients">
                    {description}
                </p>
            </div>
            <div className="product-card__footer">
                    <div className="product-card__price">
                        {`${price} ₽`}
                    </div>
                    <button onClick={() => onAddProduct(id)} className="product-card__btn btn-product-card">
                        <span className="btn-product-card__icon">+</span>
                        <span className="btn-product-card__text">Добавить</span>
                        {
                            getProductAmount(id) ? <span className="btn-product-card__amount">{ getProductAmount(id).amount }</span> : null
                        }
                    </button>
                </div>
        </div>
    )

};

const mapStateToProps = ({ cartItems }) => {
    return {
        cartItems
    }
};

export default connect(mapStateToProps)(ProductCard)
