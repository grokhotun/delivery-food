import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import logoSvg from '@/assets/img/icons/logo.svg'

import './Header.scss';

const Header = ({ totalPrice, totalOrders }) => {

    return (
        <div className="header">
            <Link to="/" className="header__logo">
                <img src={logoSvg} alt="Лого сайта" />
            </Link>
            <div className="header__cart">
                <Link to="/cart" className="cart-btn">
                    <span className="cart-btn__total">{ totalPrice ? `${totalPrice} ₽` : '0 ₽' }</span>
                    <span className="cart-btn__delimeter"></span>
                    <span className="cart-btn__amount">{totalOrders ? totalOrders : '0'}</span>
                </Link>
            </div>
        </div>
    );

};

const mapStateToProps = ({ totalPrice, totalOrders }) => {
    return {
        totalPrice,
        totalOrders
    }
};

export default connect(mapStateToProps)(Header)
