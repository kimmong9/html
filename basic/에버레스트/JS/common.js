const btn = document.getElementById("btn");
const menu = document.querySelector(".menu");
// const close = document.querySelector("i");
const close = document.querySelector(".bars i");

//uil-multiply

btn.addEventListener("click", () => {
  menu.classList.toggle("active");
  close.classList.toggle("uil-multiply");
});
