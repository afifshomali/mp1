/* Your JS here. */


/** Sticky Header on Scroll */
document.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.classList.add("shrink");
  } else {
    header.classList.remove("shrink");
  }
});

/** Section-based Navbar Highlight */
document.addEventListener("scroll", () => {

  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".navbar a");

  let currentSection = sections[0].id; // default to first section

  sections.forEach(section => {
    const sectionTop = section.offsetTop - header.offsetHeight; // account for fixed header
    const sectionBottom = sectionTop + section.offsetHeight;
    if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
      currentSection = section.id;
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("active");
    }
  });
});

// Modal functionality
const projectItems = document.querySelectorAll('.project-item');
const modals = document.querySelectorAll('.modal');
const closes = document.querySelectorAll('.modal .close');

// Open modal
projectItems.forEach(item => {
  item.addEventListener('click', () => {
    const modalId = item.getAttribute('data-modal');
    document.getElementById(modalId).style.display = 'flex';
  });
});

// Close modal
closes.forEach(close => {
  close.addEventListener('click', () => {
    close.closest('.modal').style.display = 'none';
  });
});

// Close modal when clicking outside content
modals.forEach(modal => {
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.style.display = 'none';
  });
});

// Carousel functionality
const track = document.querySelector(".carousel-track");
const slides = Array.from(track.children);
const nextBtn = document.querySelector(".carousel .next");
const prevBtn = document.querySelector(".carousel .prev");

let currentSlide = 0;

function updateCarousel() {
  const slideWidth = slides[0].getBoundingClientRect().width;
  track.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

nextBtn.addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % slides.length;
  updateCarousel();
});

prevBtn.addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  updateCarousel();
});

window.addEventListener("resize", updateCarousel);

