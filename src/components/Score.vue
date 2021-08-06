<template>
  <div class="main">
    <div class="container text-center pa8 bd2 bdrs2">
      <Header class="header" :title="title" />
      <div class="score-container">
        <div class="left">
          <h3>Correct Answers</h3>
          <div class="sh6">
            <h2>{{ correctAnswers }}</h2>
          </div>
        </div>
        <div class="right">
          <h3>Wrong Answers</h3>
          <div class="sh6">
            <h2>{{ wrongAnswers }}</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./Header.vue";

export default {
  name: "Score",
  props: {
    title: String,
    answers: Array,
  },
  components: {
    Header,
  },
  data() {
    return {
      correctAnswers: 0,
      wrongAnswers: 0,
      answersToBeChecked: this.answers,
    };
  },
  created() {
    this.answersToBeChecked.forEach((obj) => {
      if (obj.answer == obj.correctAnswer) this.correctAnswers++;
      else this.wrongAnswers++;
    });
  },
};
</script>

<style scoped>
.main {
  height: 85vh;
  display: flex;
  justify-items: center;
  align-items: center;
}
.container {
  width: 40%;
  margin: auto auto;
}
.header {
  margin-bottom: 5%;
  font-weight: 600;
  font-size: 3rem;
}
.score-container {
  display: flex;
  justify-content: space-evenly;
  font-size: 1.5rem;
}
.left div {
  background-color: #4caf50;
  width: 8rem;
  height: 8rem;
  border-radius: 100%;
  margin: 20px auto;
  display: flex;
  justify-content: center;
  align-content: center;
  color: white;
  border: 2px solid black;
  transition: all ease-in-out 600ms;
}
.left div:hover {
  transform: scale(1.2);
}
.right div {
  background-color: #ed2205;
  width: 8rem;
  height: 8rem;
  border-radius: 100%;
  margin: 20px auto;
  display: flex;
  justify-content: center;
  align-content: center;
  color: white;
  border: 2px solid black;
  transition: all ease-in-out 600ms;
}
.right div:hover {
  transform: scale(1.2);
}
.left h2 {
  display: flex;
  justify-self: center;
  align-self: center;
}
.right h2 {
  display: flex;
  justify-self: center;
  align-self: center;
}
@media screen and (max-width: 500px) {
  .container {
    width: 95%;
  }
}
@media screen and (min-width: 500px) and (max-width: 1000px) {
  .container {
    width: 95%;
  }
}
</style>
