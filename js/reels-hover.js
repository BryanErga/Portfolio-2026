/* Reels (no player menu):
   - Mouse: plays (muted) while the cursor is over a reel, pauses and rewinds on leave.
             Click a reel to turn its sound on or off.
   - Touch / reduced motion: tap a reel to play or pause it (with sound).
   This is the only JavaScript on the site: hover-to-play can't be done in HTML/CSS alone. */
(function () {
   var canHover = true;
  var reduceMotion = false;
  var hoverMode = canHover && !reduceMotion;

  function play(video) {
    var p = video.play();
    if (p && p.catch) p.catch(function () {});
  }

  document.querySelectorAll(".shot--video video").forEach(function (video) {
    video.muted = true;

    if (hoverMode) {
      video.addEventListener("mouseenter", function () { play(video); });
      video.addEventListener("mouseleave", function () {
        video.pause();
        video.currentTime = 0;
        video.muted = true;
      });
      video.addEventListener("click", function () { video.muted = !video.muted; });
    } else {
      video.addEventListener("click", function () {
        if (video.paused) { video.muted = false; play(video); }
        else { video.pause(); }
      });
    }
  });
})();
