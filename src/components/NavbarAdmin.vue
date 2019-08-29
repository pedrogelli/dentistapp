<template>
  <b-navbar toggleable="lg" type="dark">
    <b-navbar-brand href="#">
      <router-link to="/admin-consultas" class="nav-link"
        >Dentistapp</router-link
      >
    </b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <router-link to="/admin-consultas" class="nav-link"
          >Consultas</router-link
        >
        <router-link to="/dentistas" class="nav-link">Dentistas</router-link>
        <router-link to="/add-dentista" class="nav-link"
          >Add Dentista</router-link
        >
        <router-link to="/pacientes" class="nav-link">Pacientes</router-link>
        <router-link to="/add-paciente" class="nav-link"
          >Add Paciente</router-link
        >
        <router-link to="/agendar-consulta" class="nav-link"
          >Agendar Consulta</router-link
        >
        <router-link to="/pacientes/editar" class="nav-link"
          >Editar Pacientes</router-link
        >
      </b-navbar-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template slot="button-content">
            <em>Nome do administrador</em>
          </template>
          <b-dropdown-item to="perfil">Perfil</b-dropdown-item>
          <b-dropdown-item href="#" @click="logout()">Sair</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import { db, fb } from "../firebase";
export default {
  name: "NavbarAdmin",
  data() {
    return {
      nome: null,
      email: null
    };
  },
  methods: {
    logout() {
      fb.auth()
        .signOut()
        .then(() => {
          this.$root.permissao = null;
          console.log(this.$root.permissao);
          this.$router.replace("/");
          console.log("Usuário desautenticado.");
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created() {
    var user = fb.auth().currentUser;
    this.email = user.email;
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
