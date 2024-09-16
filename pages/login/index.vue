<script setup lang="ts">
import {
  NButton,
  NForm,
  NFormItem,
  NInput,
} from "naive-ui";

definePageMeta({
  layout: "static",
});
</script>

<template>
  <NForm>
    <div class="flex flex-col gap-[24px]">
      <NFormItem label="ID" path="id">
        <NInput />
      </NFormItem>
      <NFormItem label="パスワード" path="password">
        <NInput :type="'password'" />
      </NFormItem>
      <NButton :attr-type="'submit'">
        <span class="text-[14px]">ログイン</span>
      </NButton>
    </div>
  </NForm>
</template>
