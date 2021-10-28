
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
    correct: "2"
},
{
    question: "I vilket land konsumeras det mest kaffe?",
    options: {
    a: "Italien",
    b: "Belgien",
    c: "Finland",
    d: "Kanada"
},
    correct: "3"
},
{
    question: "Ordet kaffe betyder vin på det språket det härstammar ifrån. Vilket språk är det?",
    option: {
    a: "Arabiska",
    b: "Ryska",
    c: "Turkiska",
    d: "Grekiska"
},
    correct: "1"
},
{
    question: "Hur många kalorier finns i en kopp kaffe?",
    options: {
    a: "1",
    b: "5",
    c: "14",
    d: "7"
},
    correct: "1"
},
{
    question: "Vem upptäckte kaffet?",
    options: {
    a: "En bonde",
    b: "En fåraherde",
    c: "En munk",
    d: "En jägare"
},
    correct: "2"
},
{
    question: "På vilket djurs avföring är världens dyraste kaffe gjord på?",
    options: {
    a: "Mus",
    b: "Fågel",
    c: "Apa",
    d: "Katt"
}, 
    correct: "4"
},
{
    question: "När kom kaffet till Sverige?",
    options: {
    a: "1700-talet",
    b: "1800-talet",
    c: "1400-talet",
    d: "1600-talet"
},
    correct: "4"
},
{
    question: "Vilka två av dessa alternativ är typer av kaffe?",
    options: {
    a: "Arabica",
    b: "Mocca",
    c: "Robusta",
    d: "Java"
},
correct: ["1", "3"]
},
{
    question: "Välj de enda två delstaterna i U.S.A som odlar kaffebönor?",
    options: {
    a: "Georgia",
    b: "Kalifornien",
    c: "Hawaii",
    d: "Florida"
},
correct:["2", "3"]
},
{
    question: "Hur förvaras kaffe som bäst? Välj två sätt.",
    options: {
    a: "Svalt",
    b: "I kylskåp",
    c: "Öppet",
    d: "Mörkt"
},
correct: ["1", "4"]
}
]

const quizContainer = document.querySelector("#quizContainer");

    quiz.forEach((obj) => {
        let questions = document.createElement("h4");
        questions.innerHTML = obj.question;
        quizContainer.appendChild(questions);

        let radioBtns = document.createElement("input");
        let option = document.createElement("label");
    });



// // Renders the question 

// let currentQuestion = 0;
// let correctAnswer = quiz.correct;
// let ans = document.querySelector('input[name="answer"]:checked');
// let userAnswer = ans.value;

// let qst = quiz[currentQuestion];
// let lastQuestion = currentQuestion === quiz.length -1;


// // Variable to keep track of the collected scores
// let currentScore = 0;

// // Variable for the total endscore
// let total = 0;



// // Variable for the retry and next buttons
// let retry = document.querySelector("#retry");
// let next = document.querySelector("#next");

// /* Counts the score and proceeds to the next question by writing it out
// to the quiz container. Use a for */
// next.addEventListener("click", () => {
    
// })

// // Clears the score count and returns to the first question
// retry.addEventListener("click", () => {
//     scoreCount = 0;
    
// })



