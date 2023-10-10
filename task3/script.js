// ##########################################
// task 3
// ##########################################
// const trafficLightEl = document.querySelector('#trafficLight');

// function makeGreen() {
//     trafficLightEl.style.background = ('green');
//     trafficLightEl.removeEventListener('click', makeGreen);
//     trafficLightEl.addEventListener('click', makeYellow);
// }
// function makeYellow() {
//     trafficLightEl.style.background = ('yellow');
//     trafficLightEl.removeEventListener('click', makeYellow);
//     trafficLightEl.addEventListener('click', makeRed);
// }
// function makeRed() {
//     trafficLightEl.style.background = ('red');
//     trafficLightEl.removeEventListener('click', makeRed);
//     trafficLightEl.addEventListener('click', makeGreen);
// }

// trafficLightEl.addEventListener('click', makeGreen);

// ##########################################
//модифицированный светофор
// ##########################################
const lightGreenEl = document.querySelector('#lightGreen');
const lightYellowEl = document.querySelector('#lightYellow');
const lightRedEl = document.querySelector('#lightRed');


function makeGreen() {
    lightRedEl.style.background = ('black');
    lightGreenEl.style.background = ('green');
    carAnimation.play();
    lightGreenEl.removeEventListener('click', makeGreen);
    lightYellowEl.removeEventListener('click', makeGreen);
    lightRedEl.removeEventListener('click', makeGreen);
    lightGreenEl.addEventListener('click', makeYellow);
    lightYellowEl.addEventListener('click', makeYellow);
    lightRedEl.addEventListener('click', makeYellow);
}
function makeYellow() {
    lightGreenEl.style.background = ('black');
    lightYellowEl.style.background = ('yellow');
    lightGreenEl.removeEventListener('click', makeYellow);
    lightYellowEl.removeEventListener('click', makeYellow);
    lightRedEl.removeEventListener('click', makeYellow);
    lightGreenEl.addEventListener('click', makeRed);
    lightYellowEl.addEventListener('click', makeRed)
    lightRedEl.addEventListener('click', makeRed)
}
function makeRed() {
    lightYellowEl.style.background = ('black');
    lightRedEl.style.background = ('red');
    carAnimation.pause();
    lightGreenEl.removeEventListener('click', makeRed);
    lightYellowEl.removeEventListener('click', makeRed);
    lightRedEl.removeEventListener('click', makeRed);
    lightGreenEl.addEventListener('click', makeGreen);
    lightYellowEl.addEventListener('click', makeGreen);
    lightRedEl.addEventListener('click', makeGreen);
}

lightGreenEl.addEventListener('click', makeGreen);
lightYellowEl.addEventListener('click', makeGreen);
lightRedEl.addEventListener('click', makeGreen);

const carEl = document.querySelector('#car');

let carAnimation = carEl.animate([
{
    transform: 'translate(-200px,0)'
},
{
    transform: 'translate(800px,0)',
}
], {
    duration:3000,
    iterations: Infinity,
    direction: 'alternate'
});

carAnimation.pause();
// ##########################################
// Модифицированный светофор через if else
// ##########################################
// const lightGreenEl = document.querySelector('#lightGreen');
// lightGreenEl.addEventListener('click', changeColor);
// const lightYellowEl = document.querySelector('#lightYellow');
// lightYellowEl.addEventListener('click', changeColor);
// const lightRedEl = document.querySelector('#lightRed');
// lightRedEl.addEventListener('click', changeColor);

// function changeColor() {
//     if (lightGreenEl.style.background == 'green') {
//         lightGreenEl.style.background = ('black');
//         lightYellowEl.style.background = ('yellow');
//     } else if (lightYellowEl.style.background == 'yellow') {
//         lightYellowEl.style.background = ('black');
//         lightRedEl.style.background = ('red');
//     } else if (lightRedEl.style.background == 'red') {
//         lightRedEl.style.background = ('black');
//         lightGreenEl.style.background = ('green');
//      } else {
//         lightGreenEl.style.background = ('green');
//     }

// };

// #################################################
// Правильный светофор, после красного идет желтый
// #################################################
// let counter = 0;
// const counterValue = document.querySelector('#counter-value');
// const lightGreenEl = document.querySelector('#lightGreen');
// lightGreenEl.addEventListener('click', changeColor);
// const lightYellowEl = document.querySelector('#lightYellow');
// lightYellowEl.addEventListener('click', changeColor);
// const lightRedEl = document.querySelector('#lightRed');
// lightRedEl.addEventListener('click', changeColor);

// function changeColor() {
//     counter = counterValue.textContent;
//     switch (counter) {
//         case '0':
//             lightGreenEl.style.background = ('green');
//             lightYellowEl.style.background = ('black')
//             lightRedEl.style.background = ('black');
//             counter++;
//             counterValue.textContent = counter;
//             break;
//         case '1':
//             lightGreenEl.style.background = ('black')
//             lightYellowEl.style.background = ('yellow');
//             counter++;
//             counterValue.textContent = counter;
//             break;
//         case '2':
//             lightYellowEl.style.background = ('black')
//             lightRedEl.style.background = ('red');
//             counter++;
//             counterValue.textContent = counter;
//             break;
//         case '3':
//             lightRedEl.style.background = ('black');
//             lightYellowEl.style.background = ('yellow');
//             counterValue.textContent = '0';
//     }

// };
