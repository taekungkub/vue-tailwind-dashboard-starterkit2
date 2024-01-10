<template>
  <div class="flex items-center flex-wrap" :class="['gap-' + gap]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    gap: {
      type: Number,
      default: 2,
    },
  },
};
</script>

<style scoped></style>
