// Variable for the section with all question and option elements
const quizSection = document.querySelector("#quizSection");

// Dark / Light mode toggle variables
let black = document.querySelector("#black");
let milk = document.querySelector("#milk");
let toggleBtns = document.querySelector("#toggleBtns");

// Turns the quiz container into dark mode
black.addEventListener("click", () => {
    quizSection.style.backgroundColor = "rgba(37, 37, 36, 0.9)"; 
    quizSection.style.color = "rgb(243, 243, 242)";
})

// Turns the quiz container into light mode
milk.addEventListener("click", () => {
    quizSection.style.backgroundColor = "rgb(243, 243, 242, 0.9)" 
    quizSection.style.color = "rgba(37, 37, 36)";
})

//Styles the currently active dark/light mode buttons
let btns = toggleBtns.getElementsByClassName("btn");
for (let i = 0; i < btns.length; i++) {
btns[i].addEventListener("click", function() {
let current = document.getElementsByClassName("active");
current[0].className = current[0].className.replace(" active", "");
this.className += " active";
});
}

// The function that wraps all other functions ( called on line 237 )
(function(){
// Renders out the context of the quiz   
    function renderQuiz(){
      // variable to store the HTML output
      const output = [];
      // for each question...
      quiz.forEach(
      (currentQuestion, questionIndex) => {
          // variable to store the list of options
          const answers = [];
  
          // For each option
          for(letter in currentQuestion.options) {
            // Adds a radio button
            answers.push(
              `<label>
                <input type="radio" name="question${questionIndex}" value="${letter}">
                ${letter} :
                ${currentQuestion.options[letter]}
              </label>`
            );
          }
          // Adds the questions and all the options to output
          output.push(
            `<div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join('')} </div>`
          );
        }
      );
  
      // Combines the output list into one string and renders it to the page
      quizContainer.innerHTML = output.join('');
    }
  
    /* Function that checks the users answers - adds to the score variable for each correct answer. Called on line 236, on 'click' */
    function displayScore(){
      // Keeps all answer containers from the quiz
      const answerContainers = quizContainer.querySelectorAll('.answers');
      // Tracks the score
      let score = 0;
  
      quiz.forEach( (currentQuestion, questionIndex) => {

        /* The button 'try again' unchecks all radio inputs, removes the styling that is rendered, removes the score text, up on callling displayscore() */
        retryButton.addEventListener("click", (e) => {
          let radioBtns = document.querySelectorAll('input');
          for(let i = 0; i < radioBtns.length; i++){
            if(radioBtns[i].checked === true){
              radioBtns[i].checked = false;
            }
          }
          // Changes color of the answer options to the original one
          answerContainers[questionIndex].style.color = 'inherit';
          // Sets the content of the score text to an empty string
          resultsContainer.innerHTML = "";
          });
  
        /* Variables for the questions, checked input and the value / non value of the users answers */
        const answerContainer = answerContainers[questionIndex];
        const selector = `input[name=question${questionIndex}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
        // If the answer is correct
        if(userAnswer === currentQuestion.correct){
          // Adds to the score
          score++;
          // Changes color of answer to limegreen, when correct
          answerContainers[questionIndex].style.color = 'limegreen';
        }
        // If the answer is wrong or unselected
        else {
        // Changes color of answer to red
        answerContainers[questionIndex].style.color = 'red';
        }
      });
      
      // Calculates the percentage of score based on the quiz length
      let scorePercentage = score*100/quiz.length;
      // If user scores above 75 percent
      if (scorePercentage > 75) {
      // Colors the score text limegreen  
        resultsContainer.style.color = 'limegreen';
      // If user scores above 50 percent  
      } else if (scorePercentage > 50) {
         // Colors the score text orange
        resultsContainer.style.color = 'orange';
      }
      // Sets the content of the score text that appears when clicking 'Check score'
      resultsContainer.innerHTML = `<p>You scored : ${score} out of ${quiz.length}</p>`;
      
    }
  
    // Variables for the containers and buttons
    const quizContainer = document.querySelector('#quizContainer');
    const resultsContainer = document.querySelector('#results');
    const checkButton = document.querySelector('#checkButton');
    const retryButton = document.querySelector('#retry');

   
  // Objects with question sections within an array
let quiz = [
  {
      question: "I vilket land produceras det mest kaffe?",
      options: { 
      a: "Kolombia",
      b: "Brasilien",
      c: "Indonesien",
      d: "Vietnam"
  },
      correct: "b"
  },
  {
      question: "I vilket land konsumeras det mest kaffe?",
      options: {
      a: "Italien",
      b: "Belgien",
      c: "Finland",
      d: "Kanada"
  },
      correct: "c"
  },
  {
      question: "Ordet kaffe betyder vin på det språket det härstammar ifrån. Vilket språk är det?",
      options: {
      a: "Arabiska",
      b: "Ryska",
      c: "Turkiska",
      d: "Grekiska"
  },
      correct: "a"
  },
  {
      question: "Hur många kalorier finns i en kopp kaffe?",
      options: {
      a: "1",
      b: "5",
      c: "14",
      d: "7"
  },
      correct: "a"
  },
  {
      question: "Vem upptäckte kaffet?",
      options: {
      a: "En bonde",
      b: "En fåraherde",
      c: "En munk",
      d: "En jägare"
  },
      correct: "b"
  },
  {
      question: "På vilket djurs avföring är världens dyraste kaffe gjord på?",
      options: {
      a: "Mus",
      b: "Fågel",
      c: "Apa",
      d: "Katt"
  }, 
      correct: "d"
  },
  {
      question: "När kom kaffet till Sverige?",
      options: {
      a: "1700-talet",
      b: "1800-talet",
      c: "1400-talet",
      d: "1600-talet"
  },
      correct: "d"
  },
  {
      question: "Vilket av dessa alternativ är en typ av kaffe?",
      options: {
      a: "Arabica",
      b: "Mocca",
      c: "Java"
  },
  correct: "a"
  },
  {
      question: "Välj den delstaten i U.S.A som odlar kaffebönor?",
      options: {
      a: "Georgia",
      b: "Hawaii",
      c: "Florida"
  },
  correct: "b"
  },
  {
      question: "Hur förvaras kaffe som bäst?",
      options: {
      a: "I kylskåp",
      b: "Öppet",
      c: "Mörkt"
  },
  correct: "c"
  }
  ];
  
    // Renders out the quiz 
    renderQuiz();

    /* Event listener for the 'Check score' button that has the function displayScore() as it's parameter */
    checkButton.addEventListener('click', displayScore);
  })();
















