export default class DeliveryFoodService {

    _apiBase = "http://localhost:3000";

    getResource = async (url) => {
        const result = await fetch(`${this._apiBase}${url}`);
        if (!result.ok) throw new Error(`Could not fetch ${url}` + `, received ${result.status}`);
        return await result.json();
    }

    getRestaurants = async () => {
        const result = await this.getResource('/restaurants/');
        return result.map((item) => ({
            id: item.id,
            image: `http://localhost:3000/${item.image}`,
            kitchen: item.kitchen,
            name: item.name,
            price: item.price,
            products: item.products,
            stars: item.stars,
            timeOfDelivery: item.time_of_delivery
        }));
    }

    getRestaurant = async (id) => {
        const result = await this.getResource(`/restaurants/${id}`);
        return {
            id: result.id,
            image: `http://localhost:3000/${result.image}`,
            kitchen: result.kitchen,
            name: result.name,
            price: result.price,
            products: result.products,
            stars: result.stars,
            timeOfDelivery: result.time_of_delivery
        }
    }
}