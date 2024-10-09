// All questions for Quiz 1
const allQuestionsQuiz1 = [
    // ... (same as before)
];

// All questions for Quiz 2
const allQuestionsQuiz2 = [
    // ... (same as before)
];

// All questions for Quiz 3
const allQuestionsQuiz3 = [
    // ... (same as before)
];

// Variables for Quiz 1
let quiz1QuestionsQueue = [...allQuestionsQuiz1];
let quiz1CurrentQuestionIndex = 0;
let quiz1TotalCorrect = 0;

// Variables for Quiz 2
let quiz2QuestionsQueue = [...allQuestionsQuiz2];
let quiz2CurrentQuestionIndex = 0;
let quiz2TotalCorrect = 0;

// Variables for Quiz 3
let quiz3QuestionsQueue = [...allQuestionsQuiz3];
let quiz3CurrentQuestionIndex = 0;
let quiz3TotalCorrect = 0;

function showQuestion(quizNumber) {
    // ... (same as before)
}

function submitAnswer(quizNumber) {
    // ... (same as before)
}

function displayFinalResults(quizNumber) {
    // ... (same as before)
}

// Initialize all quizzes
showQuestion(1);
showQuestion(2);
showQuestion(3);

// TOC Highlighting Logic
window.addEventListener('scroll', () => {
    const textboxes = document.querySelectorAll('.textbox');
    const tocLinks = document.querySelectorAll('.toc-link');

    textboxes.forEach((textbox, index) => {
        const rect = textbox.getBoundingClientRect();
        const tocLink = document.querySelectorAll(`.toc-link`)[index];

        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            tocLinks.forEach(link => link.classList.remove('active'));
            tocLink.classList.add('active');
        }
    });
});

// Smooth Scrolling for TOC Links
document.querySelectorAll('.toc-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetID = this.getAttribute('href');
        document.querySelector(targetID).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
