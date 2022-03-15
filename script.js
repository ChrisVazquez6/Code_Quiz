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
document.addEventListener('click', event => {
  if (event.target.classList.contains('option')) {
    console.log(event.target.dataset.option)
    console.log(event.target.dataset.answer)
    if (event.target.dataset.option = event.target.dataset.answer){
      console.log('correct');
      score += 1
      currentQuestion += 1
      displayQuestion()
    }else{
      console.log('wrong');
    }
  }    
    
}) 
const timeFunction= () =>{
  time -=1
  document.getElementById('time').innerHTML = `
  ${time}`
}




document.getElementById('start').addEventListener('click', event => {
setInterval(timeFunction,1000)
  displayQuestion()
})