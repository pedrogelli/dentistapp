<template>
  <b-container class="perfil">
    <b-row>
      <b-col>
        <TituloPagina msg="Perfil"></TituloPagina>
        <p>Alterar informações.</p>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-form @submit="atualizaPerfil">
          <b-form-row>
            <b-col>
              <b-form-group class="input">
                <b-form-input
                  v-model="perfil.nome"
                  placeholder="Nome"
                ></b-form-input>
              </b-form-group>
            </b-col>

            <b-col>
              <b-form-group class="input">
                <b-form-input
                  v-model="perfil.sobrenome"
                  placeholder="Sobrenome"
                ></b-form-input>
              </b-form-group>
            </b-col>

            <b-col cols="12">
              <b-form-group class="input">
                <b-form-input
                  v-model="perfil.email"
                  type="email"
                  placeholder="E-mail"
                ></b-form-input>
              </b-form-group>
            </b-col>
            <b-col>
              <b-form-group class="input">
                <b-form-input
                  v-model="perfil.senha"
                  type="password"
                  placeholder="Nova senha"
                ></b-form-input>
              </b-form-group>
            </b-col>
            <b-col>
              <b-form-group class="input">
                <b-form-input
                  v-model="perfil.confirmarSenha"
                  type="password"
                  placeholder="Confirmar senha"
                ></b-form-input>
              </b-form-group>
            </b-col>
            <b-col cols="12">
              <b-button type="submit" variant="primary">Salvar</b-button>
              <b-button type="reset" variant="danger">Cancelar</b-button>
            </b-col>
          </b-form-row>
        </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { db } from "../../firebase";
import TituloPagina from "@/components/TituloPagina.vue";
export default {
  name: "Perfil",
  components: {
    TituloPagina
  },
  data() {
    return {
      perfil: {
        nome: null,
        sobrenome: null,
        email: null,
        senha: null,
        confirmarSenha: null
      }
    };
  },
  firestore() {
    return {
      // dentistas: db.collection("dentistas")
    };
  },
  methods: {
    atualizaPerfil() {
      alert();
    }
  }
};
</script>

<style scoped></style>
