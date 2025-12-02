// Simple JS for pop-ups and small animations (Event Listeners)

// Run after page loads
document.addEventListener("DOMContentLoaded", function () {
  // 1) Pop-up & animation on all buttons
  const allButtons = document.querySelectorAll(".btn, button");

  allButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      // small visual pop
      btn.classList.add("btn-pop");
      setTimeout(function () {
        btn.classList.remove("btn-pop");
      }, 120);

      // popup message
      const label = btn.textContent.trim() || "this button";
      alert("You clicked: " + label);
    });
  });

  // 2) Special behaviour for Join button on Home page
  const joinBtn = document.getElementById("joinBtn");
  const heroNote = document.getElementById("heroNote");

  if (joinBtn && heroNote) {
    joinBtn.addEventListener("click", function () {
      heroNote.textContent =
        "Awesome! After registering, explore Author Spotlight and Book Reviews to get started.";
    });
  }

  // 3) Card pop animation (authors + reviews)
  const cards = document.querySelectorAll(".card");

  cards.forEach(function (card) {
    card.addEventListener("click", function () {
      card.classList.add("card-pop");
      setTimeout(function () {
        card.classList.remove("card-pop");
      }, 160);
    });
  });
});
