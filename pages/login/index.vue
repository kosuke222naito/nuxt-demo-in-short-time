<script setup lang="ts">
import {
  NButton,
  NForm,
  NFormItem,
  NInput,
} from "naive-ui";

import type { FormInst, FormRules, } from "naive-ui";

definePageMeta({
  layout: "static",
});

interface FormValue {
  id: string;
  password: string;
}
const emptyFormValue: FormValue = {
  id: "",
  password: "",
};

const formValue = ref<FormValue>(emptyFormValue);
const formRef = ref<FormInst>();

const rules: FormRules = {
  id: {
    required: true,
    message: "IDを入力してください",
  },
  password: {
    required: true,
    message: "パスワードを入力してください",
  },
};
</script>

<template>
  <NForm ref="formRef" :rules="rules" :model="formValue">
    <div class="flex flex-col gap-[24px]">
      <NFormItem label="ID" path="id">
        <NInput v-model:value="formValue.id" />
      </NFormItem>
      <NFormItem label="パスワード" path="password">
        <NInput v-model:value="formValue.password" :type="'password'" />
      </NFormItem>
      <NButton :attr-type="'submit'">
        <span class="text-[14px]">ログイン</span>
      </NButton>
    </div>
  </NForm>
</template>
