import { createStore } from "vuex";

const store = createStore({
    state() {
        return {
            account: "LOGIN"
        }
    },
    mutations: {
        change (state, value) {
            state.acount = value;
        }
    }
});

export default store;