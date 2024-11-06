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

// CAROUSEL

const slides = document.querySelectorAll(".slides img");
const indicators = document.querySelectorAll(".navigation-indicators .indicator")
let slideIndex = 0;
let intervalId = null;

// create slider when DOM is loaded
document.addEventListener("DOMContentLoaded", createSlider);

// if slides exist, display slides
function createSlider() {
    if(slides.length > 0) {
    slides[slideIndex].classList.add("displaySlide");
    intervalId = setInterval(nextSlide, 5000);
    }
}

// start showing slides from index 0
function showSlide(index) {
    slideIndex = index;
    if(index >= slides.length){
        slideIndex = 0;
    } else if(index < 0){
        slideIndex = slides.length - 1;
    }
    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide");
    updateNavIndicator();
}

// toggle indicator class depending on slide index
function updateNavIndicator() {
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle("active", index === slideIndex);
    });
}

function prevSlide() {
    clearInterval(intervalId);
    slideIndex--;
    showSlide(slideIndex);
}

function nextSlide() {
    clearInterval(intervalId);
    slideIndex++;
    showSlide(slideIndex);
}

indicators.forEach((indicator, index) => {
    indicator.addEventListener("click", () => {
        clearInterval(intervalId);
        showSlide(index);
    });
});



