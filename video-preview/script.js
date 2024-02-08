console.log("page loaded...");

// Video 
function playVideo(element) {
    element.muted = false;
    element.play();
}

function pauseVideo(element) {
  element.muted = true;
  element.pause()
}

// Image 
function onmouseover(image) {
  src = "assets/Aston_Martin_hover.png"
}