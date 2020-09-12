import React from 'react';
import { Route } from 'react-router-dom';
import { Header, CartPage, RestaurantsPage, RestaurantPage, HomePage, Promo } from '@components';

const App = () => {

    return (
        <div className="wrapper">
            <div className="container">
                <div className="content">
                    <Header/>
                    <Route exact path="/" component={HomePage}/>
                    <Route exact path="/restaurants" component={RestaurantsPage}/>
                    <Route path="/restaurants/:id" component={RestaurantPage} />
                    <Route path="/cart" component={CartPage} />
                </div>
            </div>
        </div>
    )
    
};

export default App