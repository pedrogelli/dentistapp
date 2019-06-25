<template>
  <b-container class="add-paciente">
    <b-row>
      <b-col>
        <TituloPagina msg="Adicionar paciente"></TituloPagina>
        <p>Preencha os campos para adicionar um novo paciente.</p>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-form @submit="addPaciente">
          <b-form-group class="input">
            <b-form-input
              v-model="paciente.nome"
              placeholder="Nome"
            ></b-form-input>
          </b-form-group>
          <b-form-group class="input">
            <b-form-input
              v-model="paciente.sobrenome"
              placeholder="Sobrenome"
            ></b-form-input>
          </b-form-group>
          <b-form-group class="input">
            <!-- <date-picker
              name="date"
              v-model="nascimento"
              :config="nascimentoOptions"
              placeholder="Nascimento"
            ></date-picker>-->
            <vue-mask
              class="form-control"
              v-model="paciente.nascimento"
              mask="00/00/0000"
              :raw="false"
              :options="nascimentoOptions"
            ></vue-mask>
          </b-form-group>
          <b-form-group class="input">
            <!-- <b-form-input
              v-model="cpf"
              class="cpf"
              type="number"
              placeholder="CPF"
            ></b-form-input>-->
            <vue-mask
              class="form-control"
              v-model="paciente.cpf"
              mask="000.000.000-00"
              :raw="false"
              :options="cpfOptions"
            ></vue-mask>
          </b-form-group>
          <b-form-group class="input">
            <vue-mask
              class="form-control"
              v-model="paciente.telefone"
              mask="00 0000-0000"
              :raw="false"
              :options="telefoneOptions"
            ></vue-mask>
          </b-form-group>
          <b-form-group class="input">
            <vue-mask
              class="form-control"
              v-model="paciente.celular"
              mask="00 00000-0000"
              :raw="false"
              :options="celularOptions"
            ></vue-mask>
          </b-form-group>
          <b-form-group class="input">
            <b-form-input
              v-model="paciente.email"
              type="email"
              placeholder="E-mail"
            ></b-form-input>
          </b-form-group>
          <b-form-group class="input">
            <b-form-input
              v-model="paciente.endereco"
              placeholder="Endereço"
            ></b-form-input>
          </b-form-group>
          <b-form-group class="input">
            <b-form-input
              v-model="paciente.complemento"
              placeholder="Complemento"
            ></b-form-input>
          </b-form-group>
          <b-form-group class="input">
            <vue-mask
              class="form-control"
              v-model="paciente.cep"
              mask="00000-000"
              :raw="false"
              :options="cepOptions"
            ></vue-mask>
          </b-form-group>
          <b-form-group class="input">
            <b-form-select
              v-model="paciente.plano"
              class="mb-3"
              :options="plano"
            >
              <option :value="null">Plano</option>
              <option value="Plano A">Plano A</option>
              <option value="Plano B">Plano B</option>
              <option value="Plano C">Plano C</option>
            </b-form-select>
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
  name: "AddPaciente",
  components: {
    TituloPagina
  },
  data() {
    return {
      pacientes: [],
      paciente: {
        nome: null,
        sobrenome: null,
        nascimento: null,
        cpf: null,
        telefone: null,
        celular: null,
        email: null,
        endereco: null,
        complemento: null,
        cep: null,
        plano: null
      },
      nascimentoOptionsDatePicker: {
        format: "DD/MM/YYYY",
        useCurrent: false,
        showClear: true,
        showClose: true
      },
      nascimentoOptions: {
        placeholder: "Data de nascimento"
      },
      cpfOptions: {
        placeholder: "CPF"
      },
      telefoneOptions: {
        placeholder: "Telefone"
      },
      celularOptions: {
        placeholder: "Celular"
      },
      cepOptions: {
        placeholder: "CEP"
      }
    };
  },
  firestore() {
    return {
      pacientes: db.collection("pacientes")
    };
  },
  methods: {
    addPaciente(evt) {
      this.$firestore.pacientes.add(this.paciente);
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
