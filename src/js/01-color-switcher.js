let btnStart = document.querySelector('button[data-start]');
let btnStop = document.querySelector('button[data-stop]');
let timerId = null;
let changeColor = document.body.style.backgroundColor;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

btnStart.addEventListener('click', changeBackgroundColor);

function changeBackgroundColor() {
  timerId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  btnStart.setAttribute("disabled", "disabled");
}

btnStop.addEventListener('click', () => {
    clearInterval(timerId);
    btnStart.removeAttribute("disabled");
});




