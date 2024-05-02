<template>
    <main>
        <NavBar />
        <div id = "global-container" class = "flex-column">
            <h1>YOUR CHECKOUT AMOUNT</h1>
            <h2> {{ store.state.cart_price }} EUR</h2>
            <div id = "paypal-container"></div>
        </div>
    </main>
</template>

<script setup>
import NavBar from '@/components/NavBar.vue';
import router from '@/router';

import { ref, onMounted } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const loaded = ref(false);

onMounted(() => {
    const script = document.createElement('script');
    script.src = "https://www.paypal.com/sdk/js?currency=EUR&client-id=AbJQsjrCbJZn57JbK5KY0oFgI5cfnbPtLb_gfDjoHXY_xJ7S3WC64_weUGKI7355rpOoHtHUvQMkKyia";
    script.addEventListener("load", setLoaded);
    document.body.appendChild(script);
});

const update_orders = async () => {
    try {
        const url = "http://localhost:8000/api/modify_orders";
        const options = {
            method: "POST",
            body: JSON.stringify({new_orders: store.state.cart}),
            headers: {"Content-Type" : "application/json"}
        };
        fetch(url, options)
        .then(res => console.log(res));
    }
    catch(errors) {
        console.log(errors);
    }
};

function setLoaded() {
    loaded.value = true;
    window.paypal
        .Buttons({
            createOrder: (data, actions) => {
                return actions.order.create({
                    purchase_units: [
                        {
                            description: "This is your purchase",
                            amount: {
                                currency_code: "EUR", 
                                value: store.state.cart_price
                            }
                        }
                    ]
                });
            },
            onApprove: (data, actions) => {
                update_orders();
                store.state.cart.length = 0;
                setTimeout(() => {
                    router.push("/account");
                },3000);
            }
        })
        .render(document.querySelector('#paypal-container'));
}
</script>

<style scoped>

h2
{
    width: fit-content;
}

h1
{
    width: fit-content;
}

#global-container
{
    justify-content: space-around;
    align-items: center;
}

#paypal-container
{
    width: 50vw
}

</style>
