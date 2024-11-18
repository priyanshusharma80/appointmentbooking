const sliderWrapper = document.querySelector('.slider-wrapper');
const slides = document.querySelectorAll('.slide');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
let currentIndex = 1; // Start on the first actual slide

// Move the wrapper to show the actual first slide initially
sliderWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;

function updateSlider() {
  sliderWrapper.style.transition = 'transform 0.5s ease';
  sliderWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function resetSlider(position) {
  sliderWrapper.style.transition = 'none';
  sliderWrapper.style.transform = `translateX(-${position * 100}%)`;
}

// Left arrow click event
leftArrow.addEventListener('click', () => {
  currentIndex--;
  updateSlider();
  
  // Handle circular transition from first slide to last duplicate
  if (currentIndex === 0) {
    setTimeout(() => {
      currentIndex = slides.length - 2; // Second-to-last slide (duplicate last slide)
      resetSlider(currentIndex);
    }, 500); // Wait for the transition to complete
  }
});

// Right arrow click event
rightArrow.addEventListener('click', () => {
  currentIndex++;
  updateSlider();
  
  // Handle circular transition from last slide to first duplicate
  if (currentIndex === slides.length - 1) {
    setTimeout(() => {
      currentIndex = 1; // First actual slide
      resetSlider(currentIndex);
    }, 500);
  }
});

// Optional: Auto-slide functionality
// setInterval(() => {
//   rightArrow.click(); // Trigger right arrow click to simulate auto-slide
// }, 3000);


const arrows = document.querySelectorAll('.arrow');

arrows.forEach(arrow => {
  arrow.addEventListener('click', () => {
    arrow.classList.toggle('clicked');
  });
});



// JavaScript to toggle the menu
const hamburger = document.querySelector(".hamburger");  // Select hamburger icon
const desktopNav = document.querySelector(".desktopNav");
const mobileNav = document.querySelector(".mobileNav");
const cross = document.getElementById('crossicon');  

hamburger.addEventListener("click", function() {
  mobileNav.classList.add('menu-activate');
});

// Hide mobile navigation when cross is clicked
cross.addEventListener('click', () => {
  // mobileNav.style.display = 'none';
  mobileNav.classList.remove('menu-activate');
});


document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault();
  
  const inputs = document.querySelectorAll(".form-input, .form-select");
  
  let valid = true;
  inputs.forEach(input => {
      const tooltip = input.parentElement.querySelector(".tooltip2");
      tooltip.classList.remove("active");

      
      if (input.required && input.value.trim() === "") {
          tooltip.classList.add("active");
          const label = input.parentElement.querySelector('label');
          label.style.color = '#FF7777';
          input.style.borderColor = '#FF7777';
          input.focus();
          valid = false;

      }

    });
    if(valid){
      window.location.href = 'success.html';
    }
});



document.querySelector('.playbutton').addEventListener('click', function () {
  document.getElementById('videoPopup').style.display = 'flex';
});

function closePopup() {
  document.getElementById('videoPopup').style.display = 'none';
}


