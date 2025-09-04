<script setup>
import api from "../lib/axios";
import { ref, onMounted } from "vue";

const tasks = ref([]);
const loading = ref(false);
const error = ref(null);

onMounted(async () => {
  loading.value = true;
  try {
    const res = await api.get("/tasks");
    tasks.value = res.data;
  } catch (e) {
    error.value = e;
  } finally {
    loading.value = false;
  }
});
</script>

<template>
  <div>
    <h1>タスク一覧</h1>
    <ul>
      <li v-for="task in tasks" :key="task.id">
        {{ task.title }} - {{ task.person_in_charge }}
      </li>
    </ul>
  </div>
</template>
