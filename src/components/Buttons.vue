<template>
  <div>
    <br />
    <br />
    <button class="btn btn-primary">primary</button>
    <button class="btn btn-secondary">secondary</button>
    <button class="btn btn-success">success</button>
    <button class="btn btn-danger">danger</button>
    <button class="btn btn-warning">warning</button>
    <button class="btn btn-info">info</button>
    <button class="btn btn-light">light</button>
    <button class="btn btn-dark">dark</button>
    <button class="btn btn-link">Link</button>

    <br />

    <button class="btn btn-primary btn-outline">primary</button>
    <button class="btn btn-secondary btn-outline">secondary</button>
    <button class="btn btn-success btn-outline">success</button>
    <button class="btn btn-danger btn-outline">danger</button>
    <button class="btn btn-warning btn-outline">warning</button>
    <button class="btn btn-info btn-outline">info</button>
    <button class="btn btn-light btn-outline">light</button>
    <button class="btn btn-dark btn-outline">dark</button>

    <div class="container mt-12">
      <div class="flex justify-center"><DropdownButton /> <DropdownButton /></div>
    </div>

    <Flex>
      <button class="btn btn-warning btn-outline">warning</button>
      <button class="btn btn-dark btn-outline">dark</button> <button class="btn btn-dark btn-outline">dark</button>
      <button class="btn btn-dark btn-outline">dark</button>
    </Flex>

    <Column>
      <button class="btn btn-dark btn-outline">dark</button>
      <button class="btn btn-dark btn-outline">dark</button>
      <button class="btn btn-dark btn-outline">dark</button>
    </Column>

    <button class="btn btn-primary" @click="openModal()">Modal</button>

    <ModalWithConfirm ref="BaseModal" :loading="isLoading"></ModalWithConfirm>
  </div>
</template>
<script>
export default {};
</script>
<style scoped></style>
