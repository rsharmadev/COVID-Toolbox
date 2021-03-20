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


function preload() {
    page1.className = "h-screen flex-grow flex flex-col"
    image1.src = "./assets/infoselected.svg"
    bar1.className = "absolute w-1.5 h-full bg-highlightblue top-0 right-0"
    button1.className = "w-full bg-bgblue relative cursor-pointer"
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