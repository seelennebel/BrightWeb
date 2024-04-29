import { createApp } from 'vue';
import { createStore } from 'vuex';
import App from './App.vue';
import router from './router';

const store = createStore({
    state: {
        account: false,
        cart: [],
        cart_price: 0
    },
    mutations: {
        change(state, value) {
            state.account = value;
        },
        add_product(state, id) {
            state.cart.push(id);
        },
        change_price(state,value) {
            state.cart_price = value;
        },
        change_price_minus(state, value) {
            state.cart_price -= value;
        },
        add_one_to_quantity(state, id) {
            let index = state.cart.findIndex(el => el.id === id);
            state.cart[index].quantity += 1;
        },
        change_quantity_minus(state, id) {
            let index = state.cart.findIndex(el => el.id === id);
            state.cart[index].quantity -= 1;
        }
    }
});

const app = createApp(App);

app.use(router);
app.use(store);

app.mount('#app');
