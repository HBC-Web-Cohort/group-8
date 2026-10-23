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
// Select the theme toggle button
const themeSwitch = document.getElementById("themeSwitch");

// Apply the selected theme
function applyTheme(theme) {
  document.body.setAttribute("data-theme", theme);

  // Update the toggle button
  themeSwitch.checked = theme === "dark";

  // Save the user's preference
  localStorage.setItem("websiteTheme", theme);
}

// Load the saved theme when the page opens
const savedTheme = localStorage.getItem("websiteTheme") || "light";

applyTheme(savedTheme);

// Change the theme when the button is clicked
themeSwitch.addEventListener("change", function () {
  const selectedTheme = themeSwitch.checked ? "dark" : "light";

  applyTheme(selectedTheme);
});