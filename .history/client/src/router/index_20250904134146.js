// client/src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import TaskListComponent from "../components/TaskListComponent.vue";
import TaskDetailComponent from "../components/TaskDetailComponent.vue";
import TaskCreateComponent from "../components/TaskCreateComponent.vue";
import TaskEditComponent from "../components/TaskEditComponent.vue";

const routes = [
  { path: "/tasks", name: "task.list", component: TaskListComponent },
  {
    path: "/tasks/create",
    name: "task.create",
    component: TaskCreateComponent,
    props: true,
  },
  { path: "/tasks/:id", name: "task.detail", component: TaskDetailComponent },
  { path: "/tasks/:id/edit", name: "task.edit", component: TaskEditComponent },
  { path: "/", redirect: "/tasks" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
