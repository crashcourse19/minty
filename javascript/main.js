


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