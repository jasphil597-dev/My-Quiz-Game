# My Quiz Game

Project Name

My Quiz Game:
A simple, interactive JavaScript-based quiz game where users can test their knowledge on various topics.

Technologies and Libraries Used

HTML5 - Markup language for structuring the content.
CSS3 - Styling the page and making the user interface visually appealing.
JavaScript - Logic and functionality behind the quiz game.
LocalStorage - Storing the player's name to persist data across sessions.

Libraries:

None (This project is built using vanilla JavaScript, CSS, and HTML)

Key Variables
currentQuiz: Tracks which question the player is currently on.
score: Keeps track of the player's score.

Motivation Behind Building the Game
I built this quiz game as a fun way to practice JavaScript and enhance my understanding of working with DOM manipulation, and creating interactive user interfaces. The game also allows players to test their knowledge on a variety of topics while interacting with a simple and intuitive interface.

My Quiz Game
Project Name
My Quiz Game: A simple, interactive JavaScript-based quiz game where users can test their knowledge on various topics.

Technologies and Libraries Used
HTML5 - Markup language for structuring the content.
CSS3 - Styling the page and making the user interface visually appealing.
JavaScript - Logic and functionality behind the quiz game.
LocalStorage - Storing the player's name to persist data across sessions.
Libraries:

None (This project is built using vanilla JavaScript, CSS, and HTML)
Data Models and Code Structure
Main Data Model
The main data structure for the quiz game is an array of objects, quizData, which holds the questions, possible answers, and the correct answer for each quiz question.

javascript
Copy code
const quizData = [
{
question: 'What does CSS stand for?',
a: 'Cascading Simple Sheets',
b: 'Cascading Style Sheets',
c: 'Central Style Sheets',
correct: 'b',
},
{
question: 'What does HTML stand for?',
a: 'HyperText Markup Language',
b: 'Hyperloop Machine Language',
c: 'Helicopters Terminal Motorboats',
correct: 'a',
},
// More questions...
];
Important Functions
loadQuiz(): Loads the current question and its choices into the DOM.

javascript
Copy code
function loadQuiz() {
deselectAnswers();
const currentQuizData = quizData[currentQuiz];
questionEl.innerText = currentQuizData.question;
a_text.innerText = currentQuizData.a;
b_text.innerText = currentQuizData.b;
c_text.innerText = currentQuizData.c;
}
getSelected(): Checks which radio button is selected by the user and returns the corresponding answer.

javascript
Copy code
function getSelected() {
let answer;
answerEls.forEach((answerEl) => {
if (answerEl.checked) {
answer = answerEl.id;
}
});
return answer;
}
startGame(): This function is called when the player starts the game. It retrieves the player's name from the input field, stores it in localStorage, and starts the quiz.

javascript
Copy code
function startGame() {
playerName = document.getElementById('playerName').value.trim();
if (playerName) {
localStorage.setItem('playerName', playerName); // Store player name in localStorage
nameInputContainer.style.display = 'none';
quizContainer.style.display = 'block';
loadQuiz();
} else {
alert('Please enter a valid name!');
}
}
Key Variables
currentQuiz: Tracks which question the player is currently on.
score: Keeps track of the player's score.
playerName: Stores the player's name, retrieved from localStorage or entered by the player.
Motivation Behind Building the Game
I built this quiz game as a fun way to practice JavaScript and enhance my understanding of working with local storage, DOM manipulation, and creating interactive user interfaces. The game also allows players to test their knowledge on a variety of topics while interacting with a simple and intuitive interface.

Process of Building It

Initial Planning:

I started by designing the basic structure of the game: a series of questions and answers.
Created a basic layout using HTML and styled it using CSS.

Challenges:

I initially had some issues with loading questions dynamically and managing the state of the quiz (e.g., current question, score, etc.).

Ups:

I enjoyed experimenting with DOM manipulation to dynamically change the questions and answers based on user interaction.

Game Description

My Quiz Game is a simple web-based quiz game where players can test their knowledge by answering a series of multiple-choice questions. Each question offers three possible answers, and the player must select the correct one. After completing all the questions, the player is shown their score and encouraged to play again.

Features:

Feedback and score display after the quiz is completed.
Simple, responsive design.
Clean, user-friendly interface.

How to Play

Starting the Game:
When the game starts, you'll be prompted to enter your name.
Click the "Start Game" button to begin.

Answering Questions:
Each question will display three possible answers (A, B, or C).
Click on the radio button next to the answer you believe is correct.

Submitting Your Answer:
After selecting your answer, click the "Submit Answer" button to move to the next question.

End of the Game:
After you’ve completed all the questions, the game will display your score along with a message based on your performance.

Level Up or Retry:
If you scored well, you will be given the option to "Level Up" and proceed to a next round (you can customize this for a real-world application).

Final Notes:
This quiz game is a fun, interactive way to test your knowledge and practice JavaScript concepts like event handling, and DOM manipulation.
