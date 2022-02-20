const navBtn = document.querySelector("#navbar-toggler");
const navDiv = document.querySelector(".navbar-collapse");

navBtn.addEventListener("click", () => {
  navDiv.classList.toggle("showNav");
});

// stopping animation and transition during window resizing
let resizeTimer;
window.addEventListener("resize", () => {
  document.body.classList.add("resize-animation-stopper");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove("resize-animation-stopper");
  }, 400);
});
let progress = document.getElementById("progressbar");
let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function () {
  let proressHeight = (window.pageYOffset / totalHeight) * 100;
  progress.style.height = proressHeight + "%";
};
