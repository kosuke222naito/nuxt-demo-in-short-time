<script setup lang="ts">
import type { User } from "@/models/user";

const { data: users } = useFetch<User[]>(
  "https://jsonplaceholder.typicode.com/users"
);

const formattedUsers = ref<string>("");

watchEffect(() => {
  if (users.value) {
    formattedUsers.value = JSON.stringify(users.value, null, 2);
  }
})

</script>


<template>
  <div>
    <pre>{{ formattedUsers }}</pre>
  </div>
</template>
