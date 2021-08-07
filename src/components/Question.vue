<template>
  <div class="main">
    <div class="container pa8 bd2 bdrs2">
      <div class="header">
        <Header :title="question.title" />
        <p
          :class="[
            question.compulsory ? 'compulsory' : 'not-compulsory',
            'ml5 mt2',
          ]"
          v-text="question.compulsory ? '* Compulsory' : 'Not Compulsory'"
        ></p>
        <div v-if="question.code" class="code ma3 pa6 bdrs2">
          <pre><code>{{ question.code }}</code></pre>
        </div>
      </div>
      <div class="options">
        <form @submit="onSubmit($event, question.id)">
          <div
            class="option pa6 ma3 bdrs2"
            :key="option.value"
            v-for="option in question.options"
          >
            <input
              type="radio"
              :id="option.value.toString()"
              :value="option.value.toString()"
              v-model="answer"
            />
            <label class="ml8" :for="option.value.toString()">{{
              option.label
            }}</label>
          </div>
          <div class="buttons">
            <Button
              v-show="question.id !== 1"
              @click="previousQuestion"
              :isRight="false"
              :text="'Previous'"
            />
            <Button
              type="submit"
              :bg-color="'success'"
              :isRight="true"
              :text="question.id === size ? 'Submit' : 'Next'"
              :disabled="answer == '' ? true : false"
            />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./Header.vue";
import Button from "./Button.vue";
import { mapMutations, mapState } from "vuex";

export default {
  name: "Question",
  components: {
    Header,
    Button,
  },
  props: {
    question: Object,
  },
  data() {
    return {
      answer: "",
    };
  },
  methods: {
    ...mapMutations(["nextQuestion", "previousQuestion", "submitQuiz"]),
    onSubmit(e, id) {
      e.preventDefault();
      if (this.size === id) {
        this.submitQuiz(this.answer);
        console.log("Quiz finished");
        return;
      }
      this.nextQuestion(this.answer);
      this.answer = "";
    },
  },
  computed: {
    ...mapState(["size"]),
  },
};
</script>

<style scoped>
.main {
  min-height: 85vh;
  display: flex;
  justify-items: center;
  align-items: center;
}
.container {
  width: 60%;
  margin: 4% auto;
}
.header {
  margin-bottom: 5%;
}
.code {
  background-color: #eaeaea;
  overflow: auto;
}
.compulsory {
  color: red;
}
.not-compulsory {
  color: #bbbbbb;
}
.option {
  background-color: #f4f4f4;
  display: flex;
}
.buttons {
  display: flex;
  justify-content: flex-end;
}
input[type="radio"] {
  cursor: pointer;
}
@media screen and (max-width: 500px) {
  .container {
    width: 95%;
  }
}
</style>
