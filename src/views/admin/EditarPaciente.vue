<template>
  <b-container class="editar-paciente">
    <b-row>
      <b-col>
        <TituloPagina msg="Editar Paciente"></TituloPagina>
        <p>Altere as informações do paciente.</p>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-form>
          <b-form-group class="input">
            <b-form-input placeholder="Nome"></b-form-input>
          </b-form-group>
          <b-form-group class="input">
            <b-form-input placeholder="Sobrenome"></b-form-input>
          </b-form-group>
          <b-form-group class="input">
            <b-form-input type="email" placeholder="E-mail"></b-form-input>
          </b-form-group>
          <b-form-group class="input">
            <b-form-input type="password" placeholder="Senha"></b-form-input>
          </b-form-group>
          <b-button type="submit" variant="primary">Adicionar</b-button>
          <b-button type="reset" variant="danger">Cancelar</b-button>
        </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { db } from "../../firebase";
import TituloPagina from "@/components/TituloPagina.vue";
export default {
  name: "EditarPaciente",
  components: {
    TituloPagina
  },
  data() {
    return {};
  },
  firestore() {
    return {
      // dentistas: db.collection("dentistas")
    };
  },
  methods: {}
};
</script>

<style scoped></style>
