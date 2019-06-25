<template>
  <b-container class="agendar-consulta">
    <TituloPagina msg="Agendar Consulta"></TituloPagina>
    <b-row>
      <b-col>
        <b-form @submit="addDentista" v-if="show">
          <b-form-group id="dentista">
            <!-- <b-form-select v-model="selected" :options="dentistas" class="mb-3"> -->
            <b-form-select v-model="consulta.dentista" class="mb-3">
              <option :value="null">Escolha um dentista</option>
              <option
                v-for="dentista in dentistas"
                :key="dentista.id"
                :value="dentista['.key']"
                >{{ dentista.nome }} {{ dentista.sobrenome }}</option
              >
            </b-form-select>
          </b-form-group>
          <b-form-group>
            <b-form-input
              id="data"
              type="date"
              v-model="consulta.dia"
            ></b-form-input>
          </b-form-group>
          <b-form-group>
            <b-form-input
              id="hora"
              type="time"
              v-model="consulta.hora"
            ></b-form-input>
          </b-form-group>
          <b-button type="submit" variant="primary">Agendar</b-button>
          <b-button type="reset" variant="danger">Cancelar</b-button>
        </b-form>
        <!--<SemConsultas msg="Agendar Consulta" />-->
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
// @ is an alias to /src
import { db } from "../../firebase";
import TituloPagina from "@/components/TituloPagina.vue";

export default {
  name: "agendarConsulta",
  data() {
    return {
      consulta: {
        paciente: null,
        dentista: null,
        dia: null,
        hora: null
      },
      show: true,
      dentistas: []
    };
  },
  components: {
    TituloPagina
  },
  firestore() {
    return {
      dentistas: db.collection("dentistas").orderBy("nome"),
      consultas: db.collection("consultas")
    };
  },
  methods: {
    addDentista() {
      this.$firestore.consultas.add(this.consulta);
    },
    clearForm() {}
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
