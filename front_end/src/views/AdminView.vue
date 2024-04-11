<template>
<main>
    <h1>ADD PRODUCT</h1>
    <div id = "container" class = "flex-row">
        <form action="/api/upload" method="post" enctype="multipart/form-data" class = "flex-column">
            <input type = "text" placeholder="enter name" name = "name">
            <input type = "text" placeholder="enter brand" name = brand>
            <input type = "text" placeholder="enter price" name = price>
            <label for = "file">Upload the brand photo</label>
            <input type = "file" alt="Submit" id = "file" name = file>
            <button type = "submit" >SUBMIT</button>
        </form>
    </div>
    
</main>
</template>

<script setup>

</script>

<style scoped>

button
{
    padding: 1vw;
    font-size: 2vw;
}

label
{
    margin-left: 2vw;
    padding: 1vw;
    font-size: 2.5vw;
}

input
{
    margin: 2vw;
    padding: 1vw;
    font-size: 2vw;
}

#container
{
    justify-content: space-around;
}

h1
{
    text-align: center;
}
</style>