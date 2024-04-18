<template>
    <main>
        <NavBar />
        <div id = "main_container" class = "flex-row">
            <div id = "content-container" class = "flex-row">
                <img src = "../../../back_end/src/uploads/unnamed.jpg">
                <div id = "right" class = "flex-column">
                    <h1>Brand</h1>
                    <h2>Name</h2>
                    <h2>Description:</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Nostrum voluptatum est dolor, cupiditate expedita odio. 
                        Labore earum rerum, debitis ipsam aperiam minima corrupti unde numquam temporibus provident. 
                        Aut, voluptate aperiam!</p>
                    <button>ADD TO SHOPPING CART</button>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup>

import NavBar from '@/components/NavBar.vue';

</script>

<style scoped>

button:hover
{
    background-color: black;
    color: white;
}

button
{
    width: 10vw;
    margin-top: 1vw;
    padding-top: 0.5vw;
    padding-bottom: 0.5vw;
    background-color: white;
    border-width: 1px;
}

#right
{
    margin-left: 3vw;
    max-width: 30vw;
}

img
{
    height: 30vw;
    width: 50vw;
}

#content-container
{
    border-color: black;
    border-width: 1px;
    border-style: solid;
    width: 90vw;
    height: fit-content;

}

#main_container
{
    margin-top: 6vw;
    width: 100%;
    height: 90vh;
    justify-content: center;
}

</style>
