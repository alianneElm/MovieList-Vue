import { createRouter, createWebHistory } from "vue-router";
import Homepage from "../components/Homepage.vue";
import AddMovie from "../components/AddMovie.vue";
import MovieList from "../components/MovieList.vue";

const routes = [
  {
    path: "/",
    name: "Homepage",
    component: Homepage,
  },
  {
    path: "/add",
    name: "AddMovie",
    component: AddMovie,
  },
 
  {
    path: "/list",
    name: "MovieList",
    component: MovieList,
  },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
