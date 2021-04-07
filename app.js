const lineUp = document.querySelector(".up");
const lineDown = document.querySelector(".down");
const buttons = document.querySelectorAll("button");

buttons[0].addEventListener("click", () => {
  lineUp.textContent = "";
  lineDown.textContent = 0;
});

let counter = 0;
buttons[1].addEventListener("click", () => {
  counter++;
  if (counter % 2 == 1 && lineDown.textContent != 0) {
    lineDown.textContent = "-" + lineDown.textContent;
  } else {
    lineDown.textContent = lineDown.textContent;
  }
});

buttons[2].addEventListener("click", () => {
  if (lineDown.textContent.includes("-") && lineDown.textContent.length == 2) {
    lineDown.textContent = "";
  } else {
    lineDown.textContent = lineDown.textContent.slice(0, -1);
  }
});
