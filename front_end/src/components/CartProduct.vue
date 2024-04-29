<template>
    <div id = "container" class = "flex-row" v-for = "product in props.products" :key = product[0]._id>
		<div id = "image">
			<img :src = "'http://localhost:8000/api/image/' + product[0].file">
		</div>
		<div id = right-container>
			<div id = "name" class = "flex-column">
				<h1 class = "desc"> {{ product[0].name }} </h1>
				<h2 class = "desc">BRAND: {{ product[0].brand }} </h2>
			</div>
			<div id = "price">
				<h2>PRICE:</h2>
				<h2> {{ product[0].price }} EUR</h2>
			</div>
			<h2>{{store.state.cart.find(item => item.id === product[0]._id).quantity}}</h2>
			<button @click = "plus(product[0]._id)" type = "button" for = "quantity">+</button>
			<button @click = "minus(product[0]._id)" type = "button" for = "quantity">-</button>
		</div>
    </div>
</template>

<script setup>

import { defineProps, ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const props = defineProps({
	products: Array
})

const plus = (id) => {
	store.commit("add_one_to_quantity", id);
	let index = store.state.cart.findIndex(item => item.id === id);
	const cost = store.state.cart[index].price

	store.state.cart_price += cost;
}

const minus = (id) => {
	let index = store.state.cart.findIndex(item => item.id === id);
	const cost = store.state.cart[index].price
	if(store.state.cart_price - cost < 0) {
		window.alert("Cannot select less then zero products")
	}
	else {
		store.commit("change_quantity_minus", id);
		store.state.cart_price -= cost;
	}
}

</script>

<style scoped>

#quant-label
{
	margin-right: 0.5vw;
}

#quant
{
	font-size: 2vw;
	width: 6vw;
	height: 2vw;
	padding: 0;
}

h2
{
	font-size: 1.5vw;
}

h1
{
	font-size: 2vw;
}

img
{
	border: 1px solid black;
	width: 20vw;
	height: 20vw;
}

#right-container
{
	margin-left: 2vw;
}

#container
{
	margin-left: 5vw;
	margin-bottom: 5vw;
	width: 55vw;
	height: fit-content;
}

</style>