window.addEventListener('keydown', function(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) { return; } // stop the function if audio doesn't exist
  audio.currentTime = '0'; // rewind the audio to the start
  audio.play();
  key.classList.add("playing");
});

window .addEventListener('keyup', function(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) { return; }
  audio.pause();
  key.classList.remove("playing");
});

/* model solution
window.addEventListener('keydown', function(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) { return; } // stop the function if audio doesn't exist
  audio.currentTime = '0'; // rewind the audio to the start
  audio.play();
  key.classList.add("playing");

  const keys = document.querySelectorAll('.key');
  keys.forEach(key => key.addEventListener('transitioned', removeTransform));

  function removeTransform(e) {
    console.log(e);
    if (e.propertyName != 'transform') { return; } // skip if not transform css = not class .playing
    key.classList.remove("playing");
  }

});
*/
