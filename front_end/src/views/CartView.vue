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

            </div>
        </div>
    </main>
    
</template>

<script setup>
import NavBar from "@/components/NavBar.vue";
import CartProduct from "@/components/CartProduct.vue";

import { useStore } from "vuex";
import { ref } from "vue";

const store = useStore();

const prods = ref([]);

const fetch_products = async () => {
	try {
		let responses = await Promise.all(store.state.cart.map(async productID => {
			const response = await fetch(`http://localhost:8000/api/product/${productID}`);
			return response.json()
		}))
		return responses;
	}
	catch(error) {
		console.log(error);
	}
}

fetch_products().then(res => prods.value = res);

</script>

<style scoped>

#left
{
    width: 60vw;
}

#right
{
    width: 40vw; 
    border-right: 1px solid black;
}

#bar
{
    margin-bottom: 5vw;
}

</style>