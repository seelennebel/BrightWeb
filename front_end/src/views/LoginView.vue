<template>
    <main>
        <NavBar />
        <div id = main-container class = "flex-row">
            <div id = "shape" class = "flex-column">
                <div>
                    <h1>Login</h1>
                </div>
                <form class = "flex-column" method="post" enctype="multipart/form-data" @submit.prevent = "handle_submit">
                    <div class = "flex-column" id = "name-container">
                        <label for = "user_name">User name</label>
                        <input type = "text" placeholder = "enter your username" name = user_name id = "user_name" required v-model = "username_ref">
                    </div>
                    <div class = "flex-column" id = "password-container">
                        <label>Password</label>
                        <input type = "text" placeholder = "enter your password" name = user_password id = "user_password" required v-model = "password_ref">
                    </div>
                    <button type = "submit">SUBMIT</button>
                </form>
                <RouterLink to = "/signup">
                    <p>Dont have an account? Sign up!</p>
                </RouterLink>
            </div>
        </div>
    </main>
</template>

<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
import { useStore } from "vuex";
import NavBar from "../components/NavBar.vue";
import router from "@/router";

const store = useStore();

const username_ref = ref("");
const password_ref = ref("");
const handle_submit = async (event) => {
    try {
        let url = 'http://localhost:8000/api/login';
        let options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ "user_name" : username_ref.value, "user_password" : password_ref.value })
        };
        const user = await fetch(url, options);
        if(user.status === 200) {
            store.commit("change", true);
            router.push("/");
        }
    }
    catch(error) {
        console.log(error);
    };
};

</script>

<style scoped>

a:hover
{
    border-width: 1px;
    border-style: solid;
    border-color: black;
    color: black;
}

a
{
    text-decoration: none;
    color: black;
}

p
{
    font-size: 2vw;
    padding: 0.2em;
}

button
{
    font-size: 1.5vw;
    margin-top: 3em;
    margin-bottom: 1em;
}

h1
{
    font-size: 4vw;
}

input
{
    height: 3vw;
    width: 20vw;
    font-size: 1.5vw;
}

label
{
    font-size: 3vw;
}

#password-container
{
    justify-content: space-around;
    align-items: center;
    margin-top: 1em;
}

#name-container
{
    justify-content: space-around;
    align-items: center;
    margin-bottom: 3em;

}

#shape
{
    border-color: black;
    border-width: 1px;
    border-style: solid;
    height: 45vw;
    width: 50vw;
    margin-top: 2.1em;
    align-items: center;
}

#main-container
{
    justify-content: space-around;
}

</style>