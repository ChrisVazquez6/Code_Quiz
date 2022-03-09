


currentQuestion = 0

let questions = []
  {
    question: 'How do you pull a ID from HTML to Java?',
    options: ['addEventListner','getElementById','pullId'],
    answer: 'getElementById'
  },
  {
    question:'what do you use to style a page'
    options:['CSS','HTML'],
    answer: 'CSS'
  }
]
const displayQuestion = () =>{
  document.getElementById('question').innerHTML = `
  ${questions[currentQuestion].questions}  `
}




document.getElementById('start').addEventListener('click'event =>{
  displayQuestion()
})