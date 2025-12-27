let speech = new SpeechSynthesisUtterance();

let voices = [];

let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
  //an eventlistener that runs when list of available voices is loaded or changes.
  voices = window.speechSynthesis.getVoices(); //retrive list of all available voices from browser's speech synthesis engine and store them in the voices array.
  speech.voice = voices[0]; //set the default voice for the speech object to the first voice in the loaded list

  voices.forEach(
    //iterate through the voices array
    (voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)) ///for each voice it creates a new option element for the drop down list.
  );
};

voiceSelect.addEventListener("change", () => {
  speech.voice = voices[voiceSelect.value];
});

document.querySelector("button").addEventListener("click", () => {
  speech.text = document.querySelector("textarea").value;
  window.speechSynthesis.speak(speech);
});
