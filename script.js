
document.addEventListener("DOMContentLoaded", function () {
  const allButtons = document.querySelectorAll(".btn, button");

  allButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
     
      btn.classList.add("btn-pop");
      setTimeout(function () {
        btn.classList.remove("btn-pop");
      }, 120);

     
      const label = btn.textContent.trim() || "this button";
      alert("You clicked: " + label);
    });
  });

  
  const joinBtn = document.getElementById("joinBtn");
  const heroNote = document.getElementById("heroNote");

  if (joinBtn && heroNote) {
    joinBtn.addEventListener("click", function () {
      heroNote.textContent =
        "Awesome! After registering, explore Author Spotlight and Book Reviews to get started.";
    });
  }


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

