<template>
    <main>
        <NavBar />
        <div id = "search-container" class = "flex-row">
            <div>
                <p>PRODUCTS</p>
            </div>
            <input type = "text" name = "name" id = "search-bar-container" v-model = "searchQuery" placeholder="enter product">
        </div>
        <div id = "main-container" class = "flex-row">
            <div id = "products-container" class = "flex-row">
                <Product :products = "prods" :query="searchQuery" />
            </div>

        </div>
    </main>
</template>

<script setup>

import NavBar from '@/components/NavBar.vue';
import Product from '@/components/Product.vue';
import { onMounted } from 'vue';
import { ref } from 'vue';

const prods = ref([]);
const searchQuery = ref("");

onMounted(async () => {
    try {
        let url = 'http://localhost:8000/api/products';

        let options = {method: 'GET', headers: {'Content-Type': 'application/json'}};

        const res = await fetch(url, options);
        const json = await res.json();
        prods.value = json;
        console.log(json)
    }
    catch (error) {
        console.log(error);
    };
});

</script>

<style scoped>

p
{
    font-size: 3vw;
    margin-left: 0.1em;
    padding: 1vw;
    
}

input
{
    text-align: center;
}

input:focus
{
    outline: none;
}

#search-bar-container
{
    border-width: 1px;
    border-color: black;
    border-style: solid;
    width: 20vw;
    height: 3.5vw;
    margin-left: 43vw;
    font-size: 2vw;
    font-family: "Playfair Display SC", serif;
    font-weight: 400;
    font-style: normal;
}

#search-container
{
    justify-content: space-around;
    align-items: center;
    height: 10vw;
}

#products-container
{
    height: fit-content;
    width: 70em;
    border-width: 1px;
    border-color: white;
    border-style: solid;
    width: 90%;
    justify-content: space-around;
}

#main-container
{
    border-width: 1px;
    border-color: black;
    border-style: solid;
    border-top: 0;
    justify-content: space-around;
    width: 100%;
    margin-top: 3vw;
}

</style>