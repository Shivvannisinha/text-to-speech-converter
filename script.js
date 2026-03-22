// simple text to speech handling
let speech = new SpeechSynthesisUtterance();

let voices = [];
const voiceSelect = document.querySelector("select");

function populateVoices() {
  voices = window.speechSynthesis.getVoices();
  if (voices.length) speech.voice = voices[0];
  voiceSelect.innerHTML = '';
  voices.forEach((voice, i) => {
    voiceSelect.options[i] = new Option(voice.name, i);
  });
}

window.speechSynthesis.onvoiceschanged = populateVoices;
populateVoices();

voiceSelect.addEventListener("change", () => {
  speech.voice = voices[voiceSelect.value];
});

document.querySelector("button").addEventListener("click", () => {
  speech.text = document.querySelector("textarea").value;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(speech);
});