<template>
  <div class="relative">
    <button class="btn btn-primary flex items-center justify-between pr-3" @click.prevent="active = !active">
      Dropdown
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        class="w-5 h-5 text-white fill-current ml-2 transform transition duration-200"
        :class="{ 'rotate-180': active }"
      >
        <title>chevron-down</title>

        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M5.293 7.293a1 1 0 0 1 1.414 0L10 10.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414z"
        ></path>
      </svg>
    </button>

    <transition name="fade">
      <ul v-if="active" class="list-reset bg-white border p-2 rounded-b-lg shadow-xl absolute right-0 w-56 z-50">
        <li @click="selectItem()">
          <a href="#" class="px-3 py-2 hover:bg-gray-100 rounded block mb-1">Item 1</a>
        </li>
        <li>
          <a href="#" class="px-3 py-2 hover:bg-gray-100 rounded block mb-1">Item 2</a>
        </li>
        <li>
          <a href="#" class="px-3 py-2 hover:bg-gray-100 rounded block mb-1">Item 3</a>
        </li>
      </ul>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: false,
    };
  },
  mounted() {
    document.addEventListener("click", this.close);
  },
  beforeDestroy() {
    document.removeEventListener("click", this.close);
  },
  methods: {
    close(e) {
      if (!this.$el.contains(e.target)) {
        this.active = false;
      }
    },
    selectItem() {
      this.active = false;
    },
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: 0.2s ease-in;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scale(0.9);
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
  transform: scale(1);
}
</style>
