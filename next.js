const quizData = [
	{
		question: 'One gigabyte is equal to how many megabytes?',
		a: '1000',
		b: '100',
		c: '9000',
		correct: 'a',
	},
	{
		question:
			'Pierre Omidyar founded which popular online auction company in 1995 out of San Jose, California?',
		a: 'google',
		b: 'facebook',
		c: 'ebay',
		correct: 'c',
	},
	{
		question:
			'What popular operating system, launched in 1991, also has its own mascot, Tux the penguin?',
		a: 'Linux',
		b: 'Microsoft Windows',
		c: 'Unix',
		correct: 'a',
	},
	{
		question:
			"Dolly the Ewe's birth in 1996 and subsequent life helped prove the viability of what scientific and technological process?",
		a: 'Solar',
		b: 'Farming',
		c: 'Cloning',
		correct: 'c',
	},
	{
		question:
			'Often pronounced “gooey”, GUI is short for what well-known three-word tech term?',
		a: 'Guide',
		b: 'Guilt',
		c: 'Graphical User Interface',
		correct: 'c',
	},
];

/*-------------------------------- Constants --------------------------------*/

/*---------------------------- Variables (state) ----------------------------*/

/*------------------------ Cached Element References ------------------------*/

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const submitBtn = document.getElementById('submit');

const resetButton = document.getElementById('resetButton');

/*-------------------------------- Functions --------------------------------*/
let currentQuiz = 0;
let score = 0;

loadquiz();

function loadquiz() {
	deselectAnswers();
	const currentQuizData = quizData[currentQuiz];

	questionEl.innerText = currentQuizData.question;
	a_text.innerText = currentQuizData.a;
	b_text.innerText = currentQuizData.b;
	c_text.innerText = currentQuizData.c;
}

function deselectAnswers() {
	answerEls.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected() {
	let answer;

	answerEls.forEach((answerEl) => {
		if (answerEl.checked) {
			answer = answerEl.id;
		}
	});
	return answer;
}

/*----------------------------- Event Listeners -----------------------------*/
/*----------------------------- Event Listeners -----------------------------*/
loadquiz();

submitBtn.addEventListener('click', () => {
	const answer = getSelected(); // Get selected answer

	if (answer) {
		if (answer === quizData[currentQuiz].correct) {
			score++; // Increment score if correct
		}

		currentQuiz++; // Move to the next question

		if (currentQuiz < quizData.length) {
			loadquiz(); // Load next question
		} else {
			// Quiz has ended, display result
			if (score >= 3) {
				// User passed with more than 3 correct answers
				quiz.innerHTML = `<h1>Congratulations! <br> <img src="https://media.giphy.com/media/muGLM5k34ykeFux2Mr/giphy.gif?cid=ecf05e475hsjeqgx3ud9ppj643ykzvdmygqzgqb4wszp548q&ep=v1_gifs_search&rid=giphy.gif&ct=g"> </h1> <br> 
                          <h2 id='highScore'> You answered: <br> ${score} out of ${quizData.length} questions correctly.</h2>
                          <button id="levelUpBtn">Level Up</button>`;

				// Show Level Up button
				const levelUpBtn = document.getElementById('levelUpBtn');
				levelUpBtn.style.display = 'inline-block'; // Make the button visible

				// Attach the level up event listener
				levelUpBtn.addEventListener('click', () => {
					// levelUpBtn.style.display = // Reset quiz and score for the next level
					window.location.href = 'round3.html';
				});
			} else {
				// User didn't pass
				quiz.innerHTML = `<h1>Hmm, not quite there! <br> <img src="https://media.giphy.com/media/3otPoRTHyeUizsODp6/giphy.gif?cid=ecf05e473xc6lg7rhfzmnr7653f9w4nylrom7zqd5x8qxuy0&ep=v1_gifs_search&rid=giphy.gif&ct=g"></h1> <br>
                          <h2 id='msg'> You answered: <br> ${score} out of ${quizData.length}. Try again!</h2>
                          <button onclick="location.href = 'index.html';">Go to Home</button>`;
			}
		}
		if (resetButton) {
			resetButton.addEventListener('click', () => {
				window.location.href = 'index.html';
			});
		}
	}
});

//  Handle clicking the 'Reset button

resetButton.addEventListener('click', () => {
	//  Reset the game to initial state
	currentQuiz = 0;
	score = 0;
	loadquiz();
	deselectAnswers();
});

loadquiz();
