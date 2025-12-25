// books.js
document.addEventListener("DOMContentLoaded", function () {
  var tabs = document.querySelectorAll(".filters-tabs .tab");
  var cards = document.querySelectorAll(".shelf-card");

  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      var category = tab.textContent.toLowerCase(); // "all", "science", ...

      tabs.forEach(function (t) {
        t.classList.remove("active");
      });
      tab.classList.add("active");

      cards.forEach(function (card) {
        var cardCat = card.getAttribute("data-category");
        if (category === "all" || cardCat === category) {
          card.style.display = "";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
});
