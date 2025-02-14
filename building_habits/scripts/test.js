const testQuestions = [
    { question: "How many servings of fruits do you eat daily?", options: ["None", "1-2", "3 or more"], scores: [0, 1, 2] },
    { question: "How often do you eat fast food?", options: ["Almost every day", "1-2 times a week", "Rarely"], scores: [0, 1, 2] },
    { question: "How many glasses of water do you drink daily?", options: ["Less than 4", "4-7", "More than 8"], scores: [0, 1, 2] },
    { question: "Do you include vegetables in your daily meals?", options: ["No", "Sometimes", "Yes, in every meal"], scores: [0, 1, 2] },
    { question: "Do you frequently consume ultra-processed foods?", options: ["Yes, daily", "Occasionally", "Almost never"], scores: [0, 1, 2] },
    { question: "How often do you consume sugary drinks?", options: ["Every day", "A few times a week", "Rarely"], scores: [0, 1, 2] },
    { question: "Do you eat breakfast every day?", options: ["No", "Sometimes", "Yes"], scores: [0, 1, 2] },
    { question: "How often do you eat fried foods?", options: ["Daily", "A few times a week", "Rarely"], scores: [0, 1, 2] },
    { question: "Do you consume whole grains regularly?", options: ["Never", "Sometimes", "Yes, daily"], scores: [0, 1, 2] },
    { question: "Do you eat protein-rich foods in each meal?", options: ["No", "Sometimes", "Yes"], scores: [0, 1, 2] },
    { question: "How often do you eat snacks between meals?", options: ["Frequently", "Occasionally", "Rarely"], scores: [0, 1, 2] },
    { question: "Do you consume dairy or dairy alternatives daily?", options: ["No", "Sometimes", "Yes"], scores: [0, 1, 2] },
    { question: "Do you plan your meals in advance?", options: ["Never", "Sometimes", "Always"], scores: [0, 1, 2] },
    { question: "Do you eat mindfully and avoid distractions?", options: ["No", "Sometimes", "Yes"], scores: [0, 1, 2] },
    { question: "How often do you cook homemade meals?", options: ["Rarely", "A few times a week", "Almost every day"], scores: [0, 1, 2] }
];

let currentQuestionIndex = 0;
let totalScore = 0;

document.addEventListener("DOMContentLoaded", function() {
    showQuestion();
});

function showQuestion() {
    if (currentQuestionIndex < testQuestions.length) {
        const questionContainer = document.getElementById("question-container");
        const questionData = testQuestions[currentQuestionIndex];
        
        questionContainer.innerHTML = `
            <h3>${questionData.question}</h3>
            ${questionData.options.map((option, index) => `
                <button onclick="selectAnswer(${questionData.scores[index]})">${option}</button>
            `).join('')}
        `;
    } else {
        showResult();
    }
}

function selectAnswer(score) {
    totalScore += score;
    currentQuestionIndex++;
    showQuestion();
}

function showResult() {
    let resultText = "";
    if (totalScore <= 7) {
        resultText = "Your eating habits need improvement. Consider including more natural and balanced foods.";
    } else if (totalScore <= 20) {
        resultText = "You have moderate eating habits, but there is room for improvement.";
    } else {
        resultText = "Congratulations! You have healthy eating habits.";
    }
    
    document.getElementById("question-container").innerHTML = `<h2>Result:</h2><p>${resultText}</p>`;
}
