export const speak = (text) => {
  var options = new SpeechSynthesisUtterance(text);
  options.lang = "ja-JP";
  window.speechSynthesis.speak(options);
};
