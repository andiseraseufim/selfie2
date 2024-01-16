let img_id = "selfie1";
function take_snapshot() {
  console.log("Capturando selfie: " + img_id);
  Webcam.snap(function(data_uri) {
    if (img_id === "selfie1") {
      document.getElementById("result1").innerHTML = '<img src="' + data_uri + '"/>';
    } if (img_id === "selfie2") {
      document.getElementById("result2").innerHTML = '<img src="' + data_uri + '"/>';
    } if (img_id === "selfie3") {
        document.getElementById("result3").innerHTML = '<img src="' + data_uri + '"/>';
    }

  });
}
function speak(speak_data) {
  let utterThis = new SpeechSynthesisUtterance(speak_data);
  synth.speak(utterThis);
}
setTimeout(function() {
  img_id = "selfie1";
  speak("Capturando a primeira selfie em 5 segundos.");
  take_snapshot();
}, 5000);
setTimeout(function() {
  img_id = "selfie2";
  speak("Capturando a segunda selfie em 10 segundos.");
  take_snapshot();
}, 10000);
setTimeout(function() {
    img_id = "selfie3";
    speak("Capturando a terceira selfie em 10 segundos.");
    take_snapshot();
  }, 10000);