$(".nav-link").on("click", () => {
  $("#mynavbar").collapse("hide");
});
// overal
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    } else {
      entry.target.classList.remove("active");
    }
  });
});

document.querySelectorAll(".overal").forEach((element) => {
  observer.observe(element);
});
$(document).ready(function () {
  $('[data-toggle="tooltip"]').tooltip();
});
