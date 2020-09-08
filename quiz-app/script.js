const quizData = [
    {
        question: 'How old is Asep SukONTA?',
        a: '10',
        b: '17',
        c: '26',
        d: '38',
        correct: 'a'
    },
    {
        question: 'How old is Bangke?',
        a: '10',
        b: '17',
        c: '26',
        d: '38',
        correct: 'b'
    },
    {
        question: 'How old is Codet?',
        a: '10',
        b: '17',
        c: '26',
        d: '38',
        correct: 'c'
    },
    {
        question: 'How old is Dodol?',
        a: '10',
        b: '17',
        c: '26',
        d: '38',
        correct: 'd'
    },
    {
        question: 'How old is Edan?',
        a: '10',
        b: '17',
        c: '26',
        d: '38',
        correct: 'a'
    },
    {
        question: 'How old is Florin?',
        a: '10',
        b: '17',
        c: '26',
        d: '38',
        correct: 'b'
    }

];

const questionEl = document.getElementById('question');
const answerEls = document.querySelectorAll('.answer');
const quiz = document.getElementById('quiz');

const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');

const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswer();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

    // console.log(currentQuizData['correct']);
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach(answerEl => {
        // console.log(answer.checked);
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswer() {
    answerEls.forEach(answerEl => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();

    console.log(answer);

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        console.log(score);

        currentQuiz++;

        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2>Your answer correctly at ${score}/${quizData.length} question</h2>
                              <button onclick="location.reload()">Repeat Again</button>`
        }
    }
})

