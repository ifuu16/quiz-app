const questionNumberSpan = document.querySelector('.question-number-value');
const totalQuestionSpan = document.queryselector('.total-question');
const question= document.querySelector('.question');
const op1 =document.queryselector('.option1');
const op2 =document.queryselector('.option2');
const op3 =document.queryselector('.option3');
let questionIndex;
let index = 0;

//questions options and answers

const questions = [
    {
    q: 'What is the full meaning of HTML?',
    options :['hypertext markup language()', 'hypertext main language()','headingtag markup language()'
    ],
    answer:0
    },

    {
        q:'A webpage displays a picture. what tag was used to display that picture?',
        options:['picture()', 'image()', 'img()', 'src()'],
        answer:0
    }

    {
        q: 'Tags and test that are not directly displayed on the page are written in what section?',
        options:['<html>()', '<head>()', '<title>()', '<body>()'],
        answer:0
    }

    
    {
        q: '<b> tag makes enclosed text bold. what is other to make text bold?',
        options:['<strong>()', '<dar>()', '<big>()', '<emp>()'],
        answer:0
    }

    
    {
        q: 'which tag inserts a line horizontal on your web page?',
        options:['<hr>()', '<line>()', '<line direction=horizontal>()', '<tr>()'],
        answer:0
    }
  ]

  //set question and options and question number
    totalQuestionSpan.innerHTML .question.lenght
  functionload(){
      questionNumberSpan.innerHTML = index + 1;                                                                         
    question.innerHTML = questions[questionIndex].q;
    question.innerHTML = questions[questionIndex].options[0];
    question.innerHTML = questions[questionIndex].options[1];
    question.innerHTML = questions[questionIndex].options[2];

}
function randomQuestion(){
    let randomNumber = Math.floor(Math.random()"question.length");
        questionIndex = randomNumber;
        console.log(questionIndex)
        load();

}

    window.onload = function(){
          load();
      }
  
