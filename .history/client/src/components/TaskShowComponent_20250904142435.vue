<template>
  <div class="form-group row border-bottom">
    <label for="id" class="col-sm-3 col-form-label">ID</label>
    <input
      type="text"
      class="col-sm-9 form-control-plaintext"
      readonly
      id="id"
      v-model="task.id"
    />
  </div>

  <div class="form-group row border-bottom">
    <label for="title" class="col-sm-3 col-form-label">Title</label>
    <input
      type="text"
      class="col-sm-9 form-control-plaintext"
      readonly
      id="title"
      v-model="task.title"
    />
  </div>

  <div class="form-group row border-bottom">
    <label for="content" class="col-sm-3 col-form-label">Content</label>
    <input
      type="text"
      class="col-sm-9 form-control-plaintext"
      readonly
      id="content"
      v-model="task.content"
    />
  </div>

  <div class="form-group row border-bottom">
    <label for="person-in-charge" class="col-sm-3 col-form-label"
      >Person In Charge</label
    >
    <input
      type="text"
      class="col-sm-9 form-control-plaintext"
      readonly
      id="person-in-charge"
      v-model="task.person_in_charge"
    />
  </div>
</template>

<script setup>
import api from "../lib/axios.js";
import { ref, onMounted } from "vue";

props: (route) => ({ taskId: route.params.id });

const props = defineProps({
  taskIdd: { type: String, required: true },
});

const task = ref({ id: "", title: "", content: "", person_in_charge: "" });

const getTask = async () => {
  const id = props.taskId;
  const { data } = await api.get(`/tasks/${id}`);
  task.value = data;
};
onMounted(() => {
  getTask();
});
</script>
