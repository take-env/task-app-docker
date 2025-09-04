<template>
  <form v-on:submit.prevent="submit">
    <div class="form-group row">
      <label for="id" class="col-sm-3 col-form-label">ID</label>

      <input
        type="text"
        class="col-sm-9 form-control-plaintext"
        readonly
        id="id"
        v-model="task.id"
      />
    </div>
    <div class="form-group row">
      <label for="title" class="col-sm-3 col-form-label">Title</label>

      <input
        type="text"
        class="col-sm-9 form-control"
        id="title"
        v-model="task.title"
      />
    </div>
    <div class="form-group row">
      <label for="content" class="col-sm-3 col-form-label">Content</label>

      <input
        type="text"
        class="col-sm-9 form-control"
        id="content"
        v-model="task.content"
      />
    </div>
    <div class="form-group row">
      <label for="person-in-charge" class="col-sm-3 col-form-label"
        >Person In Charge</label
      >

      <input
        type="text"
        class="col-sm-9 form-control"
        id="person-in-charge"
        v-model="task.person_in_charge"
      />
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</template>

<script setup>
import api from "../lib/axios.js";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const props = defineProps({
  taskId: { type: String, required: true },
});
const task = ref({ id: "", title: "", content: "", person_in_charge: "" });
const getTask = async () => {
  const { data } = await api.get(`/tasks/${props.taskId}`);
  task.value = data;
};

onMounted(() => {
  getTask();
});
const submit = async () => {
  await api.put(`/tasks/${props.taskId}`, task.value);
  await router.push({ name: "task.list" });
};
</script>
