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
			<label id = "quant-label" for = "quantity"> QUANTITY </label>
			<input type = "number" name = "quantity" id = "quant">
		</div>
    </div>
</template>

<script setup>

import { defineProps } from 'vue';

const props = defineProps({
	products: Array
})

</script>

<style scoped>

#quant-label
{
	margin-right: 0.5vw;
}

#quant
{
	font-size: 1.5vw;
	width: 3vw;
	height: 1.5vw;
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