import DeliveryFoodService from "../../services";

const deliveryFS = new DeliveryFoodService();

const restaurantsLoaded = (restaurants) => {
    return {
        type: 'FETCH_RESTAURANTS_SUCCESS',
        payload: restaurants
    }
};

const restaurantsRequested = () => {
    return {
        type: 'FETCH_RESTAURANTS_REQUEST',
    }
};

const restaurantsError = (error) => {
    return {
        type: 'FETCH_RESTAURANTS_FAILED',
        payload: error
    }
};

const restaurantLoaded = (restaurant) => {
    return {
        type: 'FETCH_ONE_RESTAURANT_SUCCESS',
        payload: restaurant
    }
};

const restaurantRequested = () => {
    return {
        type: 'FETCH_ONE_RESTAURANT_REQUEST',
    }
};

const restaurantError = (error) => {
    return {
        type: 'FETCH_ONE_RESTAURANT_FAILED',
        payload: error
    }
};

const productAddedToCart = (productId) => {
    return {
        type: 'PRODUCT_ADDED_TO_CART',
        payload: productId
    }
};

const productRemovedFromCart = (productId) => {
    return {
        type: 'PRODUCT_REMOVED_FROM_CART',
        payload: productId
    }
};

const allProductsRemovedFromCart = (productId) => {
    return {
        type: 'ALL_PRODUCTS_REMOVED_FROM_CART',
        payload: productId
    }
};

const cartIsCleared = () => {
    return {
        type: 'CART_IS_CLEARED',
    }
};

const searchInput = (query) => ({
    type: 'TYPED_SEARCH_QUERY',
    payload: query
});


const productsAreLoaded = (productId) => {
    return {
        type: 'PRODUCTS_ARE_LOADED',
        payload: productId
    }
};



const fetchRestaurants = (dispatch) => () => {
    dispatch(restaurantsRequested());
    deliveryFS.getRestaurants()
        .then((data) => dispatch(restaurantsLoaded(data)))
        .catch((error) => dispatch(restaurantsError(error)));
    
};

const fetchOneRestraurant = (id, dispatch) => () => {
    dispatch(restaurantRequested());
    deliveryFS.getRestaurant(id)
        .then((data) => dispatch(restaurantLoaded(data)))
        .catch((error) => dispatch(restaurantError(error)));
};



export {
    fetchRestaurants,
    fetchOneRestraurant,
    productAddedToCart,
    productRemovedFromCart,
    allProductsRemovedFromCart,
    cartIsCleared,
    productsAreLoaded,
    searchInput
};