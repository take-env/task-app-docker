<template>
  <h1>テスト</h1>
  {{ counter }}
</template>

<script setup>
import { ref, onMounted } from "vue";
const counter = ref(0);
onMounted(() => {
  setInterval(() => {
    counter.value++;
  }, 1000);
});
</script>
