<template>
    <div id = "container" v-for = "product in products" :key = product._id>
        <div id = "image">
            <img :src = "'http://localhost:8000/api/image/' + product.file">
        </div>
        <p id = "desc">{{ product.brand }} - {{ product.name }}</p>
    </div>
</template>

<script setup>

const props = defineProps({
    products: Array
});


</script>

<style scoped>
img
{
    width: 25vw;
    height: 20vw;
}

p
{
    text-align: center;
}

#desc
{
    font-size: 2vw;
    margin: 0;
    padding: 1vw;
}

#image
{
    height: 20vw;
    font-size: 4vw;
    text-align: center;
}

#container
{
    height: 25vw;
    width: 25vw;
    border-width: 1px;
    border-color: black;
    border-style: solid;
    margin-bottom: 10vw;
}
</style>