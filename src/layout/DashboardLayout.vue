<template>
  <div class="flex h-screen bg-gray-200 font-roboto">
    <TheSidebar />

    <div class="flex-1 flex flex-col overflow-hidden">
      <TheHeader />

      <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
        <div class="mx-auto px-6 py-2">
          <router-view></router-view>
        </div>
      </main>
    </div>
  </div>
</template>
<script setup>
import TheSidebar from "./TheSidebar.vue"
import TheHeader from "./TheHeader.vue"
</script>
<style scoped></style>
