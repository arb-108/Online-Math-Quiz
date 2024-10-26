const correctEL = document.getElementById("correct_r");
const wrongEL = document.getElementById("wrong_r");
const skip_r_EL = document.getElementById("skip_r");
const percentEl = document.getElementById("percent_r");
const part1EL = document.getElementById("part1");
const part2EL = document.getElementById("part2");
const inputAnsEL = document.getElementById("ans");
const submit_btnEl = document.getElementById("submit_btn");
const skipbtn_El = document.getElementById("skip_btn");
const operatorEl = document.getElementById("operator");
const queEl = document.getElementById("que");
const timeEl = document.getElementById("time");
const progressEl = document.getElementById("circle_m");
const st_btnEl = document.getElementById("st_btn");
const preEl = document.getElementById("pre_p");
const postEl = document.getElementById("post_p");
const midEl = document.getElementById("mid_p");
const countEl = document.getElementById("count");
let count=1;
let answer = 0;
var counter = 0;
let offset = 0;
let sec;
function startTimer() {
  // Prevent multiple intervals from stacking up
  if (sec) clearInterval(sec);
  sec = setInterval(function () {
    counter--;
    timeEl.innerText = counter;
    if (counter <= 0) {
      correctEL.innerText = correct;
      wrongEL.innerText = wrong;
      skip_r_EL.innerText = skip;
      let total_q = correct + wrong + skip;
      let percent = (correct / total_q) * 100;
      percentEl.innerText = percent.toFixed(0);
      postEl.classList.add("postphase");
      postEl.classList.remove("hide");
      midEl.classList.add("hide");
      midEl.classList.remove("container");
      console.log(`correct = ${correct},wrong = ${wrong},skip = ${skip}`);
      correct=0;
      wrong=0;
      skip=0;
      count=1;
      clearInterval(sec);
    }
    offsetsetting(counter);
  }, 1000);
}
function offsetsetting(offs) {
  let cir = progressEl.r.baseVal.value * 2 * Math.PI;
  //   console.log(cir);

  progressEl.style.strokeDashoffset = cir - (cir - (offs / 60) * cir);
}
st_btnEl.addEventListener("click", () => {
  counter = 60;
  preEl.classList.add("hide");
  preEl.classList.remove("prephase");
  midEl.classList.add("container");
  midEl.classList.remove("hide");
  startTimer();
});
function questionGenerator() {
  // let p1=Math.floor(Math.random() * (26 - 1))+1; //1-25
  // let p2=Math.floor(Math.random() * (10 - 1))+1; //1-9
  //     part1EL.innerText=p1;
  //     part2EL.innerText=p2;
  let question = Math.floor(Math.random() * (5 - 1)) + 1; //1-4
  switch (question) {
    case 1:
      p1 = Math.floor(Math.random() * (201 - 15)) + 15; //15-200
      p2 = Math.floor(Math.random() * (201 - 20)) + 20; //20-200
      answer = p1 + p2;
      queEl.innerText = `What is ${p1} ADD to ${p2} ?`;
      break;
    case 2:
      p1 = Math.floor(Math.random() * (201 - 115)) + 115; //115-200
      p2 = Math.floor(Math.random() * (116 - 20)) + 20; //20-115
      answer = p1 - p2;
      queEl.innerText = `What is ${p1} SUBTRACT to ${p2} ?`;
      break;
    case 3:
      p1 = Math.floor(Math.random() * (31 - 1)) + 1; //1-30
      p2 = Math.floor(Math.random() * (10 - 1)) + 1; //1-9
      answer = p1 * p2;
      queEl.innerText = `What is ${p1} MULTIPLY by ${p2} ?`;
      break;
    case 4:
      p1 = Math.floor(Math.random() * (101 - 10)) + 10; //10-100
      p2 = Math.floor(Math.random() * (10 - 1)) + 1; //1-9
      answer = p1 / p2;
      queEl.innerText = `What is ${p1} DIVIDED by ${p2} ?`;
      break;
    default:
      break;
  }
}
let correct = 0;
let wrong = 0;
let skip = 0;
window.onload = questionGenerator();
submit_btnEl.addEventListener("click", () => {
  console.log(part1EL.innerText, part2EL.innerText);
  if (inputAnsEL.value == answer) {
    correct++;
    // generateRandom();
    questionGenerator();
    count++;
    inputAnsEL.value = "";
    inputAnsEL.focus();
  } else {
    wrong++;
    questionGenerator();
    count++;
    inputAnsEL.value = "";
    inputAnsEL.focus();
    // generateRandom();
  }
  countEl.innerText=`Question = ${count}`;
});
skipbtn_El.addEventListener("click", () => {
  skip++;
  questionGenerator();
  count++;
  countEl.innerText=`Question = ${count}`;
  inputAnsEL.value = "";
  inputAnsEL.focus();
});
const resetEl = document.getElementById("reset_btn");
resetEl.addEventListener("click", () => {
  postEl.classList.remove("postphase");
  postEl.classList.add("hide");
  preEl.classList.remove("hide");
  preEl.classList.add("prephase");
});
// function generateRandom(){
//     let p1=Math.floor(Math.random() * (26 - 1))+1;
//     let p2=Math.floor(Math.random() * (10 - 1))+1;
//         part1EL.innerText=p1;
//         part2EL.innerText=p2;
// }
