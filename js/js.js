function play() {
   var aud = $('audio')[0];

   if (aud.paused) {
      aud.play();
   } else {
      aud.pause();
   }
}