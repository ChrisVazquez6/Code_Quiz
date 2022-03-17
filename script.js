currentQuestion = 0
let score = 0
let time = 60


let questions = [
  {
    question: 'How do you pull a ID from HTML to Java?',
    options: ['addeventlistner', 'getelementbyid'],
    answer: 'getelementbyid'
  },
  {
    question: 'what do you use to style a page',
    options: ['CSS', 'HTML'],
    answer: 'CSS'
  },
  {
    question: 'how do you start a HTML page ',
    options: [' add!', 'add?'],
    answer: 'add!'

  },
  {
  question: 'How do you log something on console ',
  options: ['log.console', 'console.log'],
  answer: 'console.log'
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
  </p>
   <p
   class= 'option'
   data-option= '${questions[currentQuestion].options[2]}'
   data-answer='${questions[currentQuestion].answer} '
   >
  ${questions[currentQuestion].options[2]}
  </p>
   <p
   class= 'option'
   data-option= '${questions[currentQuestion].options[3]}'
   data-answer='${questions[currentQuestion].answer} '
   >
  ${questions[currentQuestion].options[3]}
  </p>
  `
}

const displayScore = ()=> {
  document.getElementById('score').innerHTML = `
  score : ${score}`
  
} 

const finishedQuiz = () =>
{
  displayScore()
  clearInterval(clearTimer)
  console.log('quiz is over!');
  document.getElementById('question').innerHTML = ``
  document.getElementById('options').innerHTML = ``
}


document.addEventListener('click', event => {
  if (event.target.classList.contains('option')) {
    // console.log(event.target.dataset.option)
    // console.log(event.target.dataset.answer)
    if (event.target.dataset.option = event.target.dataset.answer){
      console.log('correct');
      score += 1
      displayScore()
      currentQuestion += 1
      if (currentQuestion=== questions.length) {
        finishedQuiz()
        console.log('finished quiz');
       clearInterval(clearTimer) 
        
      }else{
        console.log('quiz not finished');
      }
      displayQuestion()
      displayScore()
    }else{
      console.log('wrong');
    }
  }    
    
}) 
const timeFunction= () =>{
  time -=1
  document.getElementById('time').innerHTML = `
  ${time}`
  if(time < 0 ){
    document.getElementById('Game').innerHTML = `
   <h1>TIME QUIZ OVER KEYBOARD DOWN! </h1>
    `
  }
}



let clearTimer 
document.getElementById('start').addEventListener('click', event => {
clearTimer=setInterval(timeFunction,1000)
displayScore()
  displayQuestion()
})