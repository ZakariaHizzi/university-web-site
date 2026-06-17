var navLink = document.getElementById("navLink");
function hidemenu() {
  navLink.style.right = "-700px";
}
function showmenu() {
  navLink.style.right = "0px";
}
var sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  delay: 500,
  duration: 2000,
});
sr.reveal(".top", { delay: 500 });
sr.reveal(".info-heading", { delay: 500, origin: "left" });
sr.reveal(".info-img", { delay: 1000, origin: "right" });
sr.reveal(".scroll", { delay: 500, origin: "bottom" });

const form = document.getElementById("form");
var username = document.getElementById("name");
var email = document.getElementById("email");
var message = document.getElementById("message");
var submitted = document.getElementById("submitted");
const vide = "";

form.addEventListener("submit", (e) => {
  submitted.style.right = "0px";

  e.preventDefault();
});

function closesubmitted() {
  submitted.style.right = "-250px";
  username.value = vide;
  email.value = vide;
  message.value = vide;
}
// nav
window.addEventListener("scroll", () => {
  window.scrollY > 300
    ? (document.getElementById("navbar").style.backgroundColor = "#3698f4")
    : (document.getElementById("navbar").style.backgroundColor = "transparent");
});
