let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#Reset");

const winnerBox = document.getElementById("winnerBox");
const winnerName = document.getElementById("winnerName");

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
    // Prevent clicking an already filled box
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
  enableBoxes();
  winnerBox.classList.remove("show");
});

function showWinner(winner) {
  winnerName.innerText = winner;
  winnerBox.classList.add("show");
}

function disableBoxes() {
  boxes.forEach((box) => {
    box.disabled = true;
  });
}

function enableBoxes() {
  boxes.forEach((box) => {
    box.disabled = false;
    box.innerHTML = "";
  });
}

function check() {
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

  let draw = true;

  boxes.forEach((box) => {
    if (box.innerHTML === "") {
      draw = false;
    }
  });

  if (draw) {
    winnerName.innerText = "It's a Draw!";
    winnerBox.classList.add("show");
  }
}
