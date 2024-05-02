<template>

<main>
    <NavBar />
    <h1 v-if = "loading">loading</h1>
    <div v-if = "user" id = "global-container">
        <div id = "header" class = "flex-row">
            <h1 class = "nick-name">USER ACCOUNT: {{ user[0].user_name }}</h1>
            <button type = "button" @click = "logout">LOGOUT</button>
        </div>
        <h1 class = "nick-name">ORDER HISTORY</h1>
        <div id = "prod-container" class = "flex-row">
            <AccountProduct :products = "prods" :user = "user" />
        </div>
    </div>
</main>

</template>

<script setup>
import NavBar from '@/components/NavBar.vue';
import AccountProduct from '@/components/AccountProduct.vue';
import router from '@/router';

import { onBeforeMount, ref, watch } from 'vue';
import { useStore } from 'vuex';

const loading = ref(false);
const user = ref(null);

const store = useStore();

const prods = ref([]);

const logout = () => {
    let url = 'http://localhost:8000/api/logout';

    let options = {method: 'GET'};

    fetch(url, options)
        .then(res => res.json())
        .then(json => console.log(json))
        .catch(err => console.error('this:' + err));
    
    store.commit('change', false);
    router.push("/");
};

const fetchUser = async () => {
        loading.value = true;

        try {
           let url = 'http://localhost:8000/api/check_user';

            let options = {method: 'GET', headers: { "Content-Type" : "application/json" }};

            fetch(url, options)
            .then(res => {
                if(res.status === 200) {
                    router.push("/account");
                }
                else {
                window.prompt("Please, log in first");
                router.push("/login");
                }
                return res.json();
            })
            .then(usr => {
                user.value = usr;
                console.log(usr);
                return usr;
            })
            .then(async result => {
                console.log(result);
                let responses = await Promise.all(result[0].orders.map(async product => {
			        const response = await fetch(`http://localhost:8000/api/product/${product.id}`);
			        return response.json()
		        }));
                return responses;
            })
            .then(result => {
                prods.value = result;
                console.log(prods.value);
            });
        }
        catch (error) {
            console.log(error);
        }
        finally {
            loading.value = false;
        };
};

onBeforeMount(() => {
    fetchUser();
});


</script>

<style scoped>

h1
{
    margin-top: 2vw;
    margin-left: 2vw;
}

button
{
    height: 3vw;
    margin-left: 2vw;
    font-size: 2.5vw;
    margin-top: 2vw;
}

#prod-container
{
    justify-content: space-around;
    align-items: center;
}

.nick-name
{
    margin-left: 5vw;
}

#right
{
    width: 50vw;
    align-items: right;
    justify-content: space-around;
}

#left
{
    width: 50vw;
}

#global-container 
{
    width: 100vw;
    height: fit-content;
}


</style>