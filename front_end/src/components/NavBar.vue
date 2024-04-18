

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
            <RouterLink to = "login">
                <p>{{ account }}</p>
            </RouterLink>
        </div>
    </div>
</template>

<script setup>

import { RouterLink, useRoute } from "vue-router";
import { onMounted, ref } from "vue";

const account = ref("LOGIN");


let path = window.location.pathname;

const handle_mount = async () => {
    try {
        const url = "http://localhost:8000/api/check_user";
        let options = {
            method: "GET",
            headers: {
                'Content-Type': 'text/html',
            },
            credentials: "include"
        };
        const user = await fetch(url, options);
        const req = await user.json();
        if(req.decodedToken) {
            account.value = "LOGOUT";
        }
        else
        {
            account.value = "LOGIN";
        }
    }
    catch(error) {
        console.log(error);
    };
};

onMounted(() => {
    if(path === "/") {
        handle_mount();
    }
});

</script>

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