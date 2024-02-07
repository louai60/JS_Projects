console.log("page loaded...");


function playVideo(element) {
    element.muted = false;
    element.play();
}

function pauseVideo(element) {
  element.muted = true;
  element.pause()
}