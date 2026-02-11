const card = document.getElementById("card");
const answer_input = document.getElementById("answer_input");
const check_text = document.getElementById("check_text");
const submit_form = document.getElementById("submit_form");
let counter = 1;

const hiragana = [
  { kana: "あ", romaji: "a" },
  { kana: "い", romaji: "i" },
  { kana: "う", romaji: "u" },
  { kana: "え", romaji: "e" },
  { kana: "お", romaji: "o" },

  { kana: "か", romaji: "ka" },
  { kana: "き", romaji: "ki" },
  { kana: "く", romaji: "ku" },
  { kana: "け", romaji: "ke" },
  { kana: "こ", romaji: "ko" },

  { kana: "さ", romaji: "sa" },
  { kana: "し", romaji: "shi" },
  { kana: "す", romaji: "su" },
  { kana: "せ", romaji: "se" },
  { kana: "そ", romaji: "so" },

  { kana: "た", romaji: "ta" },
  { kana: "ち", romaji: "chi" },
  { kana: "つ", romaji: "tsu" },
  { kana: "て", romaji: "te" },
  { kana: "と", romaji: "to" },

  { kana: "な", romaji: "na" },
  { kana: "に", romaji: "ni" },
  { kana: "ぬ", romaji: "nu" },
  { kana: "ね", romaji: "ne" },
  { kana: "の", romaji: "no" },

  { kana: "は", romaji: "ha" },
  { kana: "ひ", romaji: "hi" },
  { kana: "ふ", romaji: "fu" },
  { kana: "へ", romaji: "he" },
  { kana: "ほ", romaji: "ho" },

  { kana: "ま", romaji: "ma" },
  { kana: "み", romaji: "mi" },
  { kana: "む", romaji: "mu" },
  { kana: "め", romaji: "me" },
  { kana: "も", romaji: "mo" },

  { kana: "や", romaji: "ya" },
  { kana: "ゆ", romaji: "yu" },
  { kana: "よ", romaji: "yo" },

  { kana: "ら", romaji: "ra" },
  { kana: "り", romaji: "ri" },
  { kana: "る", romaji: "ru" },
  { kana: "れ", romaji: "re" },
  { kana: "ろ", romaji: "ro" },

  { kana: "わ", romaji: "wa" },
  { kana: "を", romaji: "wo" },

  { kana: "ん", romaji: "n" }
];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function setResult(content, color) {
  check_text.textContent = content;
  check_text.style.color = color;
  answer_input.value = '';
}

function setAnswer(set) {
  card.textContent = hiragana[set].kana;
  card.dataset.answer = hiragana[set].romaji;
}

function checkAnswer(){
  check_text.style.display = 'block';

  if (answer_input.value.trim().toLowerCase() === card.dataset.answer) {
    setResult("Good", "green");
  } else {
    setResult("Bad", "red");
  }
}

function oneByOne() {
  check_text.textContent = '';
  setAnswer(counter)

  if (counter >= hiragana.length - 1) {
    counter = 0;
  } else {
    counter++;
  }

  answer_input.focus();
}

function getRandomHiragana() {
  check_text.textContent = '';

  const randomNumber = getRandomInt(hiragana.length);
  setAnswer(randomNumber)

  answer_input.focus();
}

submit_form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkAnswer();
})