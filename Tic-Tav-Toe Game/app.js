let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#Reset");
let msg = document.querySelector("#msg");

let turnO = true;

let winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    // Don't allow clicking an already filled box
    if (box.innerHTML !== "") return;

    if (turnO) {
      box.innerHTML = "O";
      turnO = false;
    } else {
      box.innerHTML = "X";
      turnO = true;
    }

    check();
  });
});

reset.addEventListener("click", () => {
  turnO = true;
  msg.innerHTML = "";
  enableBoxes();
});

const showWinner = (winner) => {
  msg.innerHTML = `Winner is ${winner}`;
};

const disableBoxes = () => {
  boxes.forEach((box) => {
    box.disabled = true;
  });
};

const enableBoxes = () => {
  boxes.forEach((box) => {
    box.disabled = false;
    box.innerHTML = "";
  });
};

const check = () => {
  for (let pattern of winPatterns) {
    let pos1 = boxes[pattern[0]].innerHTML;
    let pos2 = boxes[pattern[1]].innerHTML;
    let pos3 = boxes[pattern[2]].innerHTML;

    if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
      if (pos1 === pos2 && pos2 === pos3) {
        showWinner(pos1);
        disableBoxes();
        return;
      }
    }
  }
};
