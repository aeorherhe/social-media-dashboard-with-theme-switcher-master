// select elements

const checkbox = document.querySelector(".label");

checkbox.addEventListener("click", () => {
  console.log("hello");
  document.documentElement.classList.toggle("dark-mode");
  console.log(document.documentElement.classList);
});
