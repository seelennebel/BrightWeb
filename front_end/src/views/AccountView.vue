<template>

<main>
    <NavBar />
    <div id = "global-container" class = "flex-column">
        <h1>Your account</h1>
        <
    </div>
</main>

</template>

<script setup>
import NavBar from '@/components/NavBar.vue';
import router from '@/router';


import { onBeforeMount } from 'vue';

onBeforeMount( async () => {
        try {
           let url = 'http://localhost:8000/api/check_user';

            let options = {method: 'GET', headers: { "Content-Type" : "application/json" }};

            const res = await fetch(url, options); 

            if(res.status === 200) {
                router.push("/account");
                try {
                    let url = "http://localhost:8000/api/check_user";

                    let options = {
                        method: "POST",
                        headers: { "Content-Type" : "application/json" },
                        body: JSON.stringify({"id" : id})
                    };
                    const user = await fetch(url, options);
                }
            }
            else {
                window.prompt("Please, log in first");
                router.push("/login");
            }
        }
        catch (error) {
            console.log(error);
        };
});

</script>

<style scoped>

#global-container
{
    
}

</style>