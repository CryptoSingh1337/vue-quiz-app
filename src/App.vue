<template>
  <w-app>
    <Navbar />
    <Question v-if="!quizFinished" :question="currentQuestion" />
    <Score v-if="quizFinished" :title="'Final Score'" :answers="answers" />
    <Footer />
  </w-app>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Question from "./components/Question.vue";
import Score from "./components/Score.vue";
import Footer from "./components/Footer.vue";
import { mapMutations, mapState } from "vuex";

export default {
  name: "App",
  components: {
    Navbar,
    Question,
    Score,
    Footer,
  },
  created() {
    this.initialize();
  },
  computed: {
    ...mapState(["currentQuestion", "answers", "quizFinished"]),
  },
  methods: {
    ...mapMutations(["initialize"]),
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
