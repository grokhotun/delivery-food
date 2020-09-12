import React from 'react';
import { Link } from 'react-router-dom';
import { Promo } from '@components';

const HomePage = () => {

    return (
        <div className="home-page">
            <div className="home-page__title">
                <Promo/>
            </div>
            <div className="home-page__button">
                <Link to="/restaurants" className="home-page__link">Начать</Link>
            </div>
        </div>
    )

};

export default HomePage
