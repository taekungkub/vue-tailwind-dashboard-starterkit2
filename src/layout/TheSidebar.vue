<template>
  <div :class="isOpen ? 'block' : 'hidden'" @click="isOpen = false" class="fixed inset-0 z-20 transition-opacity bg-black opacity-50 lg:hidden"></div>

  <div class="sidebar" :class="isOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'">
    <div class="inner-sidebar">
      <ul class="menu-list">
        <router-link class="menu-item" :class="[$route.name === 'Dashboard' ? activeClass : '']" to="/">
          <span class="mx-4">Dashboard</span>
        </router-link>

        <router-link class="menu-item" :class="[$route.name === 'Cards' ? activeClass : '']" to="/cards">
          <span class="mx-4">Cards</span>
        </router-link>

        <router-link class="menu-item" :class="[$route.name === 'Login' ? activeClass : '']" to="/login">
          <span class="mx-4">Login</span>
        </router-link>

        <router-link class="menu-item" :class="[$route.name === 'Charts' ? activeClass : '']" to="/charts">
          <span class="mx-4">Charts</span>
        </router-link>
      </ul>
    </div>
  </div>
</template>
<script>
import useSidebar from "../hooks/useSidebar"
import { ref } from "vue"
export default {
  setup() {
    const { isOpen } = useSidebar()

    const activeClass = ref("active")

    return {
      isOpen,
      activeClass,
    }
  },
}
</script>

<style scoped>
.sidebar {
  z-index: 4;
  left: 0;
  top: 0;
  width: 288px;
  height: 100vh;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 16px 0 16px 16px;
  @apply fixed inset-y-0 left-0 z-30  overflow-y-auto transition duration-300 transform  lg:translate-x-0 lg:static lg:inset-0;
}

.sidebar .inner-sidebar {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-shadow: 0 10px 15px -3px rgb(0 0 0 / 10%), 0 4px 6px -2px rgb(0 0 0 / 5%);
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 10%), 0 4px 6px -2px rgb(0 0 0 / 5%);
  border-radius: 32px;
  height: 100%;
  padding: 16px 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  @apply bg-gray-900 text-white;
}

.menu-list {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  padding: 0;
  overflow: auto;
  margin-top: 4px;
  padding: 0 16px;
}

.menu-item {
  margin: 4px 0;
  border-radius: 8px;
  padding: 10px 10px;
  @apply flex transform transition duration-200 text-base font-bold cursor-pointer text-center text-gray-500;
}

.menu-item:hover {
  @apply bg-gray-600 bg-opacity-25 text-gray-100 border-gray-100;
}

.menu-item.active {
  @apply bg-gray-600 bg-opacity-25 text-gray-100 border-gray-100;
}

li {
  list-style: none;
}
</style>
