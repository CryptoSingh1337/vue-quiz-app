import { createApp } from 'vue'
import { createStore } from 'vuex';
import App from './App.vue'
import WaveUI from 'wave-ui'
import 'wave-ui/dist/wave-ui.css'

import Questions from "./data.js";

const store = createStore({
    state() {
        return {
            progress: 0,
            size: 0,
            questions: Questions,
            questionBar: 0,
            currentQuestionNo: 0,
            currentQuestion: null,
            answers: [],
            quizFinished: false,
        }
    },
    mutations: {
        initialize(state) {
            state.size = state.questions.length;
            state.currentQuestion = state.questions[0];
            state.questionBar = 100 / state.size;
        },
        updateProgress(state) {
            const answer = state.answers.find(obj => obj.id === state.currentQuestionNo);
            if (answer)
                return;
            state.progress += state.questionBar;
        },
        nextQuestion(state, payload) {
            const answer = state.answers.find(obj => obj.id === state.currentQuestionNo);
            if (answer) {
                state.answers[answer.id].answer = payload;
            } else {
                this.commit("updateProgress");
                state.answers.push({ id: state.currentQuestionNo, answer: payload, correctAnswer: state.currentQuestion.correctAnswer });
            }
            state.currentQuestionNo++;
            state.currentQuestion = state.questions[state.currentQuestionNo];
        },
        previousQuestion(state) {
            state.currentQuestionNo--;
            state.currentQuestion = state.questions[state.currentQuestionNo];
        },
        submitQuiz(state, payload) {
            state.currentQuestionNo++;
            this.commit("updateProgress");
            state.answers.push({ id: state.currentQuestionNo, answer: payload, correctAnswer: state.currentQuestion.correctAnswer });
            state.quizFinished = true;
            console.log(state.answers);
        }
    }
});
const app = createApp(App);
app.use(store);
new WaveUI(app, {});
app.mount('#app');

