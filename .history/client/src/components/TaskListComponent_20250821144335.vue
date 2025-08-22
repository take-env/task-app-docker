<script>
import api from "../lib/axios"; // axios インスタンス

export default {
  name: "TaskListComponent",
  data() {
    return {
      tasks: [],
    };
  },
  mounted() {
    api.get("/tasks").then((res) => {
      this.tasks = res.data;
    });
  },
};
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
