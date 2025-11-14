window.onload = () => {
  const welcome = document.getElementById("welcome");
  const minty = document.getElementById("minty");
  const questionBox = document.getElementById("questionBox");
  const mainContent = document.getElementById("mainContent");
  const yesButton = document.getElementById("yesButton");

  setTimeout(() => {
    welcome.classList.add("show");
  }, 500);

  setTimeout(() => {
    minty.classList.add("show");
  }, 1500);

  setTimeout(() => {
    questionBox.style.visibility = "visible";
    questionBox.classList.add("show");
  }, 2500);

  yesButton.onclick = () => {
    document.getElementById("animationScreen").style.display = "none";
    mainContent.style.display = "block";
  };
};
