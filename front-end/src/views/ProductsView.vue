<template>
    <main>
        <NavBar />
        <div id = "search-container" class = "flex-row">
            <div id = "search-bar-container">

            </div>
        </div>
        <div id = "main-container" class = "flex-row">

            <div id = "products-container">

            </div>

        </div>
    </main>
</template>

<script setup>

import NavBar from '@/components/NavBar.vue';

</script>

<style scoped>

#search-bar-container
{
    border-width: 1px;
    border-color: black;
    border-style: solid;
    width: 30em;
    height: 5em;
    margin-right: 7em;
}

#search-container
{
    justify-content: right;
    align-items: center;
    height: 10em;
}

#products-container
{
    height: 70em;
    width: 70em;
    border-width: 1px;
    border-color: black;
    border-style: solid;
    width: 90%;
}

#main-container
{
    border-width: 1px;
    border-color: black;
    border-style: solid;
    border-top: 0;
    justify-content: space-around;
    width: 100%;
}

</style>