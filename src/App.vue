<template>
    <!-- todo router -->
    <!-- todo install bootstrap -->
    <GalaxyAnimation/>
    <Main/>
</template>

<script>
import {GalaxyAnimation, Main} from '@/components/main'

export default {
    name: 'App',
    components: {
        GalaxyAnimation,
        Main
    }
}
</script>

<style>
@import "@/styles/global.scss";
</style>
