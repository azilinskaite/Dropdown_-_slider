// DROPDOWN MENU
const dropdownBtn = document.getElementById("btn");
const dropdownMenu = document.getElementById("dropdown");

// Toggle dropdown function
const toggleDropdown = function () {
  dropdownMenu.classList.toggle("show");
};

// Toggle dropdown open/close when dropdown button is clicked
dropdownBtn.addEventListener("click", function (e) {
  e.stopPropagation();
  toggleDropdown();
});

// Close dropdown when clicking outside
document.addEventListener("click", function (e) {
  if (!dropdownBtn.contains(e.target) && !dropdownMenu.contains(e.target)) {
    if (dropdownMenu.classList.contains("show")) {
      toggleDropdown();
    }
  }
});

// Prevent closing when clicking inside the dropdown
dropdownMenu.addEventListener("click", function (e) {
  e.stopPropagation();
});

// SLIDER