const QUESTIONS_URL = "http://localhost:3000/questions";
const TEST_DURATION_SECONDS = 60 * 60;

let questions = [];
let answers = [];
let currentQuestionIndex = 0;
let remainingSeconds = TEST_DURATION_SECONDS;
let timerInterval = null;
let isSubmitting = false;

const questionCount = document.getElementById("questionCount");
const questionText = document.getElementById("questionText");
const timer = document.getElementById("timer");
const nextBtn = document.getElementById("nextBtn");
const submitBtn = document.getElementById("submitBtn");
const resultScore = document.getElementById("resultScore");
const resultDetails = document.getElementById("resultDetails");

if (questionText) {
  startQuiz();
}

if (resultScore && resultDetails) {
  showResult();
}

async function startQuiz() {
  try {
    const response = await fetch(QUESTIONS_URL);
    questions = await response.json();
    localStorage.setItem("mcqQuestions", JSON.stringify(questions));
    answers = loadSavedAnswers();

    showQuestion();
    startTimer();
    setupEvents();
  } catch (error) {
    questionText.textContent = "Unable to load questions. Please start the backend server.";
  }
}

function setupEvents() {
  nextBtn.addEventListener("click", () => {
    saveCurrentAnswer();

    if (currentQuestionIndex < questions.length - 1) {
      currentQuestionIndex += 1;
      showQuestion();
    }
  });

  submitBtn.addEventListener("click", () => {
    submitTest();
  });

  document.addEventListener("visibilitychange", () => {
    if (document.hidden && !isSubmitting) {
      alert("Tab switching not allowed");
      submitTest();
    }
  });
}

function showQuestion() {
  const currentQuestion = questions[currentQuestionIndex];

  if (!currentQuestion) {
    return;
  }

  questionCount.textContent = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
  questionText.textContent = currentQuestion.question;

  currentQuestion.options.forEach((option, index) => {
    document.getElementById(`option${index}`).textContent = option;
  });

  document.querySelectorAll('input[name="answer"]').forEach((input) => {
    input.checked = answers[currentQuestionIndex] === Number(input.value);
  });

  nextBtn.disabled = currentQuestionIndex === questions.length - 1;
}

function saveCurrentAnswer() {
  const selected = document.querySelector('input[name="answer"]:checked');

  if (selected) {
    answers[currentQuestionIndex] = Number(selected.value);
    localStorage.setItem("mcqAnswers", JSON.stringify(answers));
  }
}

function loadSavedAnswers() {
  const savedAnswers = localStorage.getItem("mcqAnswers");

  if (!savedAnswers) {
    return new Array(questions.length).fill(null);
  }

  const parsedAnswers = JSON.parse(savedAnswers);
  return new Array(questions.length).fill(null).map((_, index) => {
    return Number.isInteger(parsedAnswers[index]) ? parsedAnswers[index] : null;
  });
}

function startTimer() {
  updateTimerDisplay();

  timerInterval = setInterval(() => {
    remainingSeconds -= 1;
    updateTimerDisplay();

    if (remainingSeconds <= 0) {
      submitTest();
    }
  }, 1000);
}

function updateTimerDisplay() {
  const minutes = Math.floor(remainingSeconds / 60);
  const seconds = remainingSeconds % 60;

  timer.textContent = `Time: ${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function submitTest() {
  if (isSubmitting) {
    return;
  }

  isSubmitting = true;
  saveCurrentAnswer();
  clearInterval(timerInterval);

  const score = questions.reduce((total, question, index) => {
    return answers[index] === question.answer ? total + 1 : total;
  }, 0);

  const result = {
    score,
    total: questions.length,
    answers,
    results: questions.map((question, index) => ({
      id: question.id,
      question: question.question,
      selectedAnswer: answers[index] === null ? "Not answered" : question.options[answers[index]],
      correctAnswer: question.options[question.answer],
      correct: answers[index] === question.answer,
      topic: question.topic
    }))
  };

  localStorage.setItem("mcqAnswers", JSON.stringify(answers));
  localStorage.setItem("quizResult", JSON.stringify(result));
  window.location.href = "result.html";
}

function showResult() {
  const savedResult = localStorage.getItem("quizResult");

  if (!savedResult) {
    window.location.href = "quiz.html";
    return;
  }

  const result = JSON.parse(savedResult);
  resultScore.textContent = `You scored ${result.score} out of ${result.total}.`;

  resultDetails.innerHTML = result.results.map((item) => `
    <article class="result-item ${item.correct ? "correct" : "wrong"}">
      <h2>${escapeHtml(item.question)}</h2>
      <p>Your answer: ${escapeHtml(item.selectedAnswer)}</p>
      <p>Correct answer: ${escapeHtml(item.correctAnswer)}</p>
      <p>Topic: ${escapeHtml(item.topic)}</p>
    </article>
  `).join("");
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
