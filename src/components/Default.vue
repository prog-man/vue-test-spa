<template>
    <div>

        <hello></hello>

        <p>
            Welcome to your Vue.js app!
        </p>

        <img class="logo" src="../assets/logo.png">

    </div>
</template>

<script>
import Hello from './Hello'

export default {
    components: {
        Hello
    }
}
</script>

<style>

.logo {
    width: 100px;
    height: 100px;
}

</style>