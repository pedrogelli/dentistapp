<template>
  <b-container class="dentistas">
    <b-row>
      <b-col>
        <TituloPagina msg="Lista de dentistas"></TituloPagina>
      </b-col>
    </b-row>
    <SemInformacao v-if="dentistas > 0"></SemInformacao>

    <b-row>
      <b-col>
        <div class="card" style="width: 18rem;">
          <ul class="list-group list-group-flush">
            <li
              v-for="dentista in dentistas"
              :key="dentista.id"
              class="list-group-item"
            >
              {{ dentista.nome }} {{ dentista.sobrenome }}
            </li>
          </ul>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { db } from "../../firebase";
import TituloPagina from "@/components/TituloPagina.vue";
export default {
  name: "dentistas",
  components: {
    TituloPagina
  },
  data() {
    return {
      dentistas: [],
      dentista: null
    };
  },
  firestore() {
    return {
      dentistas: db.collection("dentistas").orderBy("nome")
    };
  },
  created() {
    // db.collection("dentistas")
    //   .get()
    //   .then(querySnapshot => {
    //     querySnapshot.forEach(doc => {
    //       this.dentistas.push(doc.data().nome);
    //     });
    //   });
  }
};
</script>

<style scoped>
.fundo-sem-consulta img {
  width: 256px;
  padding: 60px 0;
}
</style>
