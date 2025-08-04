const form = document.querySelector('form');
const quizend = document.querySelector('.quizend')
const questionEl = document.querySelector('.question');
const labels = document.querySelectorAll('label');
const submit = document.querySelector('.submit');
const reload = document.querySelector('.reload');
let score = 0;
const questions = [
  {
    question: 'Which language runs in a web browser?',
    option1: 'Java',
    option2: 'C',
    option3: 'Python',
    option4: 'JavaScript',
    answer : 'JavaScript'
  },
  {
    question: 'What does CSS stand for?',
    option1: 'Central Style Sheets',
    option2: 'Cascading Style Sheets',
    option3: 'Cascading Simple Sheets',
    option4: 'Cars SUVs Sailboats',
    answer : 'Cascading Style Sheets'
  },
  {
    question: 'What does HTML stand for?',
    option1: 'Hypertext Markup Language',
    option2: 'Hypertext Markdown Language',
    option3: 'Hyperloop Machine Language',
    option4: 'Helicopters Terminals Motorboats Lamborginis',
    answer : 'Hypertext Markup Language'
  },
  {
    question: 'What year was JavaScript launched?',
    option1: '1996',
    option2: '1995',
    option3: '1994',
    option4: 'None of the above',
    answer : '1995'
  }
];

let i = 0;

function renderQuestion(i) {
  questionEl.innerText = questions[i].question;
  labels[0].innerHTML = `<input type="radio" value = "${questions[i].option1}" name="q1"> ${questions[i].option1}`;
  labels[1].innerHTML = `<input type="radio" value = "${questions[i].option2}" name="q1"> ${questions[i].option2}`;
  labels[2].innerHTML = `<input type="radio" value = "${questions[i].option3}" name="q1"> ${questions[i].option3}`;
  labels[3].innerHTML = `<input type="radio" value = "${questions[i].option4}" name="q1"> ${questions[i].option4}`;
  submit.disabled = true;

  const inputs = document.querySelectorAll('input[name="q1"]');
  inputs.forEach(input => {
    input.addEventListener('click', () => {
      submit.disabled = false;
    });
  });
}
renderQuestion(i);


submit.addEventListener('click', (e) => {
  e.preventDefault();
  scoreCalc(i); 
  i++;
  if (i < questions.length) {
    renderQuestion(i);
  } else {
    quizend.querySelector('span').innerText = `${score}/${questions.length}`
    form.style.display = 'none'
    quizend.style.display = 'flex'
}
});


reload.addEventListener('click',reloadFn)

function reloadFn(){
    score = 0;
    i = 0;
    quizend.style.display = 'none'
    form.style.display = 'flex'
    renderQuestion(i);
}

function scoreCalc(index){
    const selected = document.querySelector('input[name = "q1"]:checked');
    if(selected && selected.value === questions[index].answer){
        score++;
    }
    
}