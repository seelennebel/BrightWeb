<template>
    <div id = "container" v-for = "product in filteredProducts" :key = product._id>
        <div id = "image">
            <img :src = "'http://localhost:8000/api/image/' + product.file">
        </div>
        <p class = "desc"> {{ product.brand }} </p>
        <p class = "desc"> {{ product.name }} </p>
    </div>
</template>

<script setup>
import { defineProps, computed } from "vue";

const props = defineProps({
    products: Array,
    query: String
});

const data = [
	{
		"_id": "661758274e0549497e65cea1",
		"name": "dfasfasdf",
		"brand": "asdfasdf",
		"price": "sdfasdfasd",
		"file": "second.png",
		"__v": 0
	},
	{
		"_id": "6617583fb6fa492bea4892c2",
		"name": "dfasfasdf",
		"brand": "asdfasdf",
		"price": "sdfasdfasd",
		"file": "second.png",
		"__v": 0
	},
	{
		"_id": "66175c00b6fa492bea4892e5",
		"name": "pes patron",
		"brand": "UKRAINE",
		"price": "10000000",
		"file": "Patron_in_Ohmatdyt,_28_April_2022_(04).jpg",
		"__v": 0
	},
	{
		"_id": "66175c1db6fa492bea4892e7",
		"name": "AK-47",
		"brand": "DONBASS",
		"price": "nihuya",
		"file": "hq2.jpg",
		"__v": 0
	},
	{
		"_id": "66175c21b6fa492bea4892e9",
		"name": "AK-47",
		"brand": "DONBASS",
		"price": "nihuya",
		"file": "hq2.jpg",
		"__v": 0
	},
	{
		"_id": "66175c28b6fa492bea4892eb",
		"name": "AK-47",
		"brand": "DONBASS",
		"price": "nihuya",
		"file": "hq2.jpg",
		"__v": 0
	}
];


const filteredProducts = computed(() => {
    const query = props.query.toLowerCase();
    return props.products.filter(product => {
        return product.name.toLowerCase().includes(query);
    });
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