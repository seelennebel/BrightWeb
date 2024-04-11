<script setup>

import { RouterLink } from "vue-router";

</script>

<template>
    <div id = nav-container class = "flex-row">
        <div id = "logo" class = "flex-element">
            <RouterLink to = "/">
                <p>BRIGHT WEB</p>
            </RouterLink>
        </div>
        <div class = "flex-element">
            <RouterLink to = "/about">
                <p>ABOUT</p>
            </RouterLink>
        </div>
        <div class = "flex-element">
            <RouterLink to = "/products">
                <p>PRODUCTS</p>
            </RouterLink>
        </div>
        <div class = "flex-element">
            <RouterLink to = "cart">
                <p>SHOPPING CART</p>
            </RouterLink>
        </div>
        <div class = "flex-element">
            <RouterLink to = "account">
                <p>ACCOUNT</p>
            </RouterLink>
        </div>
    </div>
</template>

<style scoped>
p:hover
{
    color: black;
    background-color: white;
    margin: 0;
    padding: 1em;
}
a
{
    text-decoration: none;
    color: white;
}

.flex-row
{
    justify-content: space-around;
    align-items: center;
}

.flex-element
{
    font-size: 1.5vw;
    display: block;
    height: fit-content;
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
    background-color: black;
}

</style>