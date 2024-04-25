import { createApp } from 'vue';
import { createStore } from 'vuex';
import App from './App.vue';
import router from './router';

const store = createStore({
    state: {
        account: false,
        cart: []
    },
    mutations: {
        change(state, value) {
            state.account = value;
        },
        add_product(state, id) {
            state.cart.push(id);
        }
    }
});

const app = createApp(App);

app.use(router);
app.use(store);

app.mount('#app');
