const lineUp = document.querySelector(".up");
lineUp.textContent = "";
const lineDown = document.querySelector(".down");
lineDown.textContent = 0;
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
    lineDown.textContent = 0;
  } else {
    lineDown.textContent = lineDown.textContent.slice(0, -1);
  }
});

buttons[3].addEventListener("click", () => {
  if (lineUp.textContent == "") {
    lineUp.textContent = lineDown.textContent + " /";
  } else {
    if (lineUp.textContent.includes("/")) {
      lineUp.textContent = lineUp.textContent.split(" ")[0] / lineDown.textContent + " /";
    } else {
      lineUp.textContent = lineUp.textContent.slice(0, -2) + " /";
    }
  }
});

buttons[7].addEventListener("click", () => {
  if (lineUp.textContent == "") {
    lineUp.textContent = lineDown.textContent + " *";
  } else {
    if (lineUp.textContent.includes("*")) {
      lineUp.textContent = lineUp.textContent.split(" ")[0] * lineDown.textContent + " *";
    } else {
      lineUp.textContent = lineUp.textContent.slice(0, -2) + " *";
    }
  }
});

buttons[11].addEventListener("click", () => {
  if (lineUp.textContent == "") {
    lineUp.textContent = lineDown.textContent + " -";
  } else {
    if (lineUp.textContent.includes("-")) {
      lineUp.textContent = lineUp.textContent.split(" ")[0] - lineDown.textContent + " -";
    } else {
      lineUp.textContent = lineUp.textContent.slice(0, -2) + " -";
    }
  }
});

buttons[15].addEventListener("click", () => {
  if (lineUp.textContent == "") {
    lineUp.textContent = lineDown.textContent + " +";
  } else {
    if (lineUp.textContent.includes("+")) {
      lineUp.textContent = lineUp.textContent.split(" ")[0] + lineDown.textContent + " +";
    } else {
      lineUp.textContent = lineUp.textContent.slice(0, -2) + " +";
    }
  }
});

buttons[18].addEventListener("click", () => {
  if (lineUp.textContent == "") {
    lineUp.textContent = lineDown.textContent + " =";
  } else {
    lineUp.textContent = lineUp.textContent + " " + lineDown.textContent + " =";
    if (lineUp.textContent.includes("/")) {
      lineDown.textContent = lineUp.textContent.split(" ")[0] / lineDown.textContent;
    } else if (lineUp.textContent.includes("*")) {
      lineDown.textContent = lineUp.textContent.split(" ")[0] * lineDown.textContent;
    } else if (lineUp.textContent.includes("-")) {
      lineDown.textContent = lineUp.textContent.split(" ")[0] - lineDown.textContent;
    } else if (lineUp.textContent.includes("+")) {
      lineDown.textContent = lineUp.textContent.split(" ")[0] + lineDown.textContent;
    }
  }
});


for (let i = 4; i < 18; i++) {
  buttons[i].addEventListener("click", () => {
    if ([4, 5, 6, 8, 9, 10, 12, 13, 14, 17].includes(i)) {
      lineDown.textContent += buttons[i].textContent;
    }
  });
}
