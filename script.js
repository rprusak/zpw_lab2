const QUESTIONS = [
	{
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod vel tortor eget dignissim. Sed mi mauris, tincidunt non dui nec, mattis suscipit dolor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam bibendum feugiat scelerisque. Nam ullamcorper viverra velit, sit amet euismod nibh elementum ut. Aliquam vel aliquet nulla. Integer feugiat id augue vitae malesuada. Curabitur sed elit quis dolor placerat convallis vitae eget mi. Nunc feugiat odio vel justo iaculis, vitae luctus sem interdum. Nulla facilisi. Sed aliquet dui vitae libero mattis consequat. Vestibulum nec nunc et libero viverra vehicula nec a nunc. ",
		answers: ["vitae", "luctus", "sem", "interdum"],
		valid: "vitae"
	},
	{
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod vel tortor eget dignissim. Sed mi mauris, tincidunt non dui nec, mattis suscipit dolor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam bibendum feugiat scelerisque. Nam ullamcorper viverra velit, sit amet euismod nibh elementum ut. Aliquam vel aliquet nulla. Integer feugiat id augue vitae malesuada. Curabitur sed elit quis dolor placerat convallis vitae eget mi. Nunc feugiat odio vel justo iaculis, vitae luctus sem interdum. Nulla facilisi. Sed aliquet dui vitae libero mattis consequat. Vestibulum nec nunc et libero viverra vehicula nec a nunc. ",
		answers: [ "Sed", "aliquet", "dui", "vitae"],
		valid: "Sed"
	},
	{
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod vel tortor eget dignissim. Sed mi mauris, tincidunt non dui nec, mattis suscipit dolor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam bibendum feugiat scelerisque. Nam ullamcorper viverra velit, sit amet euismod nibh elementum ut. Aliquam vel aliquet nulla. Integer feugiat id augue vitae malesuada. Curabitur sed elit quis dolor placerat convallis vitae eget mi. Nunc feugiat odio vel justo iaculis, vitae luctus sem interdum. Nulla facilisi. Sed aliquet dui vitae libero mattis consequat. Vestibulum nec nunc et libero viverra vehicula nec a nunc. ",
		answers: ["tincidunt","non", "dui", "nec"],
		valid: "nec"
	},
	{
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod vel tortor eget dignissim. Sed mi mauris, tincidunt non dui nec, mattis suscipit dolor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam bibendum feugiat scelerisque. Nam ullamcorper viverra velit, sit amet euismod nibh elementum ut. Aliquam vel aliquet nulla. Integer feugiat id augue vitae malesuada. Curabitur sed elit quis dolor placerat convallis vitae eget mi. Nunc feugiat odio vel justo iaculis, vitae luctus sem interdum. Nulla facilisi. Sed aliquet dui vitae libero mattis consequat. Vestibulum nec nunc et libero viverra vehicula nec a nunc. ",
		answers: ["Lorem", "ipsum", "dolor", "sit"],
		valid: "Lorem"
	},
	{
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod vel tortor eget dignissim. Sed mi mauris, tincidunt non dui nec, mattis suscipit dolor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam bibendum feugiat scelerisque. Nam ullamcorper viverra velit, sit amet euismod nibh elementum ut. Aliquam vel aliquet nulla. Integer feugiat id augue vitae malesuada. Curabitur sed elit quis dolor placerat convallis vitae eget mi. Nunc feugiat odio vel justo iaculis, vitae luctus sem interdum. Nulla facilisi. Sed aliquet dui vitae libero mattis consequat. Vestibulum nec nunc et libero viverra vehicula nec a nunc. ",
		answers: ["feugiat", "odio", "vel", "justo"],
		valid: "feugiat"
	},
	{
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod vel tortor eget dignissim. Sed mi mauris, tincidunt non dui nec, mattis suscipit dolor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam bibendum feugiat scelerisque. Nam ullamcorper viverra velit, sit amet euismod nibh elementum ut. Aliquam vel aliquet nulla. Integer feugiat id augue vitae malesuada. Curabitur sed elit quis dolor placerat convallis vitae eget mi. Nunc feugiat odio vel justo iaculis, vitae luctus sem interdum. Nulla facilisi. Sed aliquet dui vitae libero mattis consequat. Vestibulum nec nunc et libero viverra vehicula nec a nunc. ",
		answers: ["Nulla", "euismod", "vel", "tortor"],
		valid: "tortor"
	},
	{
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod vel tortor eget dignissim. Sed mi mauris, tincidunt non dui nec, mattis suscipit dolor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam bibendum feugiat scelerisque. Nam ullamcorper viverra velit, sit amet euismod nibh elementum ut. Aliquam vel aliquet nulla. Integer feugiat id augue vitae malesuada. Curabitur sed elit quis dolor placerat convallis vitae eget mi. Nunc feugiat odio vel justo iaculis, vitae luctus sem interdum. Nulla facilisi. Sed aliquet dui vitae libero mattis consequat. Vestibulum nec nunc et libero viverra vehicula nec a nunc. ",
		answers: ["quis", "dolor", "placerat", "convallis"],
		valid: "dolor"
	},
	{
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod vel tortor eget dignissim. Sed mi mauris, tincidunt non dui nec, mattis suscipit dolor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam bibendum feugiat scelerisque. Nam ullamcorper viverra velit, sit amet euismod nibh elementum ut. Aliquam vel aliquet nulla. Integer feugiat id augue vitae malesuada. Curabitur sed elit quis dolor placerat convallis vitae eget mi. Nunc feugiat odio vel justo iaculis, vitae luctus sem interdum. Nulla facilisi. Sed aliquet dui vitae libero mattis consequat. Vestibulum nec nunc et libero viverra vehicula nec a nunc. ",
		answers: ["id", "augue", "vitae", "malesuada"],
		valid: "vitae"
	},
	{
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod vel tortor eget dignissim. Sed mi mauris, tincidunt non dui nec, mattis suscipit dolor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam bibendum feugiat scelerisque. Nam ullamcorper viverra velit, sit amet euismod nibh elementum ut. Aliquam vel aliquet nulla. Integer feugiat id augue vitae malesuada. Curabitur sed elit quis dolor placerat convallis vitae eget mi. Nunc feugiat odio vel justo iaculis, vitae luctus sem interdum. Nulla facilisi. Sed aliquet dui vitae libero mattis consequat. Vestibulum nec nunc et libero viverra vehicula nec a nunc. ",
		answers: ["Vestibulum", "nec", "nunc", "et"],
		valid: "nec"
	},
	{
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod vel tortor eget dignissim. Sed mi mauris, tincidunt non dui nec, mattis suscipit dolor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam bibendum feugiat scelerisque. Nam ullamcorper viverra velit, sit amet euismod nibh elementum ut. Aliquam vel aliquet nulla. Integer feugiat id augue vitae malesuada. Curabitur sed elit quis dolor placerat convallis vitae eget mi. Nunc feugiat odio vel justo iaculis, vitae luctus sem interdum. Nulla facilisi. Sed aliquet dui vitae libero mattis consequat. Vestibulum nec nunc et libero viverra vehicula nec a nunc. ",
		answers: ["Sed", "mi", "mauris", "tincidunt"],
		valid: "mi"
	}
];

let currentQuestion = 0;

function loadQuestion(questionNumber) {
	let question = QUESTIONS[questionNumber];
	setQuestionTitle("Question " + (questionNumber + 1));
	setQuestionText(question.text);
	removeCheckedAnswer();
	setAnswers(question.answers);
	startTimer();
}

function setQuestionTitle(title) {
	$('#questionTitle').html(title);
}

function setQuestionText(text) {
	$('#questionText').html(text);
}

function removeCheckedAnswer() {
	$("#answer1").prop('checked', false);
	$("#answer2").prop('checked', false);
	$("#answer3").prop('checked', false);
	$("#answer4").prop('checked', false);
}

function setAnswers(answers) {
	$("#answer1Text").text(answers[0]);
	$("#answer2Text").text(answers[1]);
	$("#answer3Text").text(answers[2]);
	$("#answer4Text").text(answers[3]);
}

function onValidAnswer() {
	validAnswers++;
	displayAnswersCount();
	stopTimer();
	if (currentQuestion == 9)
		endQuiz();
	else
		loadNextQuestion();
}

function onInvalidAnswer() {
	invalidAnswers++;
	displayAnswersCount();
	stopTimer();
	if (currentQuestion == 9)
		endQuiz();
	else
		loadNextQuestion();
}

function onMissedAnswer() {
	missedAnswers++;
	displayAnswersCount();
	stopTimer();
	if (currentQuestion == 9)
		endQuiz();
	else
		loadNextQuestion();
}

function startQuiz() {
	currentQuestion = 0;
	validAnswers = 0;
	invalidAnswers = 0;
	missedAnswers = 0;
	displayAnswersCount();
	loadQuestion(currentQuestion);
	showQuizControlls();
	hideAnswers();
}

function endQuiz() {
	stopTimer();
	hideQuizControlls();
	updateAnswers();
	showAnswers();
}

function loadNextQuestion() {
	currentQuestion++;
	loadQuestion(currentQuestion);
}

let validAnswers = 0;
let invalidAnswers = 0;
let missedAnswers = 0;

function displayAnswersCount() {
	$('#validAnswersProgressBar').css('width', (validAnswers * 10) + "%");
	if (validAnswers == 0)
		$('#validAnswersProgressBar').html("");
	else
		$('#validAnswersProgressBar').html(validAnswers);

	$('#invalidAnswersProgressBar').css('width', (invalidAnswers * 10) + "%");
	if (invalidAnswers == 0)
		$('#invalidAnswersProgressBar').html("");
	else
		$('#invalidAnswersProgressBar').html(invalidAnswers);
	$('#missedAnswersProgressBar').css('width', (missedAnswers * 10) + "%");
	if (missedAnswers == 0)
		$('#missedAnswersProgressBar').html("");
	else
		$('#missedAnswersProgressBar').html(missedAnswers);
}

function setTimeLeft(time) {
	$('#timeProgressBar').css('width', (time * 5) + "%");
}

function hideQuizControlls() {
	$("#startQuizContainer").show();
	$("#progressBarsContainer").hide();
	$("#questionContainer").hide();
	$("#endQuizContainer").hide();
}

function showQuizControlls() {
	$("#startQuizContainer").hide();
	$("#progressBarsContainer").show();
	$("#questionContainer").show();
	$("#endQuizContainer").show();
}

// answers

let totalValid = 0;
let totalInvalid = 0;
let totalMissed = 0;
let rounds = 0;

function updateAnswers() {
	missedAnswers = 10 - validAnswers - invalidAnswers;
	totalValid += validAnswers;
	totalInvalid += invalidAnswers;
	totalMissed += missedAnswers;
	rounds++;

	$("#thisRoundValid").text(validAnswers);
	$("#thisRoundInvalid").text(invalidAnswers);
	$("#thisRoundMissed").text(missedAnswers);
	$("#averageValid").text(totalValid / rounds);
	$("#averageInvalid").text(totalInvalid / rounds);
	$("#averageMissed").text(totalMissed / rounds);
}

function showAnswers() {
	$("#answersContainer").show();
}

function hideAnswers() {
	$("#answersContainer").hide();
}

// timer

let timeLeft = 20;
let timerId = 0;

function startTimer() {
	setTimeLeft(timeLeft);
	timerId = setInterval(checkTimeLeft, 1000);
}

function stopTimer() {
	if (timerId != null) {
		clearInterval(timerId);
		timerId = null;
	}

	timeLeft = 20;
}

function checkTimeLeft() {
	timeLeft--;
	setTimeLeft(timeLeft);
	if (timeLeft == 0)
		onMissedAnswer();
}

// callbacks

function onStartQuizButtonClicked() {
	startQuiz();
}

function onEndQuizButtonClicked() {
	endQuiz();
}

function onAnswer1Selected() {
	if ($("#answer1Text").text() == QUESTIONS[currentQuestion].valid)
		onValidAnswer();
	else
		onInvalidAnswer();
}

function onAnswer2Selected() {
	if ($("#answer2Text").text() == QUESTIONS[currentQuestion].valid)
		onValidAnswer();
	else
		onInvalidAnswer();
}

function onAnswer3Selected() {
	if ($("#answer3Text").text() == QUESTIONS[currentQuestion].valid)
		onValidAnswer();
	else
		onInvalidAnswer();
}

function onAnswer4Selected() {
	if ($("#answer4Text").text() == QUESTIONS[currentQuestion].valid)
		onValidAnswer();
	else
		onInvalidAnswer();
}

function initializeCallbacks() {
	$("#startQuizButton").on("click", onStartQuizButtonClicked);
	$("#endQuizButton").on("click", onEndQuizButtonClicked);
	$("#answer1").on('input', onAnswer1Selected);
	$("#answer2").on('input', onAnswer2Selected);
	$("#answer3").on('input', onAnswer3Selected);
	$("#answer4").on('input', onAnswer4Selected);
}

$( document ).ready(function() {
	initializeCallbacks();
	setTimeLeft(20);
	displayAnswersCount();
	hideQuizControlls();
	hideAnswers();
});
