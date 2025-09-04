// client/src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import TaskListComponent from "../components/TaskListComponent.vue";
import TaskShowComponent from "../components/TaskShowComponent.vue";
import TaskCreateComponent from "../components/TaskCreateComponent.vue";
import TaskEditComponent from "../components/TaskEditComponent.vue";

const routes = [
  { path: "/tasks", name: "task.list", component: TaskListComponent },
  {
    path: "/tasks/create",
    name: "task.create",
    component: TaskCreateComponent,
  },
  {
    path: "/tasks/:id",
    name: "task.show",
    component: TaskShowComponent,
    props: (route) => ({ taskId: route.params.id }),
  },
  {
    path: "/tasks/:id/edit",
    name: "task.edit",
    component: TaskEditComponent,
    props: (route) => ({ taskId: route.params.id }),
  },
  { path: "/", redirect: "/tasks" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
