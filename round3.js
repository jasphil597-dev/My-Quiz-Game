const quizData = [
	{
		question:
			'What wireless telecom company is a wholly-owned subsidiary of AT&T and shares its name with the insects in the Gryllidae family?',
		a: 'Cricket',
		b: 'T mobil',
		c: 'Verizon',
		correct: 'a',
	},
	{
		question:
			'THINK was the company motto for more than 40 years, for the company often referred to as "Big Blue." What is this frequently-acronymed company?',
		a: 'google',
		b: 'JetBlue',
		c: 'IBM',
		correct: 'c',
	},
	{
		question:
			'What delicious computer term did web browser programmer Lou Montulli coin to refer to information that is sent from the browser to the web server?',
		a: 'Cookie',
		b: 'Honey pot',
		c: 'Trojan',
		correct: 'a',
	},
	{
		question:
			'In education, the acronym STEM stands for science, technology, engineering, and mathematics. When an A is added to form the acronym STEAM, what does the A stand for?',
		a: 'Apple',
		b: 'Albatros',
		c: 'Arts',
		correct: 'c',
	},
	{
		question:
			"In the nursery rhyme 'Hey, Diddle Diddle,' what type of mammal leaped over the Earth's largest satellite?",
		a: 'Monkey',
		b: 'Dog',
		c: 'Cow',
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
				quiz.innerHTML = `<h1>Congratulations! <br> <img src="https://media.giphy.com/media/UOkVAoBVDwCioMPMnS/giphy.gif?cid=ecf05e47z79sakm0vjv66ejb8rhxr45rf6rg7owhlb15avwq&ep=v1_gifs_search&rid=giphy.gif&ct=g"> </h1> <br> 
                          <h2 id='highScore'> You answered: <br> ${score} out of ${quizData.length} questions correctly.</h2>
                          <button id="levelUpBtn">Level Up</button>`;

				// Show Level Up button
				const levelUpBtn = document.getElementById('levelUpBtn');
				levelUpBtn.style.display = 'inline-block'; // Make the button visible

				// Attach the level up event listener
				levelUpBtn.addEventListener('click', () => {
					// levelUpBtn.style.display = // Reset quiz and score for the next level
					window.location.href = 'nextRound4.html';
				});
			} else {
				// User didn't pass
				quiz.innerHTML = `<h1>Hmm, not quite there! <br> <img src="https://media.giphy.com/media/l4KibWpBGWchSqCRy/giphy.gif?cid=ecf05e47jjpd61l8xt0e5y5l7f5pcs981dqoku8ezoxaa61s&ep=v1_gifs_search&rid=giphy.gif&ct=g"></h1> <br>
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
