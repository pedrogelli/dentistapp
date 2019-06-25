<template>
  <b-container class="consultas">
    <b-row>
      <b-col>
        <TituloPagina msg="Consultas"></TituloPagina>
        <p>
          Sem consultas marcadas.
          <br />Devemos ir ao dentista de 6 em 6 meses.
        </p>
        <router-link to="/agendar-consulta" class="nav-link"></router-link>
      </b-col>
    </b-row>
    <SemInformacao></SemInformacao>
  </b-container>
</template>

<script>
import TituloPagina from "@/components/TituloPagina.vue";
export default {
  name: "Consultas",
  components: {
    TituloPagina
  }
};
</script>

<style scoped>
.fundo-sem-consulta img {
  width: 256px;
  padding: 60px 0;
}
</style>
