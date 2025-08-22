<script setup>
import { ref, onMounted } from "vue";
import api from "./lib/axios";

const result = ref("loading...");

onMounted(async () => {
  try {
    const { data } = await api.get("/test");
    result.value = JSON.stringify(data);
  } catch (e) {
    result.value = "error: " + (e?.message || e);
  }
});
</script>

<template>
  <h1 class="title">Vue ↔ Laravel 接続テスト</h1>
  <pre>{{ result }}</pre>
</template>

<style>
.title {
  font-family: system-ui, sans-serif;
}
pre {
  background: #f6f6f6;
  padding: 8px;
}
</style>
