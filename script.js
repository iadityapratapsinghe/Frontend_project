const questions = [
    {
        question: "Which HTML tag creates the largest heading?",
        options: ["&lt;h6&gt;", "&lt;h1&gt;", "&lt;title&gt;", "&lt;header&gt;"],
        answer: 1
    },
    {
        question: "CSS stands for?",
        options: ["Creative Style Sheets", "Cascading Style Sheets", "Computer Styled System", "Color Sheet Syntax"],
        answer: 1
    },
    {
        question: "Which CSS property changes text color?",
        options: ["font-color", "text-color", "color", "fgcolor"],
        answer: 2
    },
    {
        question: "Which HTML tag inserts an image?",
        options: ["&lt;img&gt;", "&lt;image&gt;", "&lt;pic&gt;", "&lt;src&gt;"],
        answer: 0
    },
    {
        question: "JavaScript is placed inside which HTML tag?",
        options: ["&lt;script&gt;", "&lt;javascript&gt;", "&lt;code&gt;", "&lt;js&gt;"],
        answer: 0
    },
    {
        question: "Which property changes background color?",
        options: ["bgcolor", "background", "background-color", "color-bg"],
        answer: 2
    },
    {
        question: "HTML stands for?",
        options: [
            "HyperText Markup Language",
            "HighText Machine Language",
            "Home Tool Marking Language",
            "Hyperlinks Markup List"
        ],
        answer: 0
    },
    {
        question: "Which is used for a single-line JS comment?",
        options: ["&lt;!-- --&gt;", "//", "##", "??"],
        answer: 1
    },
    {
        question: "Which tag makes text bold?",
        options: ["&lt;strong&gt;", "&lt;b&gt;", "&lt;bold&gt;", "&lt;important&gt;"],
        answer: 1
    },
    {
        question: "Which symbol represents ID in CSS?",
        options: [".", "#", "@", "$"],
        answer: 1
    },
    {
        question: "Which tag is used for list item?",
        options: ["&lt;li&gt;", "&lt;item&gt;", "&lt;list&gt;", "&lt;ul&gt;"],
        answer: 0
    },
    {
        question: "JavaScript arrays use?",
        options: ["{}", "()", "[]", "&lt;&gt;"],
        answer: 2
    },
    {
        question: "Which event occurs when clicking a button?",
        options: ["onpress", "onclick", "onhover", "onstart"],
        answer: 1
    },
    {
        question: "Which HTML attribute applies inline CSS?",
        options: ["style", "class", "css", "font"],
        answer: 0
    },
    {
        question: "Which tag creates a table row?",
        options: ["&lt;tr&gt;", "&lt;td&gt;", "&lt;row&gt;", "&lt;table&gt;"],
        answer: 0
    }
];

// -------------------------------------------
// VARIABLES
// -------------------------------------------
let index = 0;
let score = 0;

const mainBox = document.querySelector(".main-box");
const startBtn = document.querySelector(".start-btn");

startBtn.addEventListener("click", startTest);

// -------------------------------------------
// START TEST
// -------------------------------------------
function startTest() {
    mainBox.innerHTML = `
        <div id="question-box" style="background:#f0f6ff; padding:20px; border-radius:10px;"></div>
        <button id="next-btn" class="start-btn" style="margin-top:20px;">Next</button>
    `;

    loadQuestion();

    document.getElementById("next-btn").onclick = nextQuestion;
}

// -------------------------------------------
// LOAD QUESTION
// -------------------------------------------
function loadQuestion() {
    const q = questions[index];

    document.getElementById("question-box").innerHTML = `
        <h2 style="color:#1e3a8a;">${index + 1}. ${q.question}</h2>
        ${q.options
            .map(
                (opt, i) =>
                    `<label style="display:block; margin:10px; font-size:18px;">
                        <input type="radio" name="option" value="${i}">
                        ${opt}
                    </label>`
            )
            .join("")}
    `;
}

// -------------------------------------------
// NEXT BUTTON
// -------------------------------------------
function nextQuestion() {
    let selected = document.querySelector("input[name='option']:checked");

    if (!selected) {
        alert("Please select an answer!");
        return;
    }

    if (parseInt(selected.value) === questions[index].answer) {
        score++;
    }

    index++;

    if (index < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

// -------------------------------------------
// SHOW RESULT
// -------------------------------------------
function showResult() {
    mainBox.innerHTML = `
        <h2 style="color:white;">Test Completed</h2>

        <div style="
            background:white;
            padding:20px;
            border-radius:10px;
            margin-top:20px;">
            
            <h3>Your Score: ${score} / ${questions.length}</h3>

            <h2 style="color:${(score / questions.length) * 100 >= 85 ? 'green' : 'red'};">
                ${(score / questions.length) * 100 >= 85 ? 'PASS' : 'FAIL'}
            </h2>
        </div>
    `;
}