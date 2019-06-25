<template>
  <b-row>
    <b-col class="fundo-sem-informacao">
      <img
        alt="Fundo sem informações"
        src="@/assets/sem-informacao.png"
        width="300px"
      />
      <p>Todos os pacientes aparecerão aqui</p>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "SemInformacao",
  props: {
    msg: String
  }
};
</script>
<style scoped>
img {
  margin-bottom: 30px;
}
</style>
