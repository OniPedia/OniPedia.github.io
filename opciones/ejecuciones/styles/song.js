var audio = document.getElementById("celestes");
var playBtn = document.getElementById("play-btn");
var pauseBtn = document.getElementById("pause-btn");

playBtn.addEventListener("click", function() {
  audio.play();
  playBtn.style.display = "none";
  pauseBtn.style.display = "inline-block";
});

pauseBtn.addEventListener("click", function() {
  audio.pause();
  pauseBtn.style.display = "none";
  playBtn.style.display = "inline-block";
});
