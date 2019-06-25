<template>
  <b-container class="pacientes">
    <b-row>
      <b-col>
        <TituloPagina msg="Lista de pacientes"></TituloPagina>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-form>
          <b-form-group class="input search">
            <b-input type="search" placeholder="Pesquisar"></b-input>
          </b-form-group>
        </b-form>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-card
          no-body
          header-bg-variant="primary"
          v-for="paciente in pacientes"
          :key="paciente.id"
          style="max-width: 740px;"
        >
          <b-card-body>
            <b-dropdown
              size="lg"
              variant="link"
              toggle-class="text-decoration-none"
              no-caret
              class="float-right"
            >
              <template slot="button-content">
                <span class="sr-only">Opções</span>
                <font-awesome-icon icon="ellipsis-v" />
              </template>

              <b-dropdown-item
                href="#"
                @click="editarPaciente(paciente['.key'])"
                >Editar</b-dropdown-item
              >
              <b-dropdown-item
                href="#"
                @click="excluirPaciente(paciente['.key'])"
                class="excluir"
                >Excluir</b-dropdown-item
              >
            </b-dropdown>
            <b-card-title class="d-align">
              {{ paciente.nome }}
              {{ paciente.sobrenome }}
            </b-card-title>
            <b-card-sub-title v-if="paciente.plano" class="mb-2">{{
              paciente.plano
            }}</b-card-sub-title>
            <b-card-sub-title v-else>Sem plano</b-card-sub-title>
          </b-card-body>

          <b-list-group flush>
            <b-list-group-item>
              <b>Nascimento</b>
              <br />
              {{ paciente.nascimento }}
            </b-list-group-item>
            <b-list-group-item>
              <b>CPF</b>
              <br />
              {{ paciente.cpf }}
            </b-list-group-item>
            <b-list-group-item>
              <b>Telefone</b>
              <br />
              {{ paciente.telefone }}
            </b-list-group-item>
            <b-list-group-item>
              <b>Celular</b>
              <br />
              {{ paciente.celular }}
            </b-list-group-item>
            <b-list-group-item>
              <b>E-mail</b>
              <br />
              {{ paciente.email }}
            </b-list-group-item>
            <b-list-group-item>
              <b>Endereço</b>
              <br />
              {{ paciente.endereco }}
            </b-list-group-item>
            <b-list-group-item>
              <b>Complemento</b>
              <br />
              {{ paciente.complemento }}
            </b-list-group-item>
            <b-list-group-item>
              <b>CEP</b>
              <br />
              {{ paciente.cep }}
            </b-list-group-item>
          </b-list-group>

          <b-card-footer>
            <a
              href="#"
              @click="consultas(paciente['.key'])"
              class="card-link btn-consultas"
            >
              <font-awesome-icon icon="search" />Consultas
            </a>
          </b-card-footer>
        </b-card>
      </b-col>
    </b-row>
    <SemInformacao v-if="this.pacientes === 0"></SemInformacao>
  </b-container>
</template>

<script>
import { db } from "../../firebase";
import TituloPagina from "@/components/TituloPagina.vue";
export default {
  name: "pacientes",
  components: {
    TituloPagina
  },
  data() {
    return {
      pacientes: [],
      paciente: null
    };
  },
  firestore() {
    return {
      pacientes: db.collection("pacientes").orderBy("nome")
    };
  },
  methods: {
    excluirPaciente(doc) {
      if (confirm("Tem certeza que deseja excluir o paciente?")) {
        this.$firestore.pacientes.doc(doc).delete();
      }
    },
    editarPaciente(pacId) {
      alert(pacId);
    },
    consultas(doc) {}
  },
  created() {
    //this.readData();
  }
};
</script>

<style scoped>
.fundo-sem-consulta img {
  width: 256px;
  padding: 60px 0;
}
</style>
