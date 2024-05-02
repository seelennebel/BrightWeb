<template>
    <main>
        <div id = "bar">
            <NavBar />
        </div>
        <div id = "global-container" class = "flex-row">
            <div id = "left">
                <CartProduct :products = "prods"/>
            </div>
            <div id = "right">
                <h1>TOTAL:</h1>
                <h2>{{ store.state.cart_price }} EUR</h2>
                <button @click = "handle_click" type = "button">PURCHASE</button>
            </div>
        </div>
    </main>
</template>

<script setup>
import NavBar from "@/components/NavBar.vue";
import CartProduct from "@/components/CartProduct.vue";
import router from "@/router";

import { useStore } from "vuex";
import { ref } from "vue";

const store = useStore();

const prods = ref([]);

const fetch_products = async () => {
	try {
		let responses = await Promise.all(store.state.cart.map(async product => {
			const response = await fetch(`http://localhost:8000/api/product/${product.id}`);
			return response.json()
		}))
		return responses;
	}
	catch(error) {
		console.log(error);
	}
}

let sum = 0;

fetch_products().then(res => prods.value = res)
.then(result => {
    for(const element of result) {
        sum += element[0].price * store.state.cart.find(item => item.id === element[0]._id).quantity;
    }
    return sum;
}).then(res => store.commit("change_price", res));

const handle_click = () => {
    if(store.state.account === false) {
        window.alert("Please login to complete the checkout");
        router.push("/login");
    }
    else {
        console.log(store.state.cart);
        router.push("/checkout")
    }
};

</script>

<style scoped>

#left
{
    width: 60vw;
}

#right
{
    width: 30vw; 
    border-left: 1px solid black;
    height: fit-content;
    padding-left: 2vw;
}

#bar
{
    margin-bottom: 5vw;
}

</style>