<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script setup>
// // This starter template is using Vue 3 <script setup> SFCs
// // Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup

import { computed } from "vue";
import { useRouter } from "vue-router";
const defaultLayout = "default";
const { currentRoute } = useRouter();
const layout = computed(() => `${currentRoute.value.meta.layout || defaultLayout}-layout`);
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.container {
  max-width: 700px;
  margin: 0 auto;
}
</style>
