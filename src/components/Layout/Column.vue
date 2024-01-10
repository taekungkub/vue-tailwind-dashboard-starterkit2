<template>
  <div class="flex flex-col items-start">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    justify: {
      type: String,
    },
  },
};
</script>

<style scoped></style>
