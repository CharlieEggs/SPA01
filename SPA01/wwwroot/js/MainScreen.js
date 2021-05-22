window.onload = function() {
    document.getElementById("my_audio").play();
}

var myAudio = document.getElementById("my_audio");
var isPlaying = false;

function togglePlay() {
  isPlaying ? myAudio.pause() : myAudio.play();
};

myAudio.onplaying = function() {
  isPlaying = true;
};
myAudio.onpause = function() {
  isPlaying = false;
};