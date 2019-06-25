<template>
  <b-container class="titulo-pagina">
    <b-row>
      <b-col>
        <h1 class="text-center">{{ msg }}</h1>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "TituloPagina",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
