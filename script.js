// Variable for the section with all elements
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
    options: {
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


// Renders out the content of the quiz
function renderQuiz() {

    // Variable for the container that will keep all the elements below
    const quizContainer = document.querySelector("#quizContainer");

    // Empty string to keep the form containing the question and ul
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
        </form> `
    })
    // Assigns the quizContainer the contents of quizStr
    quizContainer.innerHTML = quizStr;

    
    // Clears the score count and returns to the first question
    // let retry = document.querySelector("#retry");
    // retry.addEventListener("click", () => {
    //   
    // })

    
// Variable to keep track of the collected scores
// Variable for the total endscore
function countScore (){
    // for( let answ in quiz){
//     let userAnswer = input.correct(quiz.options);
//     if userAnswer === answ.correct{
//         let score = 0;
//         score++;
//     }
//     let total = 0;
//     //Collects the score and outputs it into another div
//     let check = document.querySelector("#check");
//     check.addEventListener("click", () => {
//     total = score;
//     quizContainer.innerHTML = `
//     <p>Your total score is ${total} / 10</p>
//     `
// })
// }
}


}

renderQuiz(); // Function call











