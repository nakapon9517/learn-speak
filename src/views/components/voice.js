export const speak = (text) => {
  if (!"SpeechSynthesisUtterance" in window) {
    alert("Speech synthesis(音声合成) APIには未対応です.");
    return;
  }

  var voices = window.speechSynthesis.getVoices();

  let options = new SpeechSynthesisUtterance(text);
  options.lang = "ja-JP";
  options.voice = voices[7];
  options.rate = 1.5;
  options.pitch = 0.3;
  window.speechSynthesis.speak(options);
};
