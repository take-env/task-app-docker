<template>
  <div class="container">
    <h2>タスク詳細</h2>
    <p>ID: {{ $route.params.id }}</p>
  </div>
</template>

<script>
export default {
  name: "TaskDetailComponent",
};
</script>
