// Setup
const sounds = ["S", "R", "L", "TH", "K", "G"];
const positions = ["start", "middle", "end"];
let selectedSound = "", selectedPos = "", selectedMode = "", studentName = "";
let boardState = Array(9).fill("");
let currentPlayer = "X";
let isGameActive = true;

// Load wordBank
if (!localStorage.wordBank) localStorage.wordBank = JSON.stringify({});
const wordBank = JSON.parse(localStorage.wordBank);

// Load student progress
if (!localStorage.progress) localStorage.progress = JSON.stringify({});

function createButtons(list, containerId, attr) {
  const container = document.getElementById(containerId);
  list.forEach(item => {
    const btn = document.createElement("button");
    btn.textContent = item;
    btn.dataset[attr] = item;
    btn.addEventListener("click", () => {
      document.querySelectorAll(`#${containerId} button`).forEach(b => b.classList.remove("selected"));
      btn.classList.add("selected");
      if (attr === "sound") selectedSound = item;
      if (attr === "position") selectedPos = item;
      if (attr === "mode") selectedMode = item;
    });
    container.appendChild(btn);
  });
}

createButtons(sounds, "sound-buttons", "sound");
createButtons(positions, "position-buttons", "position");
createButtons(["text", "textPic", "pic"], "mode-buttons", "mode");

document.getElementById("student-name").addEventListener("input", e => {
  studentName = e.target.value.trim();
});

document.getEl
