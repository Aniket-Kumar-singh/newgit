let boxs = document.querySelectorAll(".box");
let gameseq = [];
let playerseq = [];
let level = 0;
let p = document.querySelector("p");
let h2 = document.querySelector("h2");
let color = ["red", "yellow", "green", "blue"];
let start = false;

document.addEventListener("keypress", function() {
    if (!start) {
        start = true;
        levelup();
    }
});

function btnflash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 300);
}

function levelup() {
    playerseq = [];  // Reset player sequence for each level
    level++;
    p.innerText = `Level ${level}`;

    // Choose a random color and add to game sequence
    let random = Math.floor(Math.random() * 4);
    let randidx = color[random];
    gameseq.push(randidx);

    let colors = document.querySelector(`.${randidx}`);
    console.log(`Game sequence: ${gameseq}`);
    btnflash(colors);
}

function checkans(idx) {
    if (playerseq[idx] === gameseq[idx]) {
        if (playerseq.length === gameseq.length) {
            setTimeout(levelup, 1000);  // Move to the next level
            console.log(`playerseq${playerseq[idx]},gameseq[idx]${gameseq[idx]}`);
            console.log(`playerlenght${playerseq.length},gameseq${gameseq.length}`);
            console.log("vlaure of idx"+ idx);
        }
    } else {
        h2.innerText = "Game over! You clicked the wrong button.";
        resetGame();
    }
}

function resetGame() {
    level = 0;
    gameseq = [];
    playerseq = [];
    start = false;
    p.innerText = "Press any key to restart!";
}

function userbtnpress() {
    let btn = this;
    btnflash(btn);

    let user = btn.getAttribute("id");
    playerseq.push(user);
    console.log(`User sequence: ${playerseq}`);
    checkans(playerseq.length - 1);
    console.log("player lenght "+ playerseq.length);
}

for (let box of boxs) {
    box.addEventListener("click", userbtnpress);
}

















































// // Step 1: Define Questions Array
// const questions = [
//     {
//         question: "Who is the most powerful country in the world?",
//         options: ["America", "India", "Russia", "China"],
//         correct: 0
//     },
//     {
//         question: "Which country has the largest population?",
//         options: ["America", "India", "Russia", "China"],
//         correct: 1
//     },
//     {
//         question: "Who is the richest country in the world?",
//         options: ["America", "India", "Russia", "China"],
//         correct: 0
//     }
// ];

// // Step 2: Initialize Variables
// let currentQuestionIndex = 0;
// let score = 0;

// // Select elements
// const questionElem = document.getElementById("question");
// const options = document.getElementsByName("option");
// const optionLabels = [
//     document.getElementById("option1"),
//     document.getElementById("option2"),
//     document.getElementById("option3"),
//     document.getElementById("option4")
// ];
// const scoreElem = document.getElementById("score");
// const submitBtn = document.getElementById("submit-btn");
// const resetBtn = document.getElementById("reset-btn"); // Select reset button

// // Step 3: Show Question
// function showQuestion() {
//     const currentQuestion = questions[currentQuestionIndex];
//     questionElem.innerText = currentQuestion.question;
    
//     currentQuestion.options.forEach((option, index) => {
//         optionLabels[index].innerText = option;
//     });

//     options.forEach(option => option.checked = false); // Clear previous selection
// }

// // Step 4: Check Answer
// function checkAnswer() {
//     const selectedOption = document.querySelector('input[name="option"]:checked');
//     if (selectedOption) {
//         const answerIndex = parseInt(selectedOption.value);
//         if (answerIndex === questions[currentQuestionIndex].correct) {
//             score++;
//         }
//         scoreElem.innerText = `Score: ${score}`;
//         currentQuestionIndex++;

//         if (currentQuestionIndex < questions.length) {
//             showQuestion();
//         } else {
//             questionElem.innerText = "Quiz Over! Your Final Score: " + score;
//             document.getElementById("quiz-form").style.display = "none";
//             resetBtn.style.display = "block"; // Show reset button at the end
//         }
//     } else {
//         alert("Please select an option.");
//     }
// }

// // Step 5: Reset Quiz
// function resetQuiz() {
//     score = 0;
//     currentQuestionIndex = 0;
//     scoreElem.innerText = `Score: ${score}`;
//     document.getElementById("quiz-form").style.display = "block";
//     resetBtn.style.display = "none";
//     showQuestion();
// }

// // Event Listeners
// submitBtn.addEventListener("click", checkAnswer);
// resetBtn.addEventListener("click", resetQuiz); // Add listener to reset button

// // Show the first question when the page loads
// showQuestion();















// let inp = document.querySelector("input");
// let ul = document.querySelector("ul");
// let Addbtn = document.querySelector("button");

// Addbtn.addEventListener('click', function() {
//     let item = document.createElement("li");
//     let btn = document.createElement("button");

//     btn.innerText = 'Delete';
//     btn.addEventListener('click', function() {
//         ul.removeChild(item);
//     });

//     // Append the button to the list item first
//     item.appendChild(btn);
    
//     // Set the text of the list item
    
//     // Append the list item to the unordered list
//     ul.appendChild(item);
    
//     // Clear the input field
//     inp.value = "";
// });
