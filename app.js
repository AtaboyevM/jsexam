let modeBtn = document.querySelector(".mode-header");
let body = document.body;

let theme = localStorage.getItem("theme");

if (theme === "dark") {
  body.classList.add("dark");
} else {
  body.classList.remove("dark");
}

modeBtn.addEventListener("click", () => {
  body.classList.add("dark");
  localStorage.setItem("theme", "dark");
});

modeBtn.addEventListener("dblclick", () => {
  body.classList.remove("dark");
  localStorage.setItem("theme", "light");
});

// like

const likes = document.querySelectorAll(".like");

likes.forEach((like) => {
  like.addEventListener("click", () => {
    like.classList.toggle("active");
    if (like.classList.contains("active")) {
      like.textContent = "❤️";
    } else {
      like.textContent = "🤍";
    }
  });
});


// seeAllBtn

let btnhtml = document.querySelector(".seeAllbtnpp");
let hiddenCards = document.querySelectorAll(".korinmas");

hiddenCards.forEach((card) => {
  btnhtml.addEventListener("click", () => {
    card.classList.toggle("korinmas");

    if (btnhtml.textContent.includes("See all...")) {
      btnhtml.textContent = "Close";
    } else {
      btnhtml.textContent = "See all...";
    }
  });
});