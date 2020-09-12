import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchOneRestraurant, productAddedToCart } from '../redux/actions';
import { Restaurant,Spinner, ErrorIndicator } from '@components';

const search = (items, query) => {
    if (query.length === 0) items;
    return items.filter((item) => item.name.toLowerCase().indexOf(query.toLowerCase()) > -1);
};

const RestaurantContainer = ({ history, restaurant, match, fetchRestaurant, error, loading, onAddProduct, searchQuery }) => {
    
    const { id } = match.params;
    useEffect(() => {
        fetchRestaurant(id);
    }, [])

    if (loading) return <Spinner/>
    if (error) return <ErrorIndicator/>

    if (restaurant) {
        const { name, stars, kitchen, price, products } = restaurant;
        
        return (
            <Restaurant 
                name={name} 
                kitchen={kitchen} 
                price={price} 
                stars={stars} 
                products={search(products, searchQuery)} 
                onAddProduct={onAddProduct} />
        )

    }  
};

const mapStateToProps = ({ restaurant, error, loading, searchQuery }) => ({
    restaurant,
    searchQuery,
    error,
    loading
});

const mapDispatchToProps = (disptach) => ({
    fetchRestaurant: (id) => fetchOneRestraurant(id, disptach)(),
    onAddProduct: (id) => disptach(productAddedToCart(id))
});


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(RestaurantContainer))
