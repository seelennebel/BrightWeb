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
        <p>
            We are ready to provide our users with "the other tip of iceberg" experience without doing
            illegal activities
        </p>
    </div>
    
</main>

</template>

<style scoped>

main
{
    background-image: url("../assets/images/iceberg.jpg");
    height: 100vh;
    width:100%;
    background-repeat: no-repeat;
   
    background-size: cover;
}

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