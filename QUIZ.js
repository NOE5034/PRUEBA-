const quizData = [
    {
    question: "Ella te ama ?",
    a: "Si",
    b: "No",
    correct: "b",
    },
    {
    question: "Te quiere como novio?",
    a: "Si",
    b: "No",
    correct: "b",
    },
    {
    question: "Te quiere como amigo",
    a: "Si",
    b: "No",
    correct: "a",
    },
    {
    question: "Crees que te ama?",
    a: "Si",
    b: "No",
    correct: "a",
    },
    ];
    const quiz = document.getElementById("quiz");
    const answerElements = document.querySelectorAll(".answer");
    const questionElement = document.getElementById("question");
    const a_text = document.getElementById("a_text");
    const b_text = document.getElementById("b_text");
    const submitButton = document.getElementById("submit");
    let currentQuiz = 0;
    let score = 0;
    const deselectAnswers = () => {
    answerElements.forEach((answer) => (answer.checked = false));
    };
    const getSelected = () => {
    let answer;
    answerElements.forEach((answerElement) => {
    if (answerElement.checked) answer = answerElement.id;
    });
    return answer;
    };
    const loadQuiz = () => {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionElement.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    };
    loadQuiz();
    submitButton.addEventListener("click", () => {
    const answer = getSelected();
    if (answer) {
    if (answer === quizData[currentQuiz].correct) score++;
    currentQuiz++;
    if (currentQuiz < quizData.length) loadQuiz();
    else {
    quiz.innerHTML = `
    <h2>Tu puntuacion ${score}/${quizData.length}<br>
    NOTA: <br>
    Si tu puntuacion es 1/4 o 2/4 (Ella no te ama)<br>
    Si tu puntuación es 3/4 o 4/4 (Ella si te ama)</h2>
    <button onclick="history.go(0)">Play Again</button>
    ` // location.reload() won't work in CodePen for security reasons;
    }
    }
    });
