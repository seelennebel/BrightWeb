

<template>

<main>
    <NavBar />
    <div id = "main-container" class = "flex-column">
        <Logo />
        <div class = "flex-element" id = "top-text">
            <h1>a platform where brands can sell mystery boxes</h1>
        </div>
        <div class = "flex-element" id = "bottom-text">
            <h1>
                just like on the dark web
            </h1>
        </div>
    </div>
</main>

</template>

<script setup>

import NavBar from "../components/NavBar.vue";
import Logo from "../components/Logo.vue";


</script>

<style scoped>

#top-text h1
{
    font-size: 3vw;
}

#bottom-text h1
{
    font-size: 2.5vw;
}

#top-text
{
    margin-top: 1.5vw;
}

#bottom-text
{
    margin-top: 7vw;
    color: white;
}

main
{
    background-image: url("../assets/images/iceberg.jpg");
    height: 100vh;
    width:100%;
    background-repeat: no-repeat;
   
    background-size: cover;
}

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
    font-weight: 700;
    font-style: normal;
    font-size: 1.7vw;
}

#main-container
{
    margin-top: 5em;
}

</style>

