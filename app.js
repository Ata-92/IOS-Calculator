const lineUp = document.querySelector(".up");
lineUp.textContent = "";
const lineDown = document.querySelector(".down");
lineDown.textContent = 0;
const buttons = document.querySelectorAll("button");

buttons[0].addEventListener("click", () => {
  lineUp.textContent = "";
  lineDown.textContent = 0;
});

buttons[1].addEventListener("click", () => {
  if (lineDown.textContent.includes("-") && lineDown.textContent != 0) {
    lineDown.textContent = lineDown.textContent.slice(1);
  } else if (!lineDown.textContent.includes("-") && lineDown.textContent != 0) {
    lineDown.textContent = "-" + lineDown.textContent;
  }
});

buttons[2].addEventListener("click", () => {
  if ((lineDown.textContent.includes("-") && lineDown.textContent.length == 2) || lineDown.textContent.length == 1) {
    lineDown.textContent = 0;
  } else {
    lineDown.textContent = lineDown.textContent.slice(0, -1);
  }
});

buttons[3].addEventListener("click", () => {
  if (lineUp.textContent == "") {
    lineUp.textContent = lineDown.textContent + " /";
  } else {
    if (lineUp.textContent.includes("=")) {
      lineUp.textContent = lineDown.textContent + " /";
    } else if (lineUp.textContent.includes("/") && lineDown.textContent != "") {
      lineUp.textContent = lineUp.textContent.split(" ")[0] / lineDown.textContent + " /";
    } else {
      lineUp.textContent = lineUp.textContent.slice(0, -2) + " /";
    }
  }
  lineDown.textContent = "";
});

buttons[7].addEventListener("click", () => {
  if (lineUp.textContent == "") {
    lineUp.textContent = lineDown.textContent + " *";
  } else {
    if (lineUp.textContent.includes("=")) {
      lineUp.textContent = lineDown.textContent + " *";
    } else if (lineUp.textContent.includes("*") && lineDown.textContent != "") {
      lineUp.textContent = lineUp.textContent.split(" ")[0] * lineDown.textContent + " *";
    } else {
      lineUp.textContent = lineUp.textContent.slice(0, -2) + " *";
    }
  }
  lineDown.textContent = "";
});

buttons[11].addEventListener("click", () => {
  if (lineUp.textContent == "") {
    lineUp.textContent = lineDown.textContent + " -";
  } else {
    if (lineUp.textContent.includes("=")) {
      lineUp.textContent = lineDown.textContent + " -";
    } else if (lineUp.textContent.includes("-") && lineDown.textContent != "") {
      lineUp.textContent = lineUp.textContent.split(" ")[0] - lineDown.textContent + " -";
    } else {
      lineUp.textContent = lineUp.textContent.slice(0, -2) + " -";
    }
  }
  lineDown.textContent = "";
});

buttons[15].addEventListener("click", () => {
  if (lineUp.textContent == "") {
    lineUp.textContent = lineDown.textContent + " +";
  } else {
    if (lineUp.textContent.includes("=")) {
      lineUp.textContent = lineDown.textContent + " +";
    } else if (lineUp.textContent.includes("+") && lineDown.textContent != "") {
      lineUp.textContent = parseFloat(lineUp.textContent.split(" ")[0]) + parseFloat(lineDown.textContent) + " +";
    } else {
      lineUp.textContent = lineUp.textContent.slice(0, -2) + " +";
    }
  }
  lineDown.textContent = "";
});

buttons[18].addEventListener("click", () => {
  if (lineUp.textContent == "") {
    lineUp.textContent = lineDown.textContent + " =";
  } else if (lineUp.textContent.includes("=") && lineUp.textContent.split(" ").length > 2) {
    lineUp.textContent = lineDown.textContent + " " + lineUp.textContent.split(" ")[1] + " " + lineUp.textContent.split(" ")[2] + " " + lineUp.textContent.split(" ")[3];
    if (lineUp.textContent.includes("/")) {
      lineDown.textContent = lineUp.textContent.split(" ")[0] / lineUp.textContent.split(" ")[2];
    } else if (lineUp.textContent.includes("*")) {
      lineDown.textContent = lineUp.textContent.split(" ")[0] * lineUp.textContent.split(" ")[2];
    } else if (lineUp.textContent.includes("-") && !lineUp.textContent.includes("+")) {
      lineDown.textContent = lineUp.textContent.split(" ")[0] - lineUp.textContent.split(" ")[2];
    } else if (lineUp.textContent.includes("+")) {
      lineDown.textContent = parseFloat(lineUp.textContent.split(" ")[0]) + parseFloat(lineUp.textContent.split(" ")[2]);
    }
  } else if (!lineUp.textContent.includes("=") && lineDown.textContent != ""){
    lineUp.textContent = lineUp.textContent + " " + lineDown.textContent + " =";
    if (lineUp.textContent.includes("/")) {
      lineDown.textContent = lineUp.textContent.split(" ")[0] / lineDown.textContent;
    } else if (lineUp.textContent.includes("*")) {
      lineDown.textContent = lineUp.textContent.split(" ")[0] * lineDown.textContent;
    } else if (lineUp.textContent.includes("-") && !lineUp.textContent.includes("+")) {
      lineDown.textContent = lineUp.textContent.split(" ")[0] - lineDown.textContent;
    } else if (lineUp.textContent.includes("+") || lineUp.textContent.includes("-")) {
      lineDown.textContent = parseFloat(lineUp.textContent.split(" ")[0]) + parseFloat(lineDown.textContent);
    }
  }
});

for (let i = 4; i < 17; i++) {
  buttons[i].addEventListener("click", () => {
    if ([4, 5, 6, 8, 9, 10, 12, 13, 14, 16].includes(i)) {
      if (lineDown.textContent == 0 && !lineDown.textContent.includes(".")) {
        lineDown.textContent = buttons[i].textContent;
      } else {
        lineDown.textContent += buttons[i].textContent;
      }
    }
  });
}

buttons[17].addEventListener("click", () => {
  if (!lineDown.textContent == "" && !lineDown.textContent.includes(".")) {
    lineDown.textContent += ".";
  }
});
