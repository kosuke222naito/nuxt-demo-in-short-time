<script setup lang="ts">
import type { User } from "@/models/user";
import { NDataTable, type DataTableColumns } from "naive-ui";

const { data: users } = useFetch<User[]>(
  "https://jsonplaceholder.typicode.com/users"
);

const formattedUsers = ref<string>("");

const columns = computed<DataTableColumns<User>>(() => [
  {
    key: "id",
    title: "ID",
    render: row => row.id,
  },
  {
    key: "name",
    title: "Name",
    render: row => row.name,
  },
  {
    key: "email",
    title: "Email",
    render: row => row.email,
  },
  {
    key: "website",
    title: "WebSite",
    render: row => row.website,
  }
]);

</script>


<template>
  <div>
    <NDataTable v-if="users" remote :data="users" :columns="columns" />
  </div>
</template>
