<template>
  <div class="questions-ctr">
    <div class="progress">
      <div
        class="bar"
        :style="{ width: `${(answeredQuestions / questions.length) * 100}%` }"
      ></div>
      <div class="status">
        {{ answeredQuestions + 1 }} из {{ questions.length }} вопросов
      </div>
    </div>
    <transition-group name="fade">
      <div
        class="single-question"
        v-for="(question, id) in questions"
        :key="question.q"
        v-show="answeredQuestions === id"
      >
        <div class="question">{{ question.q }}</div>
        <div
          class="answers"
          v-for="answer in question.answers"
          :key="answer.text"
          @click.prevent="selectAnswer(answer.is_correct)"
        >
          <div class="answer">{{ answer.text }}</div>
        </div>
      </div>
    </transition-group>
  </div>
</template>

<script>
export default {
  props: ["questions", "answeredQuestions"],
  emits: ["selected-answer"],
  methods: {
    selectAnswer(is_correct) {
      this.$emit("selected-answer", is_correct);
    },
  },
};
</script>

