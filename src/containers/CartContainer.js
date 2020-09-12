import React from 'react';
import { connect } from 'react-redux';
import { productAddedToCart, productRemovedFromCart, allProductsRemovedFromCart, cartIsCleared } from '../redux/actions';
import { Cart, CartEmpty }  from '@components';

const CartContainer = ({ cartItems, totalOrders, totalPrice, onAddProduct, onRemoveProduct, onRemoveAllProduct, onClearCart }) => {

    return cartItems.length > 0
        ? <Cart 
            totalOrders={totalOrders} 
            totalPrice={totalPrice} 
            onAddProduct={onAddProduct} 
            onClearCart={onClearCart} 
            onRemoveProduct={onRemoveProduct} 
            onRemoveAllProduct={onRemoveAllProduct} 
            cartItems={cartItems} />
        : <CartEmpty/>

};

const mapStateToProps = ({ cartItems, totalOrders, totalPrice }) => {
    return {
        cartItems,
        totalOrders,
        totalPrice,
    }
};


const mapDispatchToProps = (dispatch) => {
    return {
        onAddProduct: (id) => dispatch(productAddedToCart(id)),
        onRemoveProduct: (id) => dispatch(productRemovedFromCart(id)),
        onRemoveAllProduct: (id) => dispatch(allProductsRemovedFromCart(id)),
        onClearCart: () => dispatch(cartIsCleared())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer)
