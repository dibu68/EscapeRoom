"use strict";

const storageKey = "blackout-energiezentrum-v2";
const intro = document.querySelector("#intro");
const game = document.querySelector("#game");
const room = document.querySelector("#room");
const navigation = document.querySelector("#navigation");
const success = document.querySelector("#success");
const timer = document.querySelector("#timer");
const progress = document.querySelector("#progress");
let state = null;
let current = 0;
let storageAvailable = true;

function storageError() {
  if (storageAvailable) {
    storageAvailable = false;
    window.alert("Der Spielstand kann in diesem Browser nicht gespeichert werden. Das Spiel funktioniert bis zum Schließen der Seite weiter.");
  }
}

function load() {
  try {
    const saved = localStorage.getItem(storageKey);
    if (!saved) return null;
    const value = JSON.parse(saved);
    if (!Number.isInteger(value.completed) || value.completed < 0 || value.completed > puzzles.length ||
        !Number.isFinite(value.startedAt) || value.startedAt <= 0 ||
        (value.finishedAt !== null && (!Number.isFinite(value.finishedAt) || value.finishedAt < value.startedAt)) ||
        (value.completed === puzzles.length) !== (value.finishedAt !== null)) {
      throw new Error("Ungültiger Spielstand");
    }
    return value;
  } catch (error) {
    storageError();
    return null;
  }
}

function save() {
  if (!storageAvailable) return;
  try {
    localStorage.setItem(storageKey, JSON.stringify(state));
  } catch (error) {
    storageError();
  }
}

function formatTime(milliseconds) {
  const seconds = Math.max(0, Math.floor(milliseconds / 1000));
  return `${String(Math.floor(seconds / 60)).padStart(2, "0")}:${String(seconds % 60).padStart(2, "0")}`;
}

function updateStatus() {
  if (!state) return;
  timer.textContent = formatTime((state.finishedAt ?? Date.now()) - state.startedAt);
  progress.textContent = `${state.completed} / ${puzzles.length} Stationen`;
}

function element(tag, text, className) {
  const node = document.createElement(tag);
  if (text !== undefined) node.textContent = text;
  if (className) node.className = className;
  return node;
}

function renderNavigation() {
  navigation.replaceChildren();
  puzzles.forEach((puzzle, index) => {
    const item = element("li");
    const icon = index < state.completed ? "✓" : String(index + 1).padStart(2, "0");
    const button = element("button", `${icon}  ${puzzle.title}`, `nav-button${index === current && success.hidden ? " active" : ""}`);
    button.type = "button";
    button.disabled = index > state.completed;
    if (index === current && success.hidden) button.setAttribute("aria-current", "step");
    button.addEventListener("click", () => {
      current = index;
      success.hidden = true;
      room.hidden = false;
      render();
    });
    item.append(button);
    navigation.append(item);
  });
}

function render() {
  updateStatus();
  renderNavigation();
  room.replaceChildren();
  const puzzle = puzzles[current];
  const panel = element("article", undefined, "puzzle");
  const heading = element("div", undefined, "room-heading");
  heading.append(element("p", `STATION ${String(current + 1).padStart(2, "0")} / ${puzzles.length}`, "eyebrow"),
    element("span", `ca. ${puzzle.time} Min.`));
  panel.append(heading, element("h1", puzzle.title), element("p", puzzle.story, "story"));

  const evidence = element("div", undefined, "evidence");
  evidence.append(element("h2", "Spuren & Fundstücke"));
  puzzle.clues.forEach(clue => evidence.append(element("p", clue)));
  panel.append(evidence, element("p", puzzle.goal, "goal"));

  const form = element("form");
  form.noValidate = true;
  const wrapper = element("div", undefined, "task");
  const label = element("label", "Dreistelliger Zugangscode");
  label.htmlFor = "answer";
  const input = element("input");
  input.id = "answer";
  input.type = "text";
  input.inputMode = "numeric";
  input.autocomplete = "off";
  input.maxLength = 3;
  input.placeholder = "Zum Beispiel 042";
  input.setAttribute("aria-describedby", "answer-result");
  const result = element("span", "", "task-result");
  result.id = "answer-result";
  wrapper.append(label, input, result);
  form.append(wrapper);
  puzzle.hints.forEach((hint, index) => {
    const details = element("details");
    details.append(element("summary", `Hinweis ${index + 1} anzeigen`), element("p", hint));
    form.append(details);
  });
  const feedback = element("p", "", "feedback");
  feedback.setAttribute("role", "status");
  const submit = element("button", "Code prüfen", "primary");
  submit.type = "submit";
  form.append(feedback, submit);
  form.addEventListener("submit", event => {
    event.preventDefault();
    const matches = input.value.trim() === puzzle.code;
    input.setAttribute("aria-invalid", String(!matches));
    result.textContent = matches ? "✓ Code korrekt" : "Der Code stimmt noch nicht.";
    if (!matches) {
      feedback.textContent = "Prüft eure Spuren und die Reihenfolge. Nutzt bei Bedarf die Hinweise.";
      return;
    }
    if (current === state.completed) {
      state.completed++;
      if (state.completed === puzzles.length) state.finishedAt = Date.now();
      save();
    }
    updateStatus();
    renderNavigation();
    feedback.textContent = current === puzzles.length - 1 ? "Der Code stimmt. Die Notversorgung ist bereit!" : "Der Code stimmt. Die nächste Station ist freigeschaltet!";
    submit.hidden = true;
    const next = element("button", current === puzzles.length - 1 ? "Mission abschließen" : "Zur nächsten Station →", "primary");
    next.type = "button";
    next.addEventListener("click", () => {
      if (current === puzzles.length - 1) {
        showSuccess();
      } else {
        current++;
        render();
        room.querySelector("h1").focus();
      }
    });
    form.append(next);
  });
  panel.append(form);
  room.append(panel);
  panel.querySelector("h1").tabIndex = -1;
}

function showSuccess() {
  room.hidden = true;
  success.hidden = false;
  document.querySelector("#finish-time").textContent = `Eure benötigte Zeit: ${formatTime(state.finishedAt - state.startedAt)} Minuten (mm:ss).`;
  updateStatus();
  renderNavigation();
  success.focus();
}

state = load();
if (state) document.querySelector("#resume-note").hidden = false;
updateStatus();
setInterval(updateStatus, 1000);

document.querySelector("#start").addEventListener("click", () => {
  if (!state) {
    state = { completed: 0, startedAt: Date.now(), finishedAt: null };
    save();
  }
  intro.hidden = true;
  game.hidden = false;
  if (state.finishedAt !== null) {
    showSuccess();
  } else {
    current = state.completed;
    render();
    room.querySelector("h1").focus();
  }
});

document.querySelector("#reset").addEventListener("click", () => {
  if (!window.confirm("Wirklich den gesamten Spielstand und die Zeit zurücksetzen?")) return;
  state = null;
  try {
    localStorage.removeItem(storageKey);
  } catch (error) {
    storageError();
  }
  intro.hidden = false;
  game.hidden = true;
  success.hidden = true;
  room.hidden = false;
  document.querySelector("#resume-note").hidden = true;
  timer.textContent = "00:00";
  progress.textContent = `0 / ${puzzles.length} Stationen`;
  document.querySelector("#start").focus();
});
