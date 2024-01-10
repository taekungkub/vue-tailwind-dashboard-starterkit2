<template>
  <PageHeader>Dashboard</PageHeader>

  <div class="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-4">
    <CardDashboard />
    <CardDashboard />
    <CardDashboard />
  </div>
  <Table :items="users" @handleActions="onActionsTable" />
</template>

<script setup>
import CardDashboard from "../components/Card/CardDashboard.vue";
import Table from "../components/Table.vue";

import { ref } from "vue";

const testUser = {
  name: "John Doe",
  email: "john@example.com",
  title: "Software Engineer",
  title2: "Web dev",
  status: "Active",
  role: "Owner",
};
const users = ref([...Array(10).keys()].map(() => testUser));

const onActionsTable = (item) => {
  console.log(item);
};
</script>
<style scoped></style>
