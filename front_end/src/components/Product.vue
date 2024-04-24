<template>
    <div id = "container" v-for = "product in filteredProducts" :key = product._id>
		<RouterLink :to = "{path: `/product/${product._id}`}">
			<div id = "image">
				<img :src = "'http://localhost:8000/api/image/' + product.file">
			</div>
			<div id = lower-container class = "flex-row">
				<div id = "name" class = "flex-column">
					<p class = "desc">BRAND: {{ product.brand }} </p>
					<p class = "desc"> {{ product.name }} </p>
				</div>
				<div id = "price" class = "flex-column">
					<p>PRICE</p>
					<p> {{ product.price }} EUR</p>
				</div>
			</div>
		</RouterLink>
    </div>
</template>

<script setup>
import { defineProps, computed } from "vue";
import router from "../router/index";

const props = defineProps({
    products: Array,
    query: String
});


const filteredProducts = computed(() => {
    const query = props.query.toLowerCase();
    return props.products.filter(product => {
        return product.name.toLowerCase().includes(query);
    });
});

</script>

<style scoped>

#lower-container:hover
{
	background-color: black;
	color: white;
}


#lower-container
{
	height: 5vw;
}

a
{
	text-decoration: none;
	color: black;
}

#price
{
	width: 50%;
	justify-content: space-around;
	align-items: center;
}

#name
{
	justify-content: space-around;
	align-items: center;
	width: 50%;
}

img
{
    width: 25vw;
    height: 25vw;
}

p
{
	font-size: 1.3vw;
    text-align: center;
	margin: 0;
	padding: 0;
}

#desc
{
    font-size: 2vw;
	margin: 0;
	padding: 0;
}

#image
{
    height: 25vw;
    font-size: 4vw;
    text-align: center;
	border-bottom: 1px black solid;
}

#container
{
    height: 30vw;
    width: 25vw;
    border-width: 1px;
    border-color: black;
    border-style: solid;
    margin-bottom: 10vw;
}
</style>