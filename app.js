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
	{
		question: 'Which language runs in a browser?',
		a: 'Java',
		b: 'Python',
		c: 'JavaScript',
		correct: 'c',
	},
	{
		question: 'What year was JavaScript launched?',
		a: '1996',
		b: '1995',
		c: '1994',
		correct: 'b',
	},
	{
		question: "Where can you find the world's most crooked street?",
		a: 'San Francisco, USA',
		b: 'Paris, France',
		c: 'Sydney, Australia',
		correct: 'a',
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
	const answer = getSelected();

	if (answer) {
		if (answer === quizData[currentQuiz].correct) {
			score++;
		}

		currentQuiz++;

		if (currentQuiz < quizData.length) {
			loadquiz(); // Load next question
		} else {
			// Quiz has ended, display result
			if (score >= 3) {
				// User passed with more than 3 correct answers
				quiz.innerHTML = `<h1>Congratulations! <br> <img src="https://media.giphy.com/media/bIrp9yINGoKmiOZTf0/giphy.gif?cid=ecf05e47q957nqvgu2ppuzmytthdrgyvu1hzywioyzqzde3c&ep=v1_gifs_search&rid=giphy.gif&ct=g"> </h1> <br> 
                          <h2 id='highScore'> You answered: <br> ${score} out of ${quizData.length} questions correctly.</h2>
                          <button id="levelUpBtn">Level Up</button>`;

				// Show Level Up button
				const levelUpBtn = document.getElementById('levelUpBtn');
				levelUpBtn.style.display = 'inline-block'; // Make the button visible

				// Attach the level up event listener
				levelUpBtn.addEventListener('click', () => {
					// levelUpBtn.style.display = // Reset quiz and score for the next level
					window.location.href = 'nextRound.html';
				});
			} else {
				// User didn't pass
				quiz.innerHTML = `<h1>Hmm, not quite there! <br> <img src="https://media.giphy.com/media/l1AsKxPkJ1H718KcM/giphy.gif?cid=ecf05e473xc6lg7rhfzmnr7653f9w4nylrom7zqd5x8qxuy0&ep=v1_gifs_search&rid=giphy.gif&ct=g"></h1> <br>
                          <h2 id='msg'> You answered: <br> ${score} out of ${quizData.length}. Try again!</h2>
                          <button onclick="location.reload()">Reload</button>`;
			}
		}
	}
});
