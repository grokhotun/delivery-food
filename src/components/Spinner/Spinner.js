import React from 'react';

import './Spinner.scss';
import pizza from '../../assets/img/icons/pizza.svg';

const Spinner = () => {

    return (
        <div className="spinner">
            <div className="spinner__loader">
                <img src={pizza} alt="Изображение пиццы" />
            </div>
        </div>
    )

};

export default Spinner
