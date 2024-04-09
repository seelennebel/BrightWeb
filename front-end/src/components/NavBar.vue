<script setup>

import { RouterLink } from "vue-router";

</script>

<template>
    <div id = nav-container class = "flex-row">
        <div id = "logo" class = "flex-element">
            <RouterLink to = "/">BRIGHT WEB</RouterLink>
        </div>
        <div class = "flex-element">
            <RouterLink to = "/about">ABOUT</RouterLink>
        </div>
        <div class = "flex-element">
            <RouterLink to = "/products">PRODUCTS</RouterLink>
        </div>
        <div class = "flex-element">
            SHOPPING CART
        </div>
        <div class = "flex-element">
            ACCOUNT
        </div>
    </div>
</template>

<style scoped>

.flex-row
{
    justify-content: space-around;
    align-items: center;
}

.flex-element
{
    font-size: 1.5vw;
}

#logo
{
    font-family: "Playfair Display SC", serif;
    font-weight: 700;
    font-style: normal;
}

#nav-container
{
    font-family: "Playfair Display SC", serif;
    font-weight: 400;
    font-style: normal;
    padding-bottom: 1em;
    padding-top: 1em;
    border-top: 0;
    border-left: 0;
    border-right: 0;
    border-color: black;
    border-style: solid;
}

</style>