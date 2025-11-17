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


document.getElementById("searchBox").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    const q = document.getElementById("searchBox").value;
    window.location.href =
      "https://www.google.com/search?q=" + encodeURIComponent(q);
  }
});

const urlParams = new URLSearchParams(window.location.search);
const query = urlParams.get("q");

if (query) {
  window.location.href =
    "https://www.google.com/search?q=" + encodeURIComponent(query);
}