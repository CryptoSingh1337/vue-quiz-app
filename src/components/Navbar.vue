<template>
  <header class="py2 pl12">
    <a href="/"><h1>Quiz App</h1></a>
    <w-progress
      id="progress"
      class="ma1 mr8"
      circle
      :color="progress === 100 ? 'success' : 'primary'"
      v-model="progress"
      size="5em"
      label
    ></w-progress>
  </header>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Navbar",
  computed: {
    ...mapState(["progress"]),
  },
};
</script>

<style scoped>
header {
  display: flex;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
}
a {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: black;
}
#progress {
  margin-left: auto;
}
</style>
