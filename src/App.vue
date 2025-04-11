<template>
  <div class="ctr">
    <transition name="fade" mode="out-in ">
      <Questions
        v-if="answeredQuestions < questions.length"
        :questions="questions"
        :answeredQuestions="answeredQuestions"
        @selected-answer="selectedAnswer"
      />
      <Results
        v-else
        :totalCorrect="totalCorrect"
        :results="results"
        :questions="questions"
      />
    </transition>

    <button
      type="button"
      class="reset-btn"
      v-if="answeredQuestions === questions.length"
      @click.prevent="reset"
    >
      Начать заного
    </button>
  </div>
</template>

<script>
import Questions from "./components/Questions.vue";
import Results from "./components/Results.vue";
import MockQuestions from "./components/questions";

export default {
  name: "App",
  components: {
    Questions,
    Results,
  },

  data() {
    return {
      answeredQuestions: 0,
      totalCorrect: 0,
      questions: MockQuestions,
      results: [
        {
          min: 0,
          max: 5,
          title: "Попробуйте снова!",
          desc: "Чувствуете что пора начинать читать?",
        },
        {
          min: 5,
          max: 10,
          title: "Неплохо!",
          desc: "Не зря вы ходили в школу!",
        },
        {
          min: 10,
          max: 15,
          title: "Вау, да вы гений!",
          desc: "Вам еще не дали Нобелевскую премию по эрудиции?!",
        },
      ],
    };
  },

  methods: {
    selectedAnswer(is_correct) {
      if (is_correct) {
        this.totalCorrect++;
      }
      this.answeredQuestions++;
    },

    reset() {
      this.answeredQuestions = 0;
      this.totalCorrect = 0;
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
body {
  font-size: 20px;
  font-family: sans-serif;
  padding-top: 20px;
  background: #e6ecf1;
}

.ctr {
  margin: 0 auto;
  max-width: 600px;
  width: 100%;
  box-sizing: border-box;
  position: relative;
}
.questions-ctr {
  position: relative;
  width: 100%;
}
.question {
  width: 100%;
  padding: 20px;
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  background-color: #00ca8c;
  color: #fff;
  box-sizing: border-box;
}
.single-question {
  position: relative;
  width: 100%;
}
.answer {
  border: 1px solid #8e959f;
  padding: 20px;
  font-size: 18px;
  width: 100%;
  background-color: #fff;
  transition: 0.2s linear all;
}
.answer span {
  display: inline-block;
  margin-left: 5px;
  font-size: 0.75em;
  font-style: italic;
}
.progress {
  height: 50px;
  margin-top: 10px;
  background-color: #ddd;
  position: relative;
}
.bar {
  height: 50px;
  background-color: #ff6372;
  transition: all 0.3s linear;
}
.status {
  position: absolute;
  top: 15px;
  left: 0;
  text-align: center;
  color: #fff;
  width: 100%;
}
.answer:not(.is-answered) {
  cursor: pointer;
}
.answer:not(.is-answered):hover {
  background-color: #8ce200;
  border-color: #8ce200;
  color: #fff;
}

.title {
  width: 100%;
  padding: 20px;
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  background-color: #12cbc4;
  color: #fff;
  box-sizing: border-box;
}
.desc {
  border: 1px solid #8e959f;
  padding: 20px;
  font-size: 18px;
  width: 100%;
  background-color: #fff;
  transition: 0.4s linear all;
  text-align: center;
}
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: all 0.3s linear;
}
.fade-leave-active {
  transition: all 0.3s linear;
  opacity: 0;
  position: absolute;
}

.reset-btn {
  background-color: #ff6372;
  border: 0;
  font-size: 22px;
  color: #fff;
  padding: 10px 25px;
  margin: 10px auto;
  display: block;
  cursor: pointer;
}

.result {
  width: 100%;
}

.reset-btn:active,
.reset-btn:focus,
.reset-btn:hover {
  border: 0;
  outline: 0;
}
</style>
