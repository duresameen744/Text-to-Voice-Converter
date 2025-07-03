let speech = new SpeechSynthesisUtterance();

let voices = [];

let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
  voices = speechSynthesis.getVoices();
  // console.log("alvc", voices[0]);
  speech.voice = voices[0];

  voices.forEach(
    (voice, i) => (voiceSelect.options[i] = new Option(voice.name, i))
  );
};

// console.log(voices);

voiceSelect.addEventListener("change", () => {
  speech.voice = voices[voiceSelect.value];
  // console.log(speech.voice);
});

document.querySelector("button").addEventListener("click", () => {
  let text = document.querySelector("textarea").value;

  if (!text.trim()) {
    alert("Please enter some text!");
    return;
  }

  speechSynthesis.cancel();

  speech.text = text;
  speechSynthesis.speak(speech);
});
