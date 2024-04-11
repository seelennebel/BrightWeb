<script setup>

import NavBar from "../components/NavBar.vue";
import Logo from "../components/Logo.vue";

</script>

<template>

<main>
    <NavBar />
    <div id = "main-container" class = "flex-column">
        <Logo />
        <div class = "flex-element">
            <h1>a platform where brands can sell mystery boxes, just like in the dark web</h1>
        </div>
    </div>
</main>

</template>

<style scoped>

img
{
    width: 20%;
    
}

.flex-column
{
    justify-content: space-around;
    align-items: center;
}

h1
{
    font-family: "Playfair Display SC", serif;
    font-weight: 400;
    font-style: normal;
    font-size: 1.7vw;
}

#main-container
{
    margin-top: 7em;
}

</style>

