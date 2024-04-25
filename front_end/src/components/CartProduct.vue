<template>
    <div id = "container" v-for = "product in fin.value" :key = product._id>
			<div id = "image">
				<img v-if = "product.file != undefined" :src = "'http://localhost:8000/api/image/' + product.file">
				<div v-else></div>
			</div>
			<div id = lower-container class = "flex-row">
				<div id = "name" class = "flex-column">
					<p class = "desc">BRAND: {{ product.brand }} </p>
					<p class = "desc"> {{ product.name }} </p>
				</div>
				<div id = "price" class = "flex-column">
					<p>PRICE</p>
					<p> {{ product.price }} EUR</p>
				</div>
			</div>
    </div>
</template>

<script setup>
import { useStore } from "vuex";
import { onBeforeMount, defineProps, ref , onMounted} from "vue";

const store = useStore();

const str = [];

for(let i = 0; i < store.state.cart.length; ++i) {
	str.push(store.state.cart[i]);
}

const create = async () => {
	let displayed_products = [];
	const prods = await Promise.all(
        str.map(async (productID) => {
            const res = await fetch(`http://localhost:8000/api/product/${productID}`);
            const data = await res.json();
            return data;
        })
    );
	for(let i = 0; i < prods.length; ++i) {
		displayed_products.push(prods[i][0]);
	}

	return displayed_products;
};

const final = await create();

const final_list = ref(final);

let list = [];

for(let product of final_list.value) {
	let { brand, description, file, name, price, __v, _id } = product; 
	list.push( { brand, description, file, name, price, __v, _id } )
}

const fin = ref(list);

console.log(fin.value);

const anal = [
	{
		name: "anal"
	}
]

</script>