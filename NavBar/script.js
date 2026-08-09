const menu = document.querySelector("#menu");
const close = document.querySelector("#close");
const sidebar = document.querySelector(".sidebar");

menu.addEventListener("click", () => {
  sidebar.style.display = "flex";
});

close.addEventListener("click", () => {
  sidebar.style.display = "none";
});
