function playSound(e) {
  const audio = document.querySelector(`audio[data-note="${e.keyCode}"]`);
  const note = document.querySelector(
    `.notes__note[data-note="${e.keyCode}"],
    .notes__note-black[data-note="${e.keyCode}"]`
  );
  if (!audio) return; //stop the function from running all together
  audio.currentTime = 0; //rewine to the start
  audio.play();
  note.classList.add("playing");
}

function removeTransition(e) {
  if (e.propertyName !== "transform") return; //skip it if it not a transform
  this.classList.remove("playing");
}

const notes = document.querySelectorAll(".notes__note, .notes__note-black");
notes.forEach((note) =>
  note.addEventListener("transitionend", removeTransition)
);
window.addEventListener("keydown", playSound);
