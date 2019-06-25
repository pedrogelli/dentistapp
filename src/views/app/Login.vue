<template>
  <b-container class="login">
    <b-row class="logo">
      <b-col>
        <img alt="Logo Clínica Dentária" src="../../assets/logo.png" />
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-form
          @submit="onSubmit"
          @reset="onReset"
          v-if="show"
          class="text-left"
        >
          <b-form-group id="email">
            <b-form-input
              id="input-1"
              v-model="form.email"
              type="email"
              required
              placeholder="E-mail"
            ></b-form-input>
          </b-form-group>

          <b-form-group id="senha">
            <b-form-input
              id="senha"
              @keyup.enter="onSubmit"
              v-model="form.senha"
              type="password"
              required
              placeholder="Senha"
            ></b-form-input>
          </b-form-group>
          <b-form-group id="entrar">
            <b-button type="submit" variant="primary">Entrar</b-button>
          </b-form-group>

          <a href="#/">Esqueceu a senha?</a>
        </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { fb } from "../../firebase";
export default {
  name: "Login",
  data() {
    return {
      form: {
        email: null,
        senha: null
      },
      show: true
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      //alert(JSON.stringify(this.form));
      fb.auth()
        .signInWithEmailAndPassword(this.form.email, this.form.senha)
        .then(() => {
          this.$root.permissao = "admin";
          this.$router.replace("admin-consultas");
          console.log("Usuário autenticado.");
        })
        .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          if (errorCode == "auth/wrong-password") {
            alert("Wrong password.");
          } else {
            alert(errorMessage);
          }
          console.log(error);
        });
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.usuario = "";
      this.form.senha = "";
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  }
};
</script>

<style scoped>
.logo {
  text-align: center;
}
.login img {
  margin: 0 auto;
  padding: 30px;
}
</style>
