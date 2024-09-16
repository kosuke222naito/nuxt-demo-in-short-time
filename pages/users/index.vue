<script setup lang="ts">
import { NDataTable, type DataTableColumns } from "naive-ui";
import type { User } from "~/models/user";

const api = useApi();
const { data: users } = useAsyncData<User[]>(() => api("/users"));

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
    title: "Website",
    render: row => row.website,
  },
]);
</script>

<template>
  <div class="px-[40px] py-[32px] flex flex-col gap-[32px]">
    <div class="flex flex-row items-center justify-between">
      <span class="text-[24px] font-bold">Users</span>
      <NButton @click="$router.push('/users/new')">
        <span class="text-[14px]">新規登録</span>
      </NButton>
    </div>
    <NDataTable v-if="users" remote :data="users" :columns />
  </div>
</template>
