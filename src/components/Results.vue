<template>
  <div class="result">
    <div class="title">{{ results[totalResaltIndex].title }}</div>
    <div class="desc">
      Ваш результат: {{ totalCorrect }} из {{ questions.length }}<br />
      {{ results[totalResaltIndex].desc }}
    </div>
  </div>
</template>

<script>
export default {
  props: ["totalCorrect", "results", "questions"],
  computed: {
    totalResaltIndex() {
      let index = 0;
      this.results.forEach((el, i) => {
        if (el.min <= this.totalCorrect && el.max >= this.totalCorrect) {
          index = i;
        }
      });

      console.log(index);

      return index;
    },
  },
};
</script>

