const lineUp = document.querySelector(".up");
const lineDown = document.querySelector(".down");
const buttons = document.querySelectorAll("button");

buttons[0].addEventListener("click", () => {
  lineUp.textContent = "";
  lineDown.textContent = 0;
});

