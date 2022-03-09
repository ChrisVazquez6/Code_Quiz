


currentQuestion = 0


let questions = [
  {
    question: 'How do you pull a ID from HTML to Java?',
    options: ['addEventListner','getElementById'],
    answer: 'getElementById'
  },
  {
    question:'what do you use to style a page',
    options:['CSS','HTML'],
    answer: 'CSS'
  }
]

const displayQuestion = () => {
  document.getElementById('question').innerHTML = `
  <p>
  ${questions[currentQuestion].question} 
  </p> 
  `

  document.getElementById('options').innerHTML = `
  <p
  class= 'option'
  data-option='${questions[currentQuestion].options[0]} '
  data-answer='${questions[currentQuestion].answer} '
  >
  ${questions[currentQuestion].options[0]}
  </p>
   <p
   class= 'option'
   data-option= '${questions[currentQuestion].options[1]}'
   data-answer='${questions[currentQuestion].answer} '
   >
  ${questions[currentQuestion].options[1]}
  </p>
  `
}
document.addEventListener('click', event =>{
  if(event.target.classList.contains('option')){
    // console.log(event.target.dataset.option);
    // console.log(event.target.dataset.answer);
    if(event.target.dataset.option=== event.target.dataset.answer){
    console.log('Correct!');
    }else{
    console.log('Incorrect');
    }
  }
})




document.getElementById('start').addEventListener ('click', event => {
  displayQuestion()
})