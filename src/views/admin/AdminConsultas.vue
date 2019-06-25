<template>
  <b-container class="admin-consultas">
    <b-row>
      <b-col>
        <TituloPagina msg="Consultas agendadas"></TituloPagina>
      </b-col>
    </b-row>
    <SemInformacao></SemInformacao>
  </b-container>
</template>

<script>
import { db } from "../../firebase";
import TituloPagina from "@/components/TituloPagina.vue";

export default {
  name: "AdminConsultas",
  components: {
    TituloPagina
  },
  data() {
    return {
      consultas: [],
      consulta: null
    };
  },
  firestore() {
    return {
      consultas: db.collection("consultas")
    };
  },
  created() {}
};
</script>

<style scoped>
.fundo-sem-consulta img {
  width: 256px;
  padding: 60px 0;
}
</style>
