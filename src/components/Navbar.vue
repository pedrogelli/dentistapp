<template>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand href="#/">Dentistapp</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <router-link to="/consultas" class="nav-link">Consultas</router-link>
        <router-link to="/agendar-consulta" class="nav-link"
          >Agendar Consulta</router-link
        >
      </b-navbar-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template slot="button-content">
            <em>Nome do usuário</em>
          </template>
          <b-dropdown-item href="#">Perfil</b-dropdown-item>
          <b-dropdown-item href="#" @click="logout()">Sair</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import { fb } from "../firebase";
export default {
  name: "Navbar",
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
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
