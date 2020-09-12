import React from 'react';
import emptyCart from '../../assets/img/empty-cart.png';

const CartEmpty = () => {
    
    return (
        <div className="cart cart--empty">
            <div className="cart__title">
                Корзина пуста 😕
            </div>
            <div className="cart__text">
                <p>Вероятней всего, вы не заказывали ещё пиццу.</p>
                <p>Для того, чтобы заказать пиццу, перейди на главную страницу.</p>
            </div>
            <div className="cart__img">
                <img src={emptyCart} alt="Изображение пустой корзины" />
            </div>
        </div>
    );

};

export default CartEmpty
