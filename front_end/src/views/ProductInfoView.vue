<template>
    <main>
        <NavBar />
        <div id = "main_container" class = "flex-row">
            <div id = "content-container" class = "flex-row">
                <div id = "loader-image" v-if = "props.product.file == undefined"></div>
                <img v-else :src = "'http://localhost:8000/api/image/' + props.product.file">
                <div id = "right" class = "flex-column">
                    <div id = "upper-container" class = "flex-row">
                        <h1> {{ props.product.brand }} </h1>
                        <h1> PRICE: {{ props.product.price }} EUR</h1>
                    </div>
                    <div id = "cont" class = "flex-row">
                        <h2>{{ props.product.name }}</h2>
                        <button type = "button" @click = "handle_click">ADD TO SHOPPING CART</button>
                    </div>
                    <div id = "lower-container" class = "flex-row">
                        <h2>Description:</h2>
                        
                    </div>
                    <p> {{ props.product.description }} </p>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup>

import NavBar from '@/components/NavBar.vue';
import { onBeforeMount, defineProps } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from "vuex";
import router from "@/router/";

const store = useStore();

const rt = useRoute();

const productId = rt.params.productID

const fetchProduct = async () => {
    try {
        const url = `http://localhost:8000/api/product/${productId}`;
        const options = { method: "GET", headers: { "Content-Type" : "application/json" }};

        const res = await fetch(url, options);
        const json = await res.json();
        return json[0];
    }
    catch(error) {
    console.log(error);
    }
};

onBeforeMount(async () => {
    const product = await fetchProduct();
    props.product = product;
});

const props = defineProps({
    product: {
        type: Object,
        default: ""
    }
})

const handle_click = () => {
    if(store.state.cart.find((element) => element.id === props.product._id)) {
        store.commit('add_one_to_quantity', props.product._id)
    }
    else {
        store.commit("add_product", { id: props.product._id, quantity: 1, price: props.product.price });
    }
    router.push("/");
    console.log(store.state.cart);
};

</script>

<style scoped>

#loader-image
{
    height: 30vw;
    width: 30vw;
}

#cont
{
    justify-content: space-between;
    align-items: center;
}

p
{
    font-size: 2vw;
    margin: 0;
}

h2
{
    font-size: 3vw;
    margin-top: 0.2em;
    margin-bottom: 0;
}

h1
{
    font-size: 4vw;
    margin-top: 0.2em;
}

#lower-container
{
    justify-content: space-between;
    align-items: center;
    width: 100%;
}

#upper-container
{
    justify-content: space-between;
    align-items: center;
    width: 100%;
}

button:hover
{
    background-color: black;
    color: white;
}

button
{
    width: 15vw;
    height: 4vw;
    margin-top: 1vw;
    padding-top: 0.5vw;
    padding-bottom: 0.5vw;
    background-color: white;
    border-width: 1px;
    font-size: 1vw;
}

#right
{
    margin-left: 3vw;
    width: 55vw;
}

img
{
    height: 30vw;
    width: 30vw;
}

#content-container
{
    width: 90vw;
    height: fit-content;

}

#main_container
{
    margin-top: 8vw;
    width: 100%;
    height: 70vh;
    justify-content: center;
}

</style>
