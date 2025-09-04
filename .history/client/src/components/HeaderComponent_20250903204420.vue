<template>
  <div class="container-fluid bg-dark mb-3">
    <div class="container">
      <nav class="navbar navbar-dark">
        <span class="navbar-brand mb-0 h1">Vue Laravel SPA</span>
        <div>
          <router-link to="/tasks" class="btn btn-success">List</router-link>
          <router-link to="/tasks/create" class="btn btn-success"
            >Add</router-link
          >
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderComponent",
};
</script>
