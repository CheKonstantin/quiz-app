const questions = [
  {
    q: "Какая планета Солнечной системы самая большая?",
    answers: [
      { text: "Земля", is_correct: false },
      { text: "Юпитер", is_correct: true },
      { text: "Сатурн", is_correct: false },
      { text: "Марс", is_correct: false },
    ],
  },
  {
    q: "Кто написал роман 'Война и мир'?",
    answers: [
      { text: "Достоевский", is_correct: false },
      { text: "Чехов", is_correct: false },
      { text: "Толстой", is_correct: true },
      { text: "Гоголь", is_correct: false },
    ],
  },
  {
    q: "Сколько углов у правильного шестиугольника?",
    answers: [
      { text: "4", is_correct: false },
      { text: "5", is_correct: false },
      { text: "6", is_correct: true },
      { text: "8", is_correct: false },
    ],
  },
  {
    q: "Какой элемент обозначается символом 'O' в таблице Менделеева?",
    answers: [
      { text: "Олово", is_correct: false },
      { text: "Кислород", is_correct: true },
      { text: "Золото", is_correct: false },
      { text: "Осмий", is_correct: false },
    ],
  },
  {
    q: "Сколько дней в високосном году?",
    answers: [
      { text: "364", is_correct: false },
      { text: "365", is_correct: false },
      { text: "366", is_correct: true },
      { text: "367", is_correct: false },
    ],
  },
  {
    q: "Кто изобрёл лампу накаливания?",
    answers: [
      { text: "Эйнштейн", is_correct: false },
      { text: "Ньютон", is_correct: false },
      { text: "Эдисон", is_correct: true },
      { text: "Тесла", is_correct: false },
    ],
  },
  {
    q: "Какая страна самая большая по территории?",
    answers: [
      { text: "Канада", is_correct: false },
      { text: "США", is_correct: false },
      { text: "Россия", is_correct: true },
      { text: "Китай", is_correct: false },
    ],
  },
  {
    q: "Что из этого — млекопитающее?",
    answers: [
      { text: "Лягушка", is_correct: false },
      { text: "Крокодил", is_correct: false },
      { text: "Дельфин", is_correct: true },
      { text: "Акула", is_correct: false },
    ],
  },
  {
    q: "Сколько континентов на Земле?",
    answers: [
      { text: "5", is_correct: false },
      { text: "6", is_correct: false },
      { text: "7", is_correct: true },
      { text: "8", is_correct: false },
    ],
  },
  {
    q: "Кто нарисовал «Мону Лизу»?",
    answers: [
      { text: "Рафаэль", is_correct: false },
      { text: "Микеланджело", is_correct: false },
      { text: "Леонардо да Винчи", is_correct: true },
      { text: "Ван Гог", is_correct: false },
    ],
  },
  {
    q: "Что легче: 1 кг железа или 1 кг ваты?",
    answers: [
      { text: "Железо", is_correct: false },
      { text: "Вата", is_correct: false },
      { text: "Одинаково", is_correct: true },
      { text: "Зависит от плотности", is_correct: false },
    ],
  },
  {
    q: "В каком году закончилась Вторая мировая война?",
    answers: [
      { text: "1941", is_correct: false },
      { text: "1945", is_correct: true },
      { text: "1939", is_correct: false },
      { text: "1950", is_correct: false },
    ],
  },
  {
    q: "Что изучает орнитология?",
    answers: [
      { text: "Растения", is_correct: false },
      { text: "Звёзды", is_correct: false },
      { text: "Птиц", is_correct: true },
      { text: "Рыб", is_correct: false },
    ],
  },
  {
    q: "Сколько лап у паука?",
    answers: [
      { text: "6", is_correct: false },
      { text: "8", is_correct: true },
      { text: "10", is_correct: false },
      { text: "4", is_correct: false },
    ],
  },
  {
    q: "Какой газ необходим для дыхания человека?",
    answers: [
      { text: "Азот", is_correct: false },
      { text: "Кислород", is_correct: true },
      { text: "Углекислый газ", is_correct: false },
      { text: "Гелий", is_correct: false },
    ],
  },
];

export default questions;
