<template>
    <div v-for = "product of props.products" :key = product[0]._id id = "global-container" class = "flex-column">
        <div id = "image">
			<img :src = "'http://localhost:8000/api/image/' + product[0].file">
		</div>
        <h1>{{ product[0].name }}</h1>
        <h2>{{ product[0].brand }}</h2>
        <h3>PRICE: {{ product[0].price }}</h3>
        <h3>Quantity: {{ user[0].orders[props.products.indexOf(product)].quantity }}</h3>
    </div>
</template>

<script setup>

import { defineProps } from 'vue';

const props = defineProps({
    products: Array,
    user: Object
});

</script>

<style scoped>

#global-container
{
    border-width: 1px;
    border-color: black;
    border-style: solid;
    width: 25vw;
    height: fit-content;
    margin: 2em;
}

img
{
    width: 25vw;
    height: 25vw;
}

</style>