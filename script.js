const links = document.querySelectorAll(".tap-link");

document.querySelector(".mob-btn").addEventListener("click", () => {
  document.querySelector("body").classList.toggle("flow-hidden");
  document.querySelector(".first-line").classList.toggle("active-1");
  document.querySelector(".second-line").classList.toggle("active-2");
  document.querySelector(".third-line").classList.toggle("active-3");
  document.querySelector(".main-menu").classList.toggle("move-right");
});

function resizeFn() {
  if (window.innerWidth <= 768) {
    links.forEach((item) => {
      item.addEventListener("click", () => {
        document.querySelector("body").classList.toggle("flow-hidden");
        document.querySelector(".first-line").classList.toggle("active-1");
        document.querySelector(".second-line").classList.toggle("active-2");
        document.querySelector(".third-line").classList.toggle("active-3");
        document.querySelector(".main-menu").classList.toggle("move-right");
      });
    });
  }
}
window.onresize = resizeFn;
resizeFn();
