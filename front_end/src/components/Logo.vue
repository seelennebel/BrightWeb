<template>
        <div class = "flex-row">
            <div id = "container">
                <h1>BR</h1>
                <img src = "../assets/png/lamp.jpg">
                <h1>GHT WEB</h1>
            </div>
        </div>
</template>

<style scoped>

#container
{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}

.flex-row
{
    align-items: center;
}

img
{
    width: 5%;
    height: 1%;
}

h1
{
    font-family: "Playfair Display SC", serif;
    font-weight: 700;
    font-style: normal;
    font-size: 6vw;
}

</style>