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
                <p >PRODUCTS</p>
            </RouterLink>
        </div>
        <div class = "flex-element">
            <RouterLink to = "/cart">
                <p v-if = "count === 0">SHOPPING CART</p>
                <p v-else>SHOPPING CART {{ count }}</p>
            </RouterLink>
        </div>
        <div class = "flex-element" @click = "logout">
            <RouterLink v-if=" $store.state.account === true" to = '/' @click = "logout">
                <p>LOGOUT</p>
            </RouterLink>
            <RouterLink v-else to = "/login">
                <p>LOGIN</p>
            </RouterLink>
        </div>
    </div>
</template>

<script setup>
import { useStore } from "vuex";
import { RouterLink } from "vue-router";
import { computed } from "vue";

const store = useStore();

const count = computed(() => {
    return store.state.cart.length;
});

const logout = () => {
    let url = 'http://localhost:8000/api/logout';

    let options = {method: 'GET'};

    fetch(url, options)
        .then(res => res.json())
        .then(json => console.log(json))
        .catch(err => console.error('this:' + err));
    
    store.commit('change', false);
};

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
    color: white;
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