<template>
  <div id="app">
    <navbar v-if="this.$root.permissao === 'paciente'"></navbar>
    <navbar-admin v-if="this.$root.permissao === 'admin'"></navbar-admin>

    <router-view />
  </div>
</template>

<script>
export default {
  name: "Dentistapp",
  data: function() {
    return {
      //user: true
    };
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
