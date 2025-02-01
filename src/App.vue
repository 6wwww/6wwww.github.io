<template>
  <!-- todo install bootstrap -->
  <!-- todo router -->
  <Header />
  <GalaxyAnimation />
  <Main />
</template>

<script>
import Header from '@/components/common';
import { GalaxyAnimation, Main } from '@/components/main';

export default {
  name: 'App',
  components: {
    GalaxyAnimation,
    Header,
    Main,
  },
};
</script>

<style>
@import "@/styles/global.scss";
</style>
