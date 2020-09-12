import React, { Fragment } from 'react';

import './Promo.scss';

const Promo = () => {
    
    return (
        <Fragment>
            <div className="promo pizza">
                <h1 className="promo__title">Онлайн-сервис <br />доставки еды на дом</h1>
                <p className="promo__text">
                    Блюда из любимого ресторана привезет курьер в перчатках, маске и с антисептиком
                </p>
            </div>
            {/* <div className="promo kebab">
                <h1 className="promo__title">Шашлыки на майские со скидкой 35%</h1>
                <p className="promo__text">
                    Закажите шашлыки в любом ресторане до 10 мая и получите скидку по промокоду OMAGAD
                </p>
            </div>
            <div className="promo vegetables">
                <h1 className="promo__title">Скидка 20% на всю еду по промокоду LOVE.REACT.JS</h1>
                <p className="promo__text">
                    Блюдо из ресторана привезут вместе с двумя подарочными книгами по фронтенду
                </p>
            </div>
            <div className="promo sushi">
                <h1 className="promo__title">Сеты со скидкой до 30% в ресторанах</h1>
                    <p className="promo__text">
                        Скидки на сеты до 30 мая по промокоду DADADA
                    </p>
            </div> */}
        </Fragment>
    )

};

export default Promo
