

<template>
  <main>
    <RouterView />
  </main>

</template>

<script setup>

import { RouterView } from "vue-router";
import { onBeforeMount } from "vue";
import { useStore } from "vuex";

const store = useStore();

onBeforeMount( async () => {
        try {
           let url = 'http://localhost:8000/api/check_user';

            let options = {method: 'GET', headers: { "Content-Type" : "application/json" }};

            const res = await fetch(url, options); 

            if(res.status === 200) {
                store.commit('change', true);
            }
        }
        catch (error) {
            console.log(error);
        };
});

</script>