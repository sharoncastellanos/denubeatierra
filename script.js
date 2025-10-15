const topText = document.getElementById("topText");
const bottomText = document.getElementById("bottomText");
const lightningPath = document.getElementById("lightningPath");

let state = 0; 

function reset() {
  topText.classList.remove("visible");
  bottomText.classList.remove("visible");
  lightningPath.classList.remove("animate-down", "animate-up");

  lightningPath.style.strokeDashoffset = "1000"; 
}

function animateDown() {
  reset();

  topText.textContent = "DE NUBE";
  topText.classList.add("visible");

  setTimeout(() => {
    lightningPath.classList.add("animate-down");
  }, 390);

  setTimeout(() => {
    bottomText.textContent = "A TIERRA";
    bottomText.classList.add("visible");
  }, 713);
}

function animateUp() {
  reset();

  bottomText.textContent = "DE TIERRA";
  bottomText.classList.add("visible");

  
  lightningPath.style.strokeDashoffset = "-1000";

  setTimeout(() => {
    lightningPath.classList.add("animate-up");
  }, 300);

  
  setTimeout(() => {
    topText.textContent = "A NUBE";
    topText.classList.add("visible");
  }, 1115);
}

function loopAnimation() {
  if (state === 0) {
    animateDown();
    setTimeout(loopAnimation, 2500); 
  } else {
    animateUp();
    setTimeout(loopAnimation, 3500);
  }
  state = 2 - state;
}

loopAnimation();
