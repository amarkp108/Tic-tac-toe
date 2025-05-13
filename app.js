const buttons = document.querySelectorAll(".btn");
let winnermsg = document.querySelector(".hide");
let msg = document.querySelector(".msg");
let win = true;
let reset = document.querySelector(".reset-button");
const sound = document.getElementById("clickSound");
const winsound = document.getElementById("winnersound");
const failsoundeffect = document.getElementById("failsound");

let fail = true;
let btncount = 0;

const winpattern = [
  // making array of every winning position
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
buttons.forEach((button) => {
  // for filling 0 and X in box
  button.addEventListener("click", () => {
    btncount++;
    if (win) {
      button.innerText = "0";
      win = false;
      sound.currentTime = 0;
      sound.play();
    } else {
      button.innerText = "X";
      sound.currentTime = 0;
      sound.play();
      win = true;
    }
    button.disabled = true;
    checkwinner();
    failsound();
  });
});
const checkwinner = () => {
  // Matching all pattern for winner
  for (let pattern of winpattern) {
    let val1 = buttons[pattern[0]].innerText;
    let val2 = buttons[pattern[1]].innerText;
    let val3 = buttons[pattern[2]].innerText;

    if (val1 != "" && val2 != "" && val3 != "") {
      if (val1 == val2 && val2 == val3) {
        showinner(val1);
        disabledallbutton();
        playsound();
      }
    }
  }
};
const showinner = (winner1) => {
  // For show winner
  winnermsg.innerText = `winner is ${winner1}`;
  msg.classList.remove("hide");
  fail = false;
};

const disabledallbutton = () => {
  // disabled all button after winning
  buttons.forEach((button) => {
    button.disabled = true;
  });
};
reset.addEventListener("click", () => {
  buttons.forEach((button) => {
    button.innerText = "";
    button.disabled = false;
    msg.classList.add("hide");
  });
});

const playsound = () => {
  winsound.currentTime = 0;
  winsound.play();
};

const failsound = () => {
  if (fail == true && btncount == 9) {
    failsoundeffect.currentTime = 0;
    failsoundeffect.play();
    winnermsg.innerText = "Restart the Game";
    msg.classList.remove("hide");
  }
};
