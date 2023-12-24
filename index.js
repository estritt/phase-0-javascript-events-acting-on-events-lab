const dodger = document.getElementByID("dodger");

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if (left > 0) {
        dodger.style.left = `${left - 1}px`;
    }
}

function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    // I got really stuck on this. I didn't want to hardcode the value in the if expression and tried getting the width attributes
    // as they were assigned in index.css. The console logs below only returned 0 though. I was told maybe the DOM isn't loaded, 
    // but that can't be the case if the functions are working. 
    // console.log(document.querySelector("#dodger").offsetWidth);
    // console.log(document.querySelector("#game").offsetWidth);
    if (left < 360) {
        dodger.style.left = `${left + 1}px`;
    }
}

document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
        moveDodgerLeft();
    }
    else if (e.key === "ArrowRight") {
        moveDodgerRight();
    }
  });
