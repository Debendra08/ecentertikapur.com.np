document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".stat-number");
  const section = document.querySelector(".about-container");
  let started = false;

  const startCounting = () => {
    counters.forEach(counter => {
      const target = +counter.getAttribute("data-target");
      let count = 0;
      let increment;

      // 🎯 Separate speed control
      if (target > 1000) {
        increment = Math.ceil(target / 100); // Faster for large numbers
      } else {
        // increment = Math.ceil(target / 9000000000);
        increment = 1; // Slower for small numbers
      }

      const updateCounter = () => {
        count += increment;
        if (count >= target) {
          counter.textContent = target + "+";
        } else {
          counter.textContent = count + "+";
          requestAnimationFrame(updateCounter);
        }
      };

      updateCounter();
    });
  };

  // Detect when section becomes visible
  window.addEventListener("scroll", () => {
    const sectionTop = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (!started && sectionTop < windowHeight - 100) {
      started = true;
      startCounting();
    }
  });
});



  function changeImage(image) {
    document.getElementById("main-image").src = image.src;
}

let images = [
    "./images/rickshaw 1.png",
    "./images/rick, scooter.jpg",
    "./images/batteries icon.png",
    "./images/6 customer.png",
    "./images/customer 4.jpg"
];

let index = 0;
let mainImage = document.getElementById("main-image");

// Show image
function showImage(i){
    index = i;
    mainImage.src = images[index];
}

// Next
function nextSlide(){
    index = (index + 1) % images.length;
    mainImage.src = images[index];
}

// Prev
function prevSlide(){
    index = (index - 1 + images.length) % images.length;
    mainImage.src = images[index];
}

// Thumbnail click
function goToSlide(i){
    showImage(i);
}

// Auto slide
setInterval(() => {
    nextSlide();
}, 10000);





const track = document.querySelector('.testimonial-track');
const slides = document.querySelectorAll('.testimonial-slide');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
  const navMenu = document.getElementById("navMenu");
  const navLinks = document.querySelectorAll(".nav-menu a");

  function toggleMenu() {
    navMenu.classList.toggle("active");
  }

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      // Close menu only on mobile
      if (window.innerWidth <= 768) {
        navMenu.classList.remove("active");
      }
    });
  });

let index = 0;
const slideCount = slides.length;
let autoSlide;

 function toggleMenu() {
    document.getElementById("navMenu").classList.toggle("active");
  }
  // for hamburger menu 



/* // Update slide position */
function updateSlider() {
  track.style.transform = `translateX(-${index * 100}%)`;
  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');
}

// Go to next slide
function nextSlide() {
  index = (index + 1) % slideCount;
  updateSlider();
}

// Go to previous slide
function prevSlide() {
  index = (index - 1 + slideCount) % slideCount;
  updateSlider();
}

// Auto slide every 10 seconds
function startAutoSlide() {
  autoSlide = setInterval(nextSlide, 30000);
}

// Stop auto slide when user interacts
function stopAutoSlide() {
  clearInterval(autoSlide);
  startAutoSlide(); // restart timer
}

// Event listeners
nextBtn.addEventListener('click', () => {
  nextSlide();
  stopAutoSlide();
});

prevBtn.addEventListener('click', () => {
  prevSlide();
  stopAutoSlide();
});

dots.forEach((dot, dotIndex) => {
  dot.addEventListener('click', () => {
    index = dotIndex;
    updateSlider();
    stopAutoSlide();
  });
});

// Initialize
updateSlider();
startAutoSlide();


let images = [
    "./images/rickshaw 1.png",
    "./images/rick, scooter.jpg",
    "./images/batteries icon.png",
    "./images/6 customer.png",
    "./images/customer 4.jpg"
];

let index = 0;
let mainImage = document.getElementById("main-image");

// Show image
function showImage(i){
    index = i;
    mainImage.src = images[index];
}

// Next
function nextSlide(){
    index = (index + 1) % images.length;
    mainImage.src = images[index];
}

// Prev
function prevSlide(){
    index = (index - 1 + images.length) % images.length;
    mainImage.src = images[index];
}

// Thumbnail click
function goToSlide(i){
    showImage(i);
}

// Auto slide
setInterval(() => {
    nextSlide();
}, 10000);






const track = document.querySelector('.testimonial-track');
const slides = document.querySelectorAll('.testimonial-slide');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
  const navMenu = document.getElementById("navMenu");
  const navLinks = document.querySelectorAll(".nav-menu a");

  function toggleMenu() {
    navMenu.classList.toggle("active");
  }

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      // Close menu only on mobile
      if (window.innerWidth <= 768) {
        navMenu.classList.remove("active");
      }
    });
  });

let index = 0;
const slideCount = slides.length;
let autoSlide;

 function toggleMenu() {
    document.getElementById("navMenu").classList.toggle("active");
  }
  // for hamburger menu 



/* // Update slide position */
function updateSlider() {
  track.style.transform = `translateX(-${index * 100}%)`;
  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');
}

// Go to next slide
function nextSlide() {
  index = (index + 1) % slideCount;
  updateSlider();
}

// Go to previous slide
function prevSlide() {
  index = (index - 1 + slideCount) % slideCount;
  updateSlider();
}

// Auto slide every 10 seconds
function startAutoSlide() {
  autoSlide = setInterval(nextSlide, 30000);
}

// Stop auto slide when user interacts
function stopAutoSlide() {
  clearInterval(autoSlide);
  startAutoSlide(); // restart timer
}

// Event listeners
nextBtn.addEventListener('click', () => {
  nextSlide();
  stopAutoSlide();
});

prevBtn.addEventListener('click', () => {
  prevSlide();
  stopAutoSlide();
});

dots.forEach((dot, dotIndex) => {
  dot.addEventListener('click', () => {
    index = dotIndex;
    updateSlider();
    stopAutoSlide();
  });
});

// Initialize
updateSlider();
startAutoSlide();

function changeImage(image) {
    document.getElementById("main-image").src = image.src;
}


  const form = document.getElementById("quoteForm");
  const status = document.getElementById("form-status");

  async function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(form);

    fetch(form.action, {
      method: form.method,
      body: data,
      headers: { 'Accept': 'application/json' }
    }).then(response => {
      if (response.ok) {
        status.innerHTML = "✅ Request sent successfully!";
        form.reset();
      } else {
        status.innerHTML = "❌ Oops! Something went wrong.";
      }
    }).catch(error => {
      status.innerHTML = "❌ Network error!";
    });
  }

  form.addEventListener("submit", handleSubmit);




  const track = document.querySelector('.testimonial-track');
const slides = document.querySelectorAll('.testimonial-slide');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
  const navMenu = document.getElementById("navMenu");
  const navLinks = document.querySelectorAll(".nav-menu a");

  function toggleMenu() {
    navMenu.classList.toggle("active");
  }

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      // Close menu only on mobile
      if (window.innerWidth <= 768) {
        navMenu.classList.remove("active");
      }
    });
  });

let index = 0;
const slideCount = slides.length;
let autoSlide;

 function toggleMenu() {
    document.getElementById("navMenu").classList.toggle("active");
  }
  // for hamburger menu 



/* // Update slide position */
function updateSlider() {
  track.style.transform = `translateX(-${index * 100}%)`;
  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');
}

// Go to next slide
function nextSlide() {
  index = (index + 1) % slideCount;
  updateSlider();
}

// Go to previous slide
function prevSlide() {
  index = (index - 1 + slideCount) % slideCount;
  updateSlider();
}

// Auto slide every 10 seconds
function startAutoSlide() {
  autoSlide = setInterval(nextSlide, 30000);
}

// Stop auto slide when user interacts
function stopAutoSlide() {
  clearInterval(autoSlide);
  startAutoSlide(); // restart timer
}

// Event listeners
nextBtn.addEventListener('click', () => {
  nextSlide();
  stopAutoSlide();
});

prevBtn.addEventListener('click', () => {
  prevSlide();
  stopAutoSlide();
});

dots.forEach((dot, dotIndex) => {
  dot.addEventListener('click', () => {
    index = dotIndex;
    updateSlider();
    stopAutoSlide();
  });
});

// Initialize
updateSlider();
startAutoSlide();


