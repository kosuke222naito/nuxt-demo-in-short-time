<template>
  <div>
    <pre>{{ JSON.stringify(users, null, 2) }}</pre>
  </div>
</template>

<script setup lang="ts">
import type { User } from "~/models/user";

const { data: users } = useFetch<User[]>(
  "https://jsonplaceholder.typicode.com/users"
);
</script>
