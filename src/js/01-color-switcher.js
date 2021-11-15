let btnStart = document.querySelector('button[data-start]');
let btnStop = document.querySelector('button[data-stop]');
let timerId = null;
let changeColor = document.body.style.backgroundColor;
btnStart.classList.add('js-style');
console.log(btnStart);
console.log(btnStop);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

btnStart.addEventListener('click', () => {
    timerId = setInterval(
        document.body.style.backgroundColor = getRandomHexColor(), 1000)
    btnStart.setAttribute("disabled", "disabled");
});

btnStop.addEventListener('click', () => {
    clearInterval(timerId);
    btnStart.removeAttribute("disabled");
});




