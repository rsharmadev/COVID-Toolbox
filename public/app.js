let button1 = document.getElementById("button1")
let button2 = document.getElementById("button2")
let button3 = document.getElementById("button3")
let button4 = document.getElementById("button4")

let image1 = document.getElementById("image1")
let image2 = document.getElementById("image2")
let image3 = document.getElementById("image3")
let image4 = document.getElementById("image4")

let page1 = document.getElementById("Information")
let page2 = document.getElementById("Scheduler")
let page3 = document.getElementById("Diagnostic")
let page4 = document.getElementById("Analytics")

let bar1 = document.getElementById("bar1")
let bar2 = document.getElementById("bar2")
let bar3 = document.getElementById("bar3")
let bar4 = document.getElementById("bar4")

let selected = "absolute w-1.5 h-full bg-highlightblue top-0 right-0"
let currentQuestion = 0

const q0 = document.querySelector('#Question0')
const q1 = document.querySelector('#Question1')
const q2 = document.querySelector('#Question2')
const q3 = document.querySelector('#Question3')
const q4 = document.querySelector('#Question4')
const q5 = document.querySelector('#Question5')
const q6 = document.querySelector('#Question6')
const q7 = document.querySelector('#Question7')
const q8 = document.querySelector('#Question8')
const score = document.querySelector('#Score')
const questionInfo = document.querySelector('#questionInfo')
const answerInfo = document.querySelector('#AnswerInfo')
const startbutton = document.querySelector('#startbutton')
const yesorno = document.querySelector('#yesorno')
const testAgain = document.querySelector('#testAgain')

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function preload() {
    page1.className = "h-screen flex-grow flex flex-col"
    image1.src = "./assets/infoselected.svg"
    bar1.className = "absolute w-1.5 h-full bg-highlightblue top-0 right-0"
    button1.className = "w-full bg-bgblue relative cursor-pointer"
}

function introLoad() {

    currentQuestion = 0
    q1.className = "text-white text-6xl text-center px-8 hidden"
    q2.className = "text-white text-6xl text-center px-8 hidden"
    q3.className = "text-white text-6xl text-center px-8 hidden"
    q4.className = "text-white text-6xl text-center px-8 hidden"
    q5.className = "text-white text-6xl text-center px-8 hidden"
    q6.className = "text-white text-6xl text-center px-8 hidden"
    q7.className = "text-white text-6xl text-center px-8 hidden"
    q8.className = "text-white text-6xl text-center px-8 hidden"
    score.className = "text-white text-6xl text-center px-8 hidden"
    yesorno.className = "opacity-0 hidden"
    answerInfo.className = "opacity-0 hidden"




    const tl = new TimelineMax({ delay: 0 });
    q0.className = "text-white text-6xl text-center px-8 opacity-0"
    questionInfo.className = "block"
    tl.fromTo(q0, 0.5, { y: '50', opacity: 0 }, { y: 0, opacity: 1 })
    tl.fromTo(questionInfo, 0.5, { y: '50', opacity: 0 }, { y: 0, opacity: 1 }, 0.2)
}

document.addEventListener('DOMContentLoaded', function () {
    preload()
}, false);

button1.addEventListener('click', () => {
    page2.className = "h-screen flex-grow flex flex-col hidden"
    page3.className = "h-screen flex-grow flex flex-col hidden"
    page4.className = "h-screen flex-grow flex flex-col hidden"
    image2.src = "./assets/calendar.svg"
    image3.src = "./assets/edit-3.svg"
    image4.src = "./assets/pie-chart.svg"
    bar2.className = "absolute w-1.5 h-full bg-highlightblue top-0 right-0 hidden"
    bar3.className = "absolute w-1.5 h-full bg-highlightblue top-0 right-0 hidden"
    bar4.className = "absolute w-1.5 h-full bg-highlightblue top-0 right-0 hidden"
    button2.className = "w-full bg-transparent relative cursor-pointer"
    button3.className = "w-full bg-transparent relative cursor-pointer"
    button4.className = "w-full bg-transparent relative cursor-pointer"

    page1.className = "h-screen flex-grow flex flex-col"
    image1.src = "./assets/infoselected.svg"
    bar1.className = "absolute w-1.5 h-full bg-highlightblue top-0 right-0"
    button1.className = "w-full bg-bgblue relative cursor-pointer"
})
button2.addEventListener('click', () => {
    page1.className = "h-screen flex-grow flex flex-col hidden"
    page3.className = "h-screen flex-grow flex flex-col hidden"
    page4.className = "h-screen flex-grow flex flex-col hidden"
    image1.src = "./assets/info.svg"
    image3.src = "./assets/edit-3.svg"
    image4.src = "./assets/pie-chart.svg"
    bar1.className = "absolute w-1.5 h-full bg-highlightblue top-0 right-0 hidden"
    bar3.className = "absolute w-1.5 h-full bg-highlightblue top-0 right-0 hidden"
    bar4.className = "absolute w-1.5 h-full bg-highlightblue top-0 right-0 hidden"
    button1.className = "w-full bg-transparent relative cursor-pointer"
    button3.className = "w-full bg-transparent relative cursor-pointer"
    button4.className = "w-full bg-transparent relative cursor-pointer"

    page2.className = "h-screen flex-grow flex flex-col"
    image2.src = "./assets/calendarselected.svg"
    bar2.className = "absolute w-1.5 h-full bg-highlightblue top-0 right-0"
    button2.className = "w-full bg-bgblue relative cursor-pointer"
})
button3.addEventListener('click', () => {
    page1.className = "h-screen flex-grow flex flex-col hidden"
    page2.className = "h-screen flex-grow flex flex-col hidden"
    page4.className = "h-screen flex-grow flex flex-col hidden"
    image1.src = "./assets/info.svg"
    image2.src = "./assets/calendar.svg"
    image4.src = "./assets/pie-chart.svg"
    bar1.className = "absolute w-1.5 h-full bg-highlightblue top-0 right-0 hidden"
    bar2.className = "absolute w-1.5 h-full bg-highlightblue top-0 right-0 hidden"
    bar4.className = "absolute w-1.5 h-full bg-highlightblue top-0 right-0 hidden"
    button1.className = "w-full bg-transparent relative cursor-pointer"
    button2.className = "w-full bg-transparent relative cursor-pointer"
    button4.className = "w-full bg-transparent relative cursor-pointer"

    page3.className = "h-screen flex-grow flex flex-col"
    image3.src = "./assets/edit-3selected.svg"
    bar3.className = "absolute w-1.5 h-full bg-highlightblue top-0 right-0"
    button3.className = "w-full bg-bgblue relative cursor-pointer"

    introLoad()
})
button4.addEventListener('click', () => {
    page1.className = "h-screen flex-grow flex flex-col hidden"
    page2.className = "h-screen flex-grow flex flex-col hidden"
    page3.className = "h-screen flex-grow flex flex-col hidden"
    image1.src = "./assets/info.svg"
    image2.src = "./assets/calendar.svg"
    image3.src = "./assets/edit-3.svg"
    bar1.className = "absolute w-1.5 h-full bg-highlightblue top-0 right-0 hidden"
    bar2.className = "absolute w-1.5 h-full bg-highlightblue top-0 right-0 hidden"
    bar3.className = "absolute w-1.5 h-full bg-highlightblue top-0 right-0 hidden"
    button1.className = "w-full bg-transparent relative cursor-pointer"
    button2.className = "w-full bg-transparent relative cursor-pointer"
    button3.className = "w-full bg-transparent relative cursor-pointer"

    page4.className = "h-screen flex-grow flex flex-col"
    image4.src = "./assets/pie-chartselected.svg"
    bar4.className = "absolute w-1.5 h-full bg-highlightblue top-0 right-0"
    button4.className = "w-full bg-bgblue relative cursor-pointer"
})
startbutton.addEventListener('click', async () => {
    const tl = new TimelineMax({ delay: 0.2 });
    tl.fromTo(questionInfo, 0.7, { y: '0', opacity: 1 }, { y: 100, opacity: 0 }, 0)
    tl.fromTo(q0, 1, { opacity: 1 }, { opacity: 0 }, 0)
    await sleep(1000)
    q0.className = "text-white text-6xl text-center px-8 hidden"
    q1.className = "text-white text-6xl text-center px-8 opacity-0"
    tl.fromTo(q1, 0.8, { opacity: 0 }, { opacity: 1 }, 1)
    questionInfo.className = "hidden"
    yesorno.className = "opacity-0 block"
    tl.fromTo(yesorno, 0.4, { y: '50', opacity: 0 }, { y: 0, opacity: 1 })
    currentQuestion = 1
})
testAgain.addEventListener('click', async () => {

    const tl = new TimelineMax({ delay: 0.2 });
    tl.fromTo(answerInfo, 0.5, { y: '0', opacity: 1 }, { y: -50, opacity: 0 }, 0)
    tl.fromTo(score, 0.5, { y: '0', opacity: 1 }, { y: -50, opacity: 0 }, 0)

    await sleep(500)
    answerInfo.className = "opacity-0 hidden"
    score.className = "text-white text-6xl text-center px-8 hidden"
    tl.fromTo(answerInfo, 0.5, { y: '50', opacity: 0 }, { y: 0, opacity: 1 })
    tl.fromTo(score, 0.5, { y: '50', opacity: 0 }, { y: 0, opacity: 1 })
    await sleep(300)
    introLoad()
})

async function nextQuestion(index) {
    console.log(index)

    if (index === 1) {
        const tl = new TimelineMax({ delay: 0.2 });
        tl.fromTo(q1, 1, { opacity: 1 }, { opacity: 0 }, 0)
        await sleep(1000)
        q1.className = "text-white text-6xl text-center px-8 hidden"
        q2.className = "text-white text-6xl text-center px-8 opacity-0"
        tl.fromTo(q2, 1, { opacity: 0 }, { opacity: 1 }, 1)
    } else if (index === 2) {
        const tl = new TimelineMax({ delay: 0.2 });
        tl.fromTo(q2, 1, { opacity: 1 }, { opacity: 0 }, 0)
        await sleep(1000)
        q2.className = "text-white text-6xl text-center px-8 hidden"
        q3.className = "text-white text-6xl text-center px-8 opacity-0"
        tl.fromTo(q3, 1, { opacity: 0 }, { opacity: 1 }, 1)
    } else if (index === 3) {
        const tl = new TimelineMax({ delay: 0.2 });
        tl.fromTo(q3, 1, { opacity: 1 }, { opacity: 0 }, 0)
        await sleep(1000)
        q3.className = "text-white text-6xl text-center px-8 hidden"
        q4.className = "text-white text-6xl text-center px-8 opacity-0"
        tl.fromTo(q4, 1, { opacity: 0 }, { opacity: 1 }, 1)
    } else if (index === 4) {
        const tl = new TimelineMax({ delay: 0.2 });
        tl.fromTo(q4, 1, { opacity: 1 }, { opacity: 0 }, 0)
        await sleep(1000)
        q4.className = "text-white text-6xl text-center px-8 hidden"
        q5.className = "text-white text-6xl text-center px-8 opacity-0"
        tl.fromTo(q5, 1, { opacity: 0 }, { opacity: 1 }, 1)
    } else if (index === 5) {
        const tl = new TimelineMax({ delay: 0.2 });
        tl.fromTo(q5, 1, { opacity: 1 }, { opacity: 0 }, 0)
        await sleep(1000)
        q5.className = "text-white text-6xl text-center px-8 hidden"
        q6.className = "text-white text-6xl text-center px-8 opacity-0"
        tl.fromTo(q6, 1, { opacity: 0 }, { opacity: 1 }, 1)
    } else if (index === 6) {
        const tl = new TimelineMax({ delay: 0.2 });
        tl.fromTo(q6, 1, { opacity: 1 }, { opacity: 0 }, 0)
        await sleep(1000)
        q6.className = "text-white text-6xl text-center px-8 hidden"
        q7.className = "text-white text-6xl text-center px-8 opacity-0"
        tl.fromTo(q7, 1, { opacity: 0 }, { opacity: 1 }, 1)
    } else if (index === 7) {
        const tl = new TimelineMax({ delay: 0.2 });
        tl.fromTo(q7, 1, { opacity: 1 }, { opacity: 0 }, 0)
        await sleep(1000)
        q7.className = "text-white text-6xl text-center px-8 hidden"
        q8.className = "text-white text-6xl text-center px-8 opacity-0"
        tl.fromTo(q8, 1, { opacity: 0 }, { opacity: 1 }, 1)
    } else if (index === 8) {
        const tl = new TimelineMax({ delay: 0.2 });
        tl.fromTo(q8, 1, { opacity: 1 }, { opacity: 0 }, 0)
        await sleep(1000)
        q8.className = "text-white text-6xl text-center px-8 hidden"
        score.className = "text-white text-6xl text-center px-8 opacity-0"
        tl.fromTo(score, 1, { opacity: 0 }, { opacity: 1 }, 0.5)

        tl.fromTo(yesorno, 0.5, { y: '0', opacity: 1 }, { y: -50, opacity: 0 })
        await sleep(1000)
        yesorno.className = "opacity-0 hidden"
        answerInfo.className = "opacity-0 block"
        tl.fromTo(answerInfo, 0.5, { y: '50', opacity: 0 }, { y: 0, opacity: 1 })
    }
    if (index < 8) {
        currentQuestion = index + 1
    } else {
        console.log(selecteda);
        if(selecteda.includes('override')) {
            document.getElementById('Answer').innerHTML = "Go see a doctor";

        } else {
            let num;
            for(i in selecteda) {
                if(selecteda[i]) {
                    num += 1;
                }
                if(selecteda.length / num >= 0.5) {
                    document.getElementById('Answer').innerHTML = "Go see a doctor";
                } else {
                    document.getElementById('Answer').innerHTML = "You should be good";
                }
            }
        }
        currentQuestion = 0
        selecteda = [];
        answeredQuestions = [];
        num = 0;
    }
}
let continuebutton = document.getElementsByClassName('continue')
for (var i = 0; i < continuebutton.length; i++) {
    continuebutton[i].addEventListener('click', async () => {
        nextQuestion(currentQuestion)
    })
};

let yesbtn = document.getElementById('yes');
let skipbtn = document.getElementById('skip');
let nobtn = document.getElementById('nobtn');
let answeredQuestions = [];
let selecteda = [];
yesbtn.addEventListener('click', async() => {
    if(answeredQuestions.includes(currentQuestion)) {
        return;
    }
    answeredQuestions.push(currentQuestion);
    console.log(currentQuestion);
    if(currentQuestion == 3) {
        selecteda.push('override');
    } else {
        selecteda.push(true);
    }
});

nobtn.addEventListener('click', async() => {
    if(answeredQuestions.includes(currentQuestion)) {
        return;
    }
    answeredQuestions.push(currentQuestion);
    console.log(currentQuestion);
    selecteda.push(false);

});

skipbtn.addEventListener('click', async() => {
    answeredQuestions.push(currentQuestion);
    console.log(currentQuestion);
})
