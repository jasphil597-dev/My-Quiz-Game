# My Quiz Game

### Project Name - My Quiz Game:

A simple, interactive JavaScript-based quiz game where users can test their knowledge on various topics.

![image](./Screenshot%202024-11-07%20at%2012.50.48 PM.png)

---

#### Link to the deployed game:

https://extraordinary-elf-315c91.netlify.app/

---

#### Motivation Behind Building the Game

I built this quiz game as a fun way to practice JavaScript and enhance my understanding of working with DOM manipulation, and creating interactive user interfaces. The game also allows players to test their knowledge on a variety of topics while interacting with a simple and intuitive interface.

#### Technologies and Libraries Used

HTML5 - Markup language for structuring the content.
CSS3 - Styling the page and making the user interface visually appealing.
JavaScript - Logic and functionality behind the quiz game.
LocalStorage - Storing the player's name to persist data across sessions.

#### Libraries:

None (This project is built using vanilla JavaScript, CSS, and HTML)

---

#### Key Variables

#### currentQuiz:

- Tracks which question the player is currently on.

#### score:

- Keeps track of the player's score.

##### javascript

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

#### Important Functions

##### loadQuiz():

- Loads the current question and its choices into the DOM.

##### getSelected():

- Checks which radio button is selected by the user and returns the corresponding answer.

function getSelected() {
let answer;
answerEls.forEach((answerEl) => {
if (answerEl.checked) {
answer = answerEl.id;
}
});
return answer;
}

##### startGame():

- This function is called when the player starts the game. It retrieves the player's name from the input field, stores it in localStorage, and starts the quiz.

#### Process of Building It

##### Initial Planning:

I started by designing the basic structure of the game:

- a series of questions and answers.
- Created a basic layout using HTML and styled it using CSS.

---

#### Wire Frames

![image](./Screenshot%202024-11-05%20at%205.04.25 PM.png)
![image](./Screenshot%202024-11-05%20at%205.14.36 PM.png)
![image](./Screenshot%202024-11-06%20at%209.41.16 AM.png)

---

#### Challenges:

I initially had some issues with loading questions dynamically and managing the state of the quiz (e.g., current question, score, etc.).

#### Ups:

I enjoyed experimenting with DOM manipulation to dynamically change the questions and answers based on user interaction.

---

#### Game Description

My Quiz Game is a simple web-based quiz game where players can test their knowledge by answering a series of multiple-choice questions. Each question offers three possible answers, and the player must select the correct one. After completing all the questions, the player is shown their score and encouraged to play again.

---

#### Features:

Feedback and score display after the quiz is completed.
Simple, responsive design.
Clean, user-friendly interface.

---

#### How to Play

##### Starting the Game:

- Click the "Start Game" button to begin.

##### Answering Questions:

- Each question will display three possible answers (A, B, or C).
- Click on the radio button next to the answer you believe is correct.

##### Submitting Your Answer:

- After selecting your answer, click the "Submit Answer" button to move to the next question.

##### End of the Game:

- After you’ve completed all the questions, the game will display your score along with a message based on your performance.

##### Level Up or Retry:

- If you scored well, you will be given the option to "Level Up" and proceed to a next round (you can customize this for a real-world application).

---

#### Final Notes:

- This quiz game is a fun, interactive way to test your knowledge and practice JavaScript concepts like event handling, and DOM manipulation.

---

#### References:

- https://generalassembly.instructure.com/courses/573/modules
- https://www.w3schools.com/
- https://developer.mozilla.org/en-US/
- https://chatgpt.com/

* https://www.geeksforgeeks.org/

---

### Special Thanks

###### "Thank you to our instructors for your invaluable help and support. We truly appreciate your guidance and dedication."
