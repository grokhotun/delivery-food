!function(e){function t(t){for(var a,o,i=t[0],l=t[1],u=t[2],m=0,d=[];m<i.length;m++)o=i[m],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&d.push(n[o][0]),n[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);for(s&&s(t);d.length;)d.shift()();return c.push.apply(c,u||[]),r()}function r(){for(var e,t=0;t<c.length;t++){for(var r=c[t],a=!0,i=1;i<r.length;i++){var l=r[i];0!==n[l]&&(a=!1)}a&&(c.splice(t--,1),e=o(o.s=r[0]))}return e}var a={},n={0:0},c=[];function o(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=a,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(r,a,function(t){return e[t]}.bind(null,a));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="./";var i=window.webpackJsonp=window.webpackJsonp||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var s=l;c.push([143,1]),r()}({143:function(e,t,r){r(144),e.exports=r(351)},338:function(e,t,r){},340:function(e,t,r){},341:function(e,t,r){},342:function(e,t,r){},343:function(e,t,r){},344:function(e,t,r){},345:function(e,t,r){},346:function(e,t,r){},347:function(e,t,r){},350:function(e,t,r){},351:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),c=r(71),o=r.n(c),i=r(13),l=r(14),u=r.p+"0a10d7e112d0479e39e4cee53a9faa41.svg",s=(r(338),Object(l.b)((function(e){return{totalPrice:e.totalPrice,totalOrders:e.totalOrders}}))((function(e){var t=e.totalPrice,r=e.totalOrders;return n.a.createElement("div",{className:"header"},n.a.createElement(i.b,{to:"/",className:"header__logo"},n.a.createElement("img",{src:u,alt:"Лого сайта"})),n.a.createElement("div",{className:"header__cart"},n.a.createElement(i.b,{to:"/cart",className:"cart-btn"},n.a.createElement("span",{className:"cart-btn__total"},t?"".concat(t," ₽"):"0 ₽"),n.a.createElement("span",{className:"cart-btn__delimeter"}),n.a.createElement("span",{className:"cart-btn__amount"},r||"0"))))}))),m=function(e){var t=e.item,r=t.id,a=t.name,c=t.image,o=t.kitchen,l=t.price,u=t.stars,s=t.timeOfDelivery;return n.a.createElement(i.b,{to:"/restaurants/".concat(r),className:"restaurant-card"},n.a.createElement("div",{className:"restaurant-card__preview"},n.a.createElement("img",{src:c,alt:"Фото ресторана"})),n.a.createElement("div",{className:"restaurant-card__info"},n.a.createElement("div",{className:"restaurant-card__header"},n.a.createElement("div",{className:"restaurant-card__title"},a),n.a.createElement("div",{className:"restaurant-card__tag"},"".concat(s," мин."))),n.a.createElement("div",{className:"restaurant-descr"},n.a.createElement("div",{className:"restaurant-descr__rating"},u),n.a.createElement("div",{className:"restaurant-descr__price"},"от ".concat(l," ₽")),n.a.createElement("div",{className:"restaurant-descr__caregory"},o))))},d=(r(340),function(e){var t=e.restaurants;return n.a.createElement("div",{className:"restaurants"},n.a.createElement("div",{className:"restaurants__header"},n.a.createElement("div",{className:"restaurants__title"},"Рестораны")),n.a.createElement("div",{className:"restaurants__body"},t.map((function(e){return n.a.createElement(m,{key:e.id,item:e})}))))}),f=(r(341),function(e){var t=e.onAddProduct,r=e.name,a=e.stars,c=e.kitchen,o=e.price,i=e.products;return n.a.createElement("div",{className:"restaurant"},n.a.createElement("div",{className:"restaurant__header"},n.a.createElement("div",{className:"restaurant__info"},n.a.createElement("div",{className:"restaurant__title"},r),n.a.createElement("div",{className:"restaurant-descr"},n.a.createElement("div",{className:"restaurant-descr__rating"},a),n.a.createElement("div",{className:"restaurant-descr__price"},"от ".concat(o," ₽")),n.a.createElement("div",{className:"restaurant-descr__caregory"},c))),n.a.createElement(B,null)),n.a.createElement("div",{className:"restaurant__body"},i.map((function(e){return n.a.createElement(p,{onAddProduct:t,key:e.id,item:e})}))))}),p=(r(342),Object(l.b)((function(e){return{cartItems:e.cartItems}}))((function(e){var t=e.onAddProduct,r=e.cartItems,a=e.item,c=a.id,o=a.description,i=a.image,l=a.name,u=a.price,s=function(e){return r.find((function(t){return t.id===e}))};return n.a.createElement("div",{className:"product-card"},n.a.createElement("div",{className:"product-card__preview"},n.a.createElement("img",{src:"http://localhost:3000/".concat(i),alt:"Фото продукта"})),n.a.createElement("div",{className:"product-card__body"},n.a.createElement("div",{className:"product-card__title"},l),n.a.createElement("p",{className:"product-card__ingredients"},o)),n.a.createElement("div",{className:"product-card__footer"},n.a.createElement("div",{className:"product-card__price"},"".concat(u," ₽")),n.a.createElement("button",{onClick:function(){return t(c)},className:"product-card__btn btn-product-card"},n.a.createElement("span",{className:"btn-product-card__icon"},"+"),n.a.createElement("span",{className:"btn-product-card__text"},"Добавить"),s(c)?n.a.createElement("span",{className:"btn-product-card__amount"},s(c).amount):null)))}))),E=(r(343),function(e){var t=e.onAddProduct,r=e.onRemoveProduct,a=e.onRemoveAllProduct,c=e.item,o=c.id,i=c.name,l=c.description,u=c.amount,s=c.totalPrice,m=c.image;return n.a.createElement("div",{className:"cart-item"},n.a.createElement("div",{className:"cart-item__img"},n.a.createElement("img",{src:"http://localhost:3000/".concat(m),alt:"Preview photo"})),n.a.createElement("div",{className:"cart-item__info"},n.a.createElement("span",null,i),n.a.createElement("span",null,l)),n.a.createElement("div",{className:"cart-item__counter"},n.a.createElement("button",{onClick:function(){return r(o)},className:"cart-item__btn cart-item__btn--minus"},n.a.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("path",{d:"M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z",fill:"#EB5A1E"}),n.a.createElement("path",{d:"M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z",fill:"#EB5A1E"}))),n.a.createElement("span",null,u),n.a.createElement("button",{onClick:function(){return t(o)},className:"cart-item__btn cart-item__btn--plus"},n.a.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("path",{d:"M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z",fill:"#EB5A1E"}),n.a.createElement("path",{d:"M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z",fill:"#EB5A1E"})))),n.a.createElement("div",{className:"cart-item__price"},n.a.createElement("span",null,"".concat(s," ₽"))),n.a.createElement("div",{className:"cart-item__remove"},n.a.createElement("div",{onClick:function(){return a(o)},className:"cart-item__btn cart-item__btn--remove"},n.a.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("path",{d:"M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z",fill:"#EB5A1E"}),n.a.createElement("path",{d:"M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z",fill:"#EB5A1E"})))))}),_=function(e){var t=e.onAddProduct,r=e.onClearCart,a=e.onRemoveProduct,c=e.onRemoveAllProduct,o=e.cartItems,l=e.totalOrders,u=e.totalPrice;return n.a.createElement("div",{className:"cart"},n.a.createElement("div",{className:"cart__header"},n.a.createElement("div",{className:"cart__title"},n.a.createElement("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("path",{d:"M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),n.a.createElement("path",{d:"M14.3333 16.3333C15.0697 16.3333 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.597 13.6667 13 14.2636 13 15C13 15.7364 13.597 16.3333 14.3333 16.3333Z",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),n.a.createElement("path",{d:"M4.78002 4.99999H16.3334L15.2134 10.5933C15.1524 10.9003 14.9854 11.176 14.7417 11.3722C14.4979 11.5684 14.1929 11.6727 13.88 11.6667H6.83335C6.50781 11.6694 6.1925 11.553 5.94689 11.3393C5.70128 11.1256 5.54233 10.8295 5.50002 10.5067L4.48669 2.82666C4.44466 2.50615 4.28764 2.21182 4.04482 1.99844C3.80201 1.78505 3.48994 1.66715 3.16669 1.66666H1.66669",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})),"Корзина"),n.a.createElement("div",{onClick:function(){return r()},className:"cart__clear"},n.a.createElement("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("path",{d:"M2.5 5H4.16667H17.5",stroke:"#B6B6B6",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"}),n.a.createElement("path",{d:"M6.66663 5.00001V3.33334C6.66663 2.89131 6.84222 2.46739 7.15478 2.15483C7.46734 1.84227 7.89127 1.66667 8.33329 1.66667H11.6666C12.1087 1.66667 12.5326 1.84227 12.8451 2.15483C13.1577 2.46739 13.3333 2.89131 13.3333 3.33334V5.00001M15.8333 5.00001V16.6667C15.8333 17.1087 15.6577 17.5326 15.3451 17.8452C15.0326 18.1577 14.6087 18.3333 14.1666 18.3333H5.83329C5.39127 18.3333 4.96734 18.1577 4.65478 17.8452C4.34222 17.5326 4.16663 17.1087 4.16663 16.6667V5.00001H15.8333Z",stroke:"#B6B6B6",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"}),n.a.createElement("path",{d:"M8.33337 9.16667V14.1667",stroke:"#B6B6B6",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"}),n.a.createElement("path",{d:"M11.6666 9.16667V14.1667",stroke:"#B6B6B6",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"})),n.a.createElement("span",null,"Очистить корзину"))),n.a.createElement("div",{className:"cart__body"},o.map((function(e){return n.a.createElement(E,{key:e.id,onAddProduct:t,onRemoveProduct:a,onRemoveAllProduct:c,item:e})}))),n.a.createElement("div",{className:"cart__footer footer-cart"},n.a.createElement("div",{className:"footer-cart__row"},n.a.createElement("div",{className:"footer-cart__total-products"},n.a.createElement("p",null,"Всего заказов: ",n.a.createElement("span",null,"".concat(l," шт.")))),n.a.createElement("div",{className:"footer-cart__total-price"},n.a.createElement("p",null,"Сумма заказа: ",n.a.createElement("span",null,"".concat(u," ₽"))))),n.a.createElement("div",{className:"footer-cart__row"},n.a.createElement(i.b,{to:"/restaurants",className:"footer-cart__btn footer-cart__btn--go-back"},n.a.createElement("svg",{width:"8",height:"14",viewBox:"0 0 8 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("path",{d:"M7 13L1 6.93015L6.86175 1",stroke:"#D3D3D3",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})),n.a.createElement("span",null,"Вернуться назад")),n.a.createElement(i.b,{to:"/",className:"footer-cart__btn footer-cart__btn--pay"},n.a.createElement("span",null,"Оплатить сейчас")))))},v=r.p+"db905d1f4b063162f25b9369543f6cd2.png",h=function(){return n.a.createElement("div",{className:"cart cart--empty"},n.a.createElement("div",{className:"cart__title"},"Корзина пуста 😕"),n.a.createElement("div",{className:"cart__text"},n.a.createElement("p",null,"Вероятней всего, вы не заказывали ещё пиццу."),n.a.createElement("p",null,"Для того, чтобы заказать пиццу, перейди на главную страницу.")),n.a.createElement("div",{className:"cart__img"},n.a.createElement("img",{src:v,alt:"Изображение пустой корзины"})))},y=(r(344),r.p+"56ac87032d8f6fdf863326acd06c0d97.svg"),b=function(){return n.a.createElement("div",{className:"spinner"},n.a.createElement("div",{className:"spinner__loader"},n.a.createElement("img",{src:y,alt:"Изображение пиццы"})))},g=(r(345),function(){return n.a.createElement("div",{className:"error-indicator"},n.a.createElement("div",{className:"error-indicator__title"},"Извините, сервер временно недоступен. Попробуйте позже"))});function C(e){return(C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function N(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function O(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function w(e,t){return(w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function R(e,t){return!t||"object"!==C(t)&&"function"!=typeof t?A(e):t}function A(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function P(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function T(e){return(T=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function S(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var k=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}(i,e);var t,r,a,c,o=(t=i,function(){var e,r=T(t);if(P()){var a=T(this).constructor;e=Reflect.construct(r,arguments,a)}else e=r.apply(this,arguments);return R(this,e)});function i(){var e;N(this,i);for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];return S(A(e=o.call.apply(o,[this].concat(r))),"state",{hasError:!1}),e}return r=i,(a=[{key:"componentDidCatch",value:function(){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?n.a.createElement(g,null):this.props.children}}])&&O(r.prototype,a),c&&O(r,c),i}(a.Component);function L(e,t,r,a,n,c,o){try{var i=e[c](o),l=i.value}catch(e){return void r(e)}i.done?t(l):Promise.resolve(l).then(a,n)}function j(e){return function(){var t=this,r=arguments;return new Promise((function(a,n){var c=e.apply(t,r);function o(e){L(c,a,n,o,i,"next",e)}function i(e){L(c,a,n,o,i,"throw",e)}o(void 0)}))}}function x(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var D=new function e(){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),x(this,"_apiBase","http://localhost:3000"),x(this,"getResource",function(){var e=j(regeneratorRuntime.mark((function e(r){var a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(t._apiBase).concat(r));case 2:if((a=e.sent).ok){e.next=5;break}throw new Error("Could not fetch ".concat(r)+", received ".concat(a.status));case 5:return e.next=7,a.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),x(this,"getRestaurants",j(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/restaurants/");case 2:return r=e.sent,e.abrupt("return",r.map((function(e){return{id:e.id,image:"http://localhost:3000/".concat(e.image),kitchen:e.kitchen,name:e.name,price:e.price,products:e.products,stars:e.stars,timeOfDelivery:e.time_of_delivery}})));case 4:case"end":return e.stop()}}),e)})))),x(this,"getRestaurant",function(){var e=j(regeneratorRuntime.mark((function e(r){var a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/restaurants/".concat(r));case 2:return a=e.sent,e.abrupt("return",{id:a.id,image:"http://localhost:3000/".concat(a.image),kitchen:a.kitchen,name:a.name,price:a.price,products:a.products,stars:a.stars,timeOfDelivery:a.time_of_delivery});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},U=function(e){return{type:"PRODUCT_ADDED_TO_CART",payload:e}},M=function(e){return function(){e({type:"FETCH_RESTAURANTS_REQUEST"}),D.getRestaurants().then((function(t){return e({type:"FETCH_RESTAURANTS_SUCCESS",payload:t})})).catch((function(t){return e(function(e){return{type:"FETCH_RESTAURANTS_FAILED",payload:e}}(t))}))}},B=(r(346),Object(l.b)((function(e){return{searchQuery:e.searchQuery}}),(function(e){return{onInputSearch:function(t){return e(function(e){return{type:"TYPED_SEARCH_QUERY",payload:e}}(t))}}}))((function(e){var t=e.onInputSearch,r=e.searchQuery;return n.a.createElement("div",{className:"searchbar"},n.a.createElement("input",{value:r,onChange:function(e){return t(e.target.value)},placeholder:"Поиск блюд...",type:"text",className:"searchbar__input"}))}))),I=(r(347),function(){return n.a.createElement(a.Fragment,null,n.a.createElement("div",{className:"promo pizza"},n.a.createElement("h1",{className:"promo__title"},"Онлайн-сервис ",n.a.createElement("br",null),"доставки еды на дом"),n.a.createElement("p",{className:"promo__text"},"Блюда из любимого ресторана привезет курьер в перчатках, маске и с антисептиком")))}),H=Object(l.b)((function(e){return{restaurants:e.restaurants,error:e.error,loading:e.loading,products:e.products}}),(function(e){return{fetchRestaurants:M(e)}}))((function(e){var t=e.restaurants,r=e.fetchRestaurants,c=e.error,o=e.loading;return Object(a.useEffect)((function(){r()}),[]),o?n.a.createElement(b,null):c?n.a.createElement(g,null):n.a.createElement(d,{restaurants:t})})),V=r(35),F=Object(V.e)(Object(l.b)((function(e){var t=e.restaurant,r=e.error,a=e.loading;return{restaurant:t,searchQuery:e.searchQuery,error:r,loading:a}}),(function(e){return{fetchRestaurant:function(t){return function(e,t){return function(){t({type:"FETCH_ONE_RESTAURANT_REQUEST"}),D.getRestaurant(e).then((function(e){return t({type:"FETCH_ONE_RESTAURANT_SUCCESS",payload:e})})).catch((function(e){return t(function(e){return{type:"FETCH_ONE_RESTAURANT_FAILED",payload:e}}(e))}))}}(t,e)()},onAddProduct:function(t){return e(U(t))}}}))((function(e){e.history;var t,r,c=e.restaurant,o=e.match,i=e.fetchRestaurant,l=e.error,u=e.loading,s=e.onAddProduct,m=e.searchQuery,d=o.params.id;if(Object(a.useEffect)((function(){i(d)}),[]),u)return n.a.createElement(b,null);if(l)return n.a.createElement(g,null);if(c){var p=c.name,E=c.stars,_=c.kitchen,v=c.price,h=c.products;return n.a.createElement(f,{name:p,kitchen:_,price:v,stars:E,products:(t=h,r=m,r.length,t.filter((function(e){return e.name.toLowerCase().indexOf(r.toLowerCase())>-1}))),onAddProduct:s})}}))),Q=Object(l.b)((function(e){return{cartItems:e.cartItems,totalOrders:e.totalOrders,totalPrice:e.totalPrice}}),(function(e){return{onAddProduct:function(t){return e(U(t))},onRemoveProduct:function(t){return e({type:"PRODUCT_REMOVED_FROM_CART",payload:t})},onRemoveAllProduct:function(t){return e({type:"ALL_PRODUCTS_REMOVED_FROM_CART",payload:t})},onClearCart:function(){return e({type:"CART_IS_CLEARED"})}}}))((function(e){var t=e.cartItems,r=e.totalOrders,a=e.totalPrice,c=e.onAddProduct,o=e.onRemoveProduct,i=e.onRemoveAllProduct,l=e.onClearCart;return t.length>0?n.a.createElement(_,{totalOrders:r,totalPrice:a,onAddProduct:c,onClearCart:l,onRemoveProduct:o,onRemoveAllProduct:i,cartItems:t}):n.a.createElement(h,null)})),Z=function(){return n.a.createElement(Q,null)},W=function(){return n.a.createElement("div",null,n.a.createElement(H,null))},Y=function(){return n.a.createElement(F,null)},z=function(){return n.a.createElement("div",{className:"home-page"},n.a.createElement("div",{className:"home-page__title"},n.a.createElement(I,null)),n.a.createElement("div",{className:"home-page__button"},n.a.createElement(i.b,{to:"/restaurants",className:"home-page__link"},"Начать")))},J=function(){return n.a.createElement("div",{className:"wrapper"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"content"},n.a.createElement(s,null),n.a.createElement(V.a,{exact:!0,path:"/",component:z}),n.a.createElement(V.a,{exact:!0,path:"/restaurants",component:W}),n.a.createElement(V.a,{path:"/restaurants/:id",component:Y}),n.a.createElement(V.a,{path:"/cart",component:Z}))))},q=r(73);r(348);function $(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function G(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?$(Object(r),!0).forEach((function(t){K(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):$(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function K(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function X(e){return function(e){if(Array.isArray(e))return ee(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return ee(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return ee(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ee(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}var te={restaurants:[],loading:!0,error:!1,restaurant:null,products:null,searchQuery:"",cartItems:[],totalOrders:null,totalPrice:null},re=function(e,t,r){return 0===t.amount?[].concat(X(e.slice(0,r)),X(e.slice(r+1))):-1===r?[].concat(X(e),[t]):[].concat(X(e.slice(0,r)),[t],X(e.slice(r+1)))},ae=function(e,t,r){var a=e.products,n=e.cartItems,c=a.find((function(e){return e.id===t})),o=n.findIndex((function(e){return e.id===t})),i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0,a=t.id,n=void 0===a?e.id:a,c=t.name,o=void 0===c?e.name:c,i=t.description,l=void 0===i?e.description:i,u=t.image,s=void 0===u?e.image:u,m=t.amount,d=void 0===m?0:m,f=t.totalPrice,p=void 0===f?0:f;return{id:n,name:o,image:s,description:l,amount:d+r,totalPrice:p+r*e.price}}(c,n[o],r);return G({},e,{totalPrice:e.totalPrice+r*c.price,totalOrders:e.totalOrders+r,cartItems:re(n,i,o)})},ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_RESTAURANTS_REQUEST":return G({},e,{restaurants:[],loading:!0,error:!1});case"FETCH_RESTAURANTS_SUCCESS":return G({},e,{restaurants:t.payload,loading:!1,error:!1});case"FETCH_RESTAURANTS_FAILED":return G({},e,{restaurants:[],loading:!1,error:!0});case"FETCH_ONE_RESTAURANT_REQUEST":return G({},e,{restaurant:null,loading:!0,error:!1});case"FETCH_ONE_RESTAURANT_SUCCESS":return G({},e,{restaurant:t.payload,products:t.payload.products,loading:!1,error:!1});case"FETCH_ONE_RESTAURANT_FAILED":return G({},e,{restaurant:null,loading:!1,error:!0});case"PRODUCT_ADDED_TO_CART":return ae(e,t.payload,1);case"PRODUCT_REMOVED_FROM_CART":return ae(e,t.payload,-1);case"ALL_PRODUCTS_REMOVED_FROM_CART":var r=e.cartItems.find((function(e){return e.id===t.payload}));return ae(e,t.payload,-r.amount);case"CART_IS_CLEARED":return G({},e,{cartItems:[],totalPrice:null,totalOrders:null});case"TYPED_SEARCH_QUERY":return G({},e,{searchQuery:t.payload});default:return e}},ce=Object(q.b)(ne);r(350);o.a.render(n.a.createElement(l.a,{store:ce},n.a.createElement(i.a,null,n.a.createElement(k,null,n.a.createElement(J,null)))),document.querySelector("#root"))}});