<template>
    <main>
        <NavBar />
        <div id = main-container class = "flex-row">
            <div id = "shape" class = "flex-column">
                <div>
                    <h1>SIGNUP</h1>
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
            </div>
        </div>
    </main>
</template>

<script setup>
import { ref } from "vue";
import NavBar from "../components/NavBar.vue";
import router from "../router"

const username_ref = ref("");
const password_ref = ref("");

const handle_submit = async (event) => {
    try {
        let url = 'http://localhost:8000/api/signup';
        let options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ "user_name" : username_ref.value, "user_password" : password_ref.value })
        };
        const user = await fetch(url, options);
        const res = await user.json();
        router.push("/");
        console.log(res);
    }
    catch(error) {
        console.log(error);
    };
};

</script>


<style scoped>

button
{
    font-size: 2.5vw;
    margin-top: 3em;
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

form
{

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
    margin-bottom: 5em;

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