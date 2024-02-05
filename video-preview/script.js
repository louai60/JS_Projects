console.log("page loaded...");

function over(element) {
    element.src="assets/Aston_Martin_hover.png"   
}
    
function out(element) {
    element.src="assets/Aston_Martin.png"      
}

function playVideo(element) {
    element.muted = true;
    element.play();
  }

  function pauseVideo(element) {
    element.muted = false;
    element.pause()
  }