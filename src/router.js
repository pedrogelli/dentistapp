import Vue from "vue";
import Router from "vue-router";
import Consultas from "./views/Consultas.vue";
// APP
import AgendarConsulta from "./views/app/AgendarConsulta.vue";
import Login from "./views/app/Login.vue";
import Perfil from "./views/app/Perfil.vue";
// ADMIN
import AdminConsultas from "./views/admin/AdminConsultas.vue";
import Dentistas from "./views/admin/Dentistas.vue";
import AddDentista from "./views/admin/AddDentista.vue";
import Pacientes from "./views/admin/Pacientes.vue";
import AddPaciente from "./views/admin/AddPaciente.vue";
import EditarPaciente from "./views/admin/EditarPaciente.vue";

import { fb } from "./firebase";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "login",
      component: Login
    },
    {
      path: "/perfil",
      name: "Perfil",
      component: Perfil,
      meta: { requiresAuth: true }
    },
    {
      path: "/consultas",
      name: "Consultas",
      component: Consultas,
      meta: { requiresAuth: true }
    },
    {
      path: "/admin-consultas",
      name: "AdminConsultas",
      component: AdminConsultas,
      meta: { requiresAuth: true }
    },
    {
      path: "/agendar-consulta",
      name: "agendarConsulta",
      component: AgendarConsulta,
      meta: { requiresAuth: true }
    },
    {
      path: "/dentistas",
      name: "dentistas",
      component: Dentistas,
      meta: { requiresAuth: true }
    },
    {
      path: "/add-dentista",
      name: "AddDentista",
      component: AddDentista,
      meta: { requiresAuth: true }
    },
    {
      path: "/pacientes",
      name: "pacientes",
      component: Pacientes,
      meta: { requiresAuth: true }
    },
    {
      path: "/add-paciente",
      name: "AddPaciente",
      component: AddPaciente,
      meta: { requiresAuth: true }
    },
    {
      path: "/pacientes/editar",
      name: "EditarPaciente",
      component: EditarPaciente,
      meta: { requiresAuth: true }
    }
  ]
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth);
  const currentUser = fb.auth().currentUser;

  if (requiresAuth && !currentUser) {
    next("/");
  } else if (requiresAuth && currentUser) {
    next();
  } else {
    next();
  }
});

export default router;
