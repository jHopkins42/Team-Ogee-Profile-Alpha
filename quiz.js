const quizData = [
 /*   {
        question: "Are you ready to begin?",
        a: "5",
        b: "4",
        c: "3",
        d: "2",
        e: "1",
        correct: " ",
    },*/
    {
        question: "What does 'HTML' stand for?",
        a: "Head Text Major League",
        b: "Hyper Text Markup Language",
        c: "Having Tea Meant Less",
        d: "Hyper Text Markup Lingo",
        e: "Hypertext Markup Language",
        correct: "e",
    },
    {
        question: "What is Javascript?",
        a: "A pared-down version of Java.",
        b: "When a pen writes without ink.",
        c: "A dynamic, untyped or interpreted programming langauge.",
        d: "A high-level, dynamic, untyped, and interpreted programming language.",
        e: "Torture",
        correct: "d",
    },
    {
        question: "Where is web page styling done?",
        a: "In an HTML element.",
        b: "In either the HTML element or the CSS file.",
        c: "On the .js file.",
        d: "In the .css file.",
        e: "In dark alleys late at night.",
        correct: "b",
    },
    {
        question: "What does 'CSS' stand for?",
        a: "Creating Super Style",
        b: "Cascading Style Sheets",
        c: "Cascading Sheets of Style",
        d: "Cheeky narciSSism",
        e: "Code Style Sheet",
        correct: "b",
    },
    {
        question: "Where should JavaScript be placed?",
        a: "In the <head> section.",
        b: "On a page.",
        c: "In the <body> section.",
        d: "In it's own file.",
        e: "Either the <head> or <body> can be used.",
        correct: "e",
    },
    {
        question: "What is the difference between '==' and '==='?",
        a: "Strict versus equality",
        b: "Equality versus Strict",
        c: "How certain are you about the answer.",
        d: "It's a test to see if you're drunk.",
        e: "Typesetter's apprentice card test.",
        correct: "b",
    },
    {
        question: "Is this not the best quiz out there?",
        a: "You're kidding, right?",
        b: "No",
        c: "I've seen better.",
        d: "Yes",
        e: "This is awesome!",
        correct: "d",
    },
    {
        question: "The answers of this question are 'blank' while the question is a 'blank'.",
        a: "children, parents",
        b: "descendants, ancestors",
        c: "followers, test",
        d: "below, on top",
        e: "siblings, parent",
        correct: "a",
    },
    {
        question: "Where does the JavaScript go?",
        a: "<srcipt>",
        b: "'script'",
        c: "<js>",
        d: "<javascript>",
        e: "<script>",
        correct: "e",
    },
    {
        question: "Are semi colons needed?",
        a: "No",
        b: "Yes",
        c: "Sometimes",
        d: "Squirrel!",
        e: "What was the question again?",
        correct: "c",
    },
];
/*note: some questions and answers were sourced from the publication created by Fabio Cimo.
The publication can be found here: https://www.webcodegeeks.com/wp-content/uploads/2016/01/JavaScript-Interview-Questions.pdf */

/*populating the questions and possible answers*/

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const d_text = document.getElementById('d_text');
const c_text = document.getElementById('c_text');
const e_text = document.getElementById('e_text');
const submitBtn = document.getElementById('submit');

/*variables for score keeping */
let currentScore = 0
let score = 0

loadQuiz()

/* how the quiz actually quizzes */
function loadQuiz() {

    deselectAnswers();

    const currentQzData = quizData[currentScore];

    questionEl.innerText = currentQzData.question;
    a_text.innerText = currentQzData.a;
    b_text.innerText = currentQzData.b;
    c_text.innerText = currentQzData.c;
    d_text.innerText = currentQzData.d;
    e_text.innerText = currentQzData.e;
}

function deselectAnswers() {
    answerEls.forEach(answerEls => answerEls.checked = false)
}
        
function getSelected() {
    let answerEls
    answerels.forEach(answerEl=> {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
 
/*scoreing code*/
const scoreScore = document.getElementById("score-score");

Element.addEventListener("click", next);
function next() {
    submitBtn
    const answer = getSelected()
    if(answer){
        if(answer === quizData[currentQuiz].correct) {
            score++
        }
        currentQuiz++
        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML
        }
    }
    
}