// DROPDOWN MENU

const dropdownButton = document.querySelector(".dropdown-btn");
const dropdownContent = document.querySelector(".dropdown-content");
const menuItems = dropdownContent.querySelectorAll("a");

// dropdown becomes visible when button is clicked
dropdownButton.addEventListener("click", (e) => {
    e.stopPropagation(); // prevent the click event from bubbling up
    dropdownContent.classList.toggle("visible");
});

// dropdown closes when clicking outside
document.addEventListener("click", (e) => {
    if (!dropdownButton.contains(e.target) && !dropdownContent.contains(e.target)) {
        dropdownContent.classList.remove("visible");
    }
});

// dropdown closes when menu item is clicked
menuItems.forEach(item => {
    item.addEventListener("click", () => {
        dropdownContent.classList.remove("visible");
    });
});

// SLIDER