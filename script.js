var navLink = document.getElementById("navLink");
function hidemenu() {
  navLink.style.right = "-200px";
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
sr.reveal(".text", { delay: 500 });
sr.reveal(".info-heading", { delay: 500, origin: "left" });
sr.reveal(".info-img", { delay: 1000, origin: "right" });
sr.reveal(".scroll", { delay: 500, origin: "bottom" });
