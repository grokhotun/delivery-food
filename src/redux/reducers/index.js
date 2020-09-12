const initialState = {
    restaurants: [],
    loading: true,
    error: false,

    restaurant: null,
    products: null,
    searchQuery: '',

    cartItems: [],
    totalOrders: null,
    totalPrice: null
};



const updateCartItems = (cartItems, item, index) => {

    if (item.amount === 0) {
        return [
            ...cartItems.slice(0, index),
            ...cartItems.slice(index + 1)
        ];
    }

    if (index === -1) {
        return [
            ...cartItems,
            item
        ]
    }

    return [
        ...cartItems.slice(0, index),
        item,
        ...cartItems.slice(index + 1)
    ]
}

const updateCartItem = (product, item = {}, quantity) => {

    const {
        id = product.id,
        name = product.name,
        description = product.description,
        image = product.image,
        amount = 0,
        totalPrice = 0 } = item;

    return {
        id,
        name,
        image,
        description,
        amount: amount + quantity,
        totalPrice: totalPrice + quantity*product.price
    }
}

const updateOrder = (state, productId, quantity) => {
    const { products, cartItems } = state;
    const product = products.find((product) => product.id === productId);
    const productIndex = cartItems.findIndex(({ id }) => id === productId);
    const productItem = cartItems[productIndex];
    const newItem = updateCartItem(product, productItem, quantity);

    return {
        ...state,
        totalPrice: state.totalPrice + quantity*product.price,
        totalOrders: state.totalOrders + quantity,
        cartItems: updateCartItems(cartItems, newItem, productIndex)
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_RESTAURANTS_REQUEST':
            return {
                ...state,
                restaurants: [],
                loading: true,
                error: false
            }
        case 'FETCH_RESTAURANTS_SUCCESS':
            return {
                ...state,
                restaurants: action.payload,
                loading: false,
                error: false
            }
        case 'FETCH_RESTAURANTS_FAILED':
            return {
                ...state,
                restaurants: [],
                loading: false,
                error: true
            }

        case 'FETCH_ONE_RESTAURANT_REQUEST':
            return {
                ...state,
                restaurant: null,
                loading: true,
                error: false
            }
        case 'FETCH_ONE_RESTAURANT_SUCCESS':
            return {
                ...state,
                restaurant: action.payload,
                products: action.payload.products,
                loading: false,
                error: false
            }
        case 'FETCH_ONE_RESTAURANT_FAILED':
            return {
                ...state,
                restaurant: null,
                loading: false,
                error: true
            }

        case 'PRODUCT_ADDED_TO_CART': 
            return updateOrder(state, action.payload, 1);

        case 'PRODUCT_REMOVED_FROM_CART': {
            return updateOrder(state, action.payload, -1);
        }
        case 'ALL_PRODUCTS_REMOVED_FROM_CART': {
            const product = state.cartItems.find(({ id }) => id === action.payload);
            return updateOrder(state, action.payload, -product.amount);
        }
        case 'CART_IS_CLEARED':
            return {
                ...state,
                cartItems: [],
                totalPrice: null,
                totalOrders: null
            }

        case 'TYPED_SEARCH_QUERY':
            return {
                ...state,
                searchQuery: action.payload
            }
    

        default:
            return state
    }
};

export default reducer