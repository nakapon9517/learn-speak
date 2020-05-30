export async function execute(text) {
  if ("SpeechSynthesisUtterance" in window) {
    // var voices = window.speechSynthesis.getVoices();

    let options = new SpeechSynthesisUtterance(text);
    options.lang = "ja-JP";
    // options.voice = voices[7];
    options.rate = 1.0;
    options.pitch = 1.0;

    await window.speechSynthesis.speak(options);
    return true;
  } else {
    alert("Speech synthesis(音声合成) APIには未対応です.");
    return false;
  }
}
