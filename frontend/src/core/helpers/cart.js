import store from '../store/index'

export function addToCart(item){
    store.commit('addToCart', item);
}

export function removeFromCart(item) {
    store.commit('removeFromCart', item);
}
  
export function totalPrice() {
    let total = 0;

    for (let item of store.state.cart) {
        total += item.totalPrice;
    }

    return total.toFixed(2);
}
