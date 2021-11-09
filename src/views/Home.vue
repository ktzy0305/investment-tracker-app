<template>
    <div class="home">
        <img alt="Vue logo" src="@/assets/logos/vue_logo.png">
        <HelloWorld/>
        <h1>Home</h1>
        <p>This is the Home component.</p>
    </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
    components: {
        HelloWorld
    }
}
</script>

<style>
.home{
    text-align: center;
    margin-top: 30px;
}
</style>