First exercise from https://github.com/wesbos/JavaScript30

- Practice event handling (keydown) and DOM manipulation
- Original solution's bug: when pressing a key for long, the transform stays permanent
- Fix: add an event listener for keyup, so when the key is unpressed, the transform is removed (class "playing" is removed) and the audio is paused
- Restriction of this fix: if user press too quickly, the sound is too short, also error can occur: Uncaught (in promise) DOMException: The play() request was interrupted by a call to pause().
- There should be a better fix, but I haven't found it for now.
- Changes to the style: different background => current problem: flex items of keys are overlapped with the instruments in the photo, if align-items to flex-start, then it's too high. Need to find a CSS fix for this.  
