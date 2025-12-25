// kids.js
document.addEventListener("DOMContentLoaded", function () {
  var playPause = document.querySelector(".play-pause");
  if (!playPause) return;

  var isPlaying = true;
  playPause.addEventListener("click", function () {
    isPlaying = !isPlaying;
    playPause.textContent = isPlaying ? "⏸" : "▶";
  });
});
