<script setup>

import NavBar from "../components/NavBar.vue";

</script>

<template>

<main>
    <NavBar />
    <h1>ABOUT US</h1>
    <div id = text class = "flex-row">
        <p>
            BRIGHT WEB is a platform where popular fashion brands create mystery boxes with unknown products.
            Our users will be able to order a package and receive a mystery gift from one of their favourite brands.
        </p>
    </div>
    
</main>

</template>

<style scoped>

#text
{
    justify-content: space-around;
}

p
{
    text-align: center;
    width: 90%;
    font-size: 2.5vw;
}

h1
{
    text-align: center;
    margin-top: 2em;
    font-family: "Playfair Display SC", serif;
    font-weight: 700;
    font-style: normal;
    font-size: 3vw;
}

</style>