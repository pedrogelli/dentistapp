<template>
  <b-container class="add-dentista">
    <b-row>
      <b-col>
        <TituloPagina msg="Adicionar dentista"></TituloPagina>
        <p>Preencha os campos para adicionar um novo dentista no sistema.</p>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-form @submit="addDentista">
          <b-form-group class="input">
            <b-form-input
              v-model="dentista.nome"
              placeholder="Nome"
            ></b-form-input>
          </b-form-group>
          <b-form-group class="input">
            <b-form-input
              v-model="dentista.sobrenome"
              placeholder="Sobrenome"
            ></b-form-input>
          </b-form-group>
          <b-form-group class="input">
            <b-form-input
              v-model="dentista.email"
              type="email"
              placeholder="E-mail"
            ></b-form-input>
          </b-form-group>
          <b-form-group class="input">
            <b-form-input
              v-model="dentista.senha"
              type="password"
              placeholder="Senha"
            ></b-form-input>
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
  name: "AddDentista",
  components: {
    TituloPagina
  },
  data() {
    return {
      dentistas: [],
      dentista: {
        nome: null,
        sobrenome: null,
        email: null,
        senha: null
      }
    };
  },
  firestore() {
    return {
      dentistas: db.collection("dentistas")
    };
  },
  methods: {
    addDentista() {
      this.$firestore.dentistas.add(this.dentista);
      alert(
        "Dentista " +
          this.dentista.nome +
          this.dentista.sobrenome +
          " criado com sucesso!"
      );
    }
  }
};
</script>

<style scoped>
.fundo-sem-consulta img {
  width: 256px;
  padding: 60px 0;
}
</style>
