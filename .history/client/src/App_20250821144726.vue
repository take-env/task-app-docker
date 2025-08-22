<template>
  <header style="padding: 16px; border-bottom: 1px solid #eee">
    <h1>タスク管理</h1>
    <nav style="margin-top: 8px">
      <router-link to="/tasks">一覧</router-link>
      <span style="margin: 0 8px">|</span>
      <router-link to="/tasks/create">作成</router-link>
    </nav>
  </header>
  <main style="padding: 16px">
    <!-- ここに各ページが差し込まれる -->
    <router-view />
  </main>
</template>

<script>
export default {};
</script>
