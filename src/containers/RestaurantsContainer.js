import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { Restaurants, Spinner, ErrorIndicator } from '@components';
import { fetchRestaurants } from '../redux/actions';

const RestaurantsContainer = ({ restaurants, fetchRestaurants, error, loading }) => {
    
    useEffect(() => {
        fetchRestaurants();
    }, [])

    if (loading) return <Spinner/>
    if (error) return <ErrorIndicator/>
    return <Restaurants restaurants={restaurants} />
};
 
const mapStateToProps = ({ restaurants, error, loading, products }) => ({
    restaurants,
    error,
    loading,
    products
});

const mapDispatchToProps = (dispatch) => {
    return {
        fetchRestaurants: fetchRestaurants(dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer)
