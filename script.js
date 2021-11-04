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

// Renders out the content of the quiz
(function(){ 
function renderQuiz() {

    const quizContainer = document.querySelector("#quizContainer");
    let quizStr = '';

    // Loops over the object properties (obj) and also takes an index parameter
    quiz.forEach((obj, questionIndex) => {
    // Empty string to keep the li element containing the label and input
        let answerStr = ''; 
        //Loops over the options object inside of the array quiz
        for(const option in obj.options){
            /* If it has an object that has an array as a value it renders the inputs as checkboxes */
            if(Array.isArray(obj.correct)=== true){
                answerStr += `
                <li>
                <label>
                <input 
                value=""
                type="checkbox"
                name="question-${questionIndex}"
                data-correct="${obj.correct}"
                >
                ${obj.options[option]}
                </label>
                <li> `;
                /* Else it renders the inputs as radiobuttons */
            } else {
                answerStr += `
                <li>
                <label>
                <input 
                type="radio"
                name="question-${questionIndex}"
                data-correct="${obj.correct}"
                >
                ${obj.options[option]}
                </label>
                <li> `;
            } 
        }
        quizStr += `
        <form>
            <h3>${obj.question}</h3>
            <ul>
            ${answerStr}
            </ul>
        </form> `;
    })

    quizContainer.innerHTML = quizStr;
}

const resultsContainer = document.querySelector("#results");
// Adds held score to total and displays a text with the score
function displayScore(){

    const answerContainer = [];

    quiz.forEach((obj, questionIndex) => {

        let userAnswer = `input[name="question-${questionIndex}]:checked`;
        let answers = [];
        
        if(userAnswer >= 2){
            userAnswer.forEach(e => {
            let selected = e.target.userAnswer;
            answers.push(selected);
        })
        } else {
            answers = userAnswer[0];
        }
        answerContainer.push(answers);
    });

let score = 0;

for(let i = 0; i < quiz.length; i++){
    let correctAnswer = quiz[i].correct;
    let userChoice = answerContainer[0];

    if(Array.isArray(correctAnswer)){
        if(JSON.stringify(correctAnswer) === JSON.stringify(userChoice)) {
            score++;
        }
    } else if (correctAnswer === userChoice){
        score++;
    }
}

    resultsContainer.innerHTML = `<p>You scored : ${score} / ${quiz.length}</p>`;
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
        question: "Vilka två av dessa alternativ är typer av kaffe?",
        options: {
        a: "Arabica",
        b: "Mocca",
        c: "Robusta",
        d: "Java"
    },
    correct: ["a", "c"]
    },
    {
        question: "Välj de enda två delstaterna i U.S.A som odlar kaffebönor?",
        options: {
        a: "Georgia",
        b: "Kalifornien",
        c: "Hawaii",
        d: "Florida"
    },
    correct:["b", "c"]
    },
    {
        question: "Hur förvaras kaffe som bäst? Välj två sätt.",
        options: {
        a: "Svalt",
        b: "I kylskåp",
        c: "Öppet",
        d: "Mörkt"
    },
    correct: ["a", "d"]
    }
    ];

    renderQuiz(); 

    let checkButton = document.querySelector("#check");
checkButton.addEventListener("click", displayScore)
})();

// // Unchecks all radios, checkboxes and resets the score to 0 on click. Re render renderquiz function.
// let retryButton = document.querySelector("#retry");
// retryButton.addEventListener("click", () => {
//     buttonContainer.appendChild(checkButton);
//     scoreText.remove();
//     score = 0;
//     userSelection = [];
//     radioButtons.checked = false;
//     checkBoxes.checked = false;
// })














