// main.js
(function () {
  var path = window.location.pathname.split("/").pop() || "index.html";
  var links = document.querySelectorAll(".nav-links a");
  links.forEach(function (link) {
    if (link.getAttribute("href") === path) {
      link.classList.add("active");
    }
  });
})();
