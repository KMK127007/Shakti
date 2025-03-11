document.addEventListener("DOMContentLoaded", function () {
    let progress = 0;
    const progressBar = document.getElementById("progress-bar");
    const lessonContent = document.getElementById("lesson-content");
    const recommendation = document.getElementById("recommendation");
    const learningPathSection = document.getElementById("learning-path");
    const progressSection = document.getElementById("progress");
    const quizSection = document.getElementById("quiz-section");
    const quizQuestion = document.getElementById("quiz-question");
    const quizOptions = document.getElementById("quiz-options");
    const quizFeedback = document.getElementById("quiz-feedback");
    const startQuizButton = document.getElementById("start-quiz");

    function toggleSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section.style.display === "none" || section.style.display === "") {
            section.style.display = "block";
        } else {
            section.style.display = "none";
        }
    }

    document.querySelector("a[href='#interactive-lesson']").addEventListener("click", () => toggleSection("interactive-lesson"));
    document.querySelector("a[href='#learning-path']").addEventListener("click", () => toggleSection("learning-path"));
    document.querySelector("a[href='#progress']").addEventListener("click", () => toggleSection("progress"));
    document.querySelector("a[href='#quiz-section']").addEventListener("click", () => toggleSection("quiz-section"));

    function startLesson() {
        lessonContent.textContent = "Loading your personalized lesson...";
        setTimeout(() => {
            lessonContent.textContent = "Welcome to your first interactive lesson!";
            updateProgress(30);
            showLearningPath();
        }, 2000);
    }

    function updateProgress(value) {
        progress += value;
        if (progress > 100) progress = 100;
        progressBar.value = progress;
        progressSection.style.display = "block";
    }

    function showLearningPath() {
        learningPathSection.style.display = "block";
        recommendation.textContent = "Based on your learning style, we recommend interactive quizzes, video lessons, and hands-on exercises.";
        updateProgress(20);
    }

    function startQuiz() {
        quizSection.style.display = "block";
        quizQuestion.textContent = "What is 2 + 2?";
        quizOptions.innerHTML = "";
        const options = ["3", "4", "5", "6"];
        options.forEach(option => {
            const button = document.createElement("button");
            button.textContent = option;
            button.onclick = () => checkAnswer(option);
            quizOptions.appendChild(button);
        });
    }

    function checkAnswer(answer) {
        if (answer === "4") {
            quizFeedback.textContent = "Correct! Well done!";
            updateProgress(10);
        } else {
            quizFeedback.textContent = "Incorrect. Try again!";
        }
    }

    window.startLesson = startLesson;
    startQuizButton.addEventListener("click", startQuiz);

    // JotForm Chatbot Integration
    window.addEventListener("DOMContentLoaded", function() {
        window.AgentInitializer.init({
            rootId: "JotformAgent-01952be521607fc6a2bfd57dc32d767d9ae3",
            formID: "01952be521607fc6a2bfd57dc32d767d9ae3",
            queryParams: ["skipWelcome=1", "maximizable=1"],
            domain: "https://www.jotform.com",
            isInitialOpen: false,
            isDraggable: false,
            background: "linear-gradient(180deg, #C8CEED 0%, #C8CEED 100%)",
            buttonBackgroundColor: "#0a1551",
            buttonIconColor: "#fff",
            variant: false,
            customizations: {
                greeting: "Yes",
                greetingMessage: "Hi! How can I assist you?",
                pulse: "Yes",
                position: "right"
            }
        });
    });
});
