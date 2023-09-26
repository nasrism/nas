document.addEventListener('click', function (event) {
  const nav = document.querySelector('.top-nav[data-nav="open"]');
  if (nav && !nav.contains(event.target)) {
      nav.setAttribute('data-nav', 'close');
  }
});

function navbar() {
  const nav = document.querySelector('.top-nav');
  const currentNavState = nav.getAttribute('data-nav');
  
  if (currentNavState === 'open') {
      nav.setAttribute('data-nav', 'close');
  } else {
      nav.setAttribute('data-nav', 'open');
  }
}
// this also
function navibar() {
  const nav = document.querySelector('.top-nav');
  const currentNavState = nav.getAttribute('data-nav');
  
  if (currentNavState === 'open') nav.setAttribute('data-nav', 'close');
}

function scrollToSection(clickedElement) {
  const targetId = clickedElement.getAttribute('data-target');
  const targetSection = document.querySelector(targetId);
  navbar();
  if (targetSection) {
    targetSection.scrollIntoView({ behavior: 'smooth' });
  }
}

function lazyLoadImages() {
  const images = document.querySelectorAll('#projects img[data-src]');
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.2, // Adjust this threshold as needed
  };

  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        const src = img.getAttribute('data-src');
        
        // Load the image
        img.src = src;
        img.removeAttribute('data-src');
        
        // Stop observing the image after it's loaded
        imageObserver.unobserve(img);
      }
    });
  }, options);

  // Start observing each image
  images.forEach((img) => {
    imageObserver.observe(img);
  });
}

// Call the lazyLoadImages function when the page loads
window.addEventListener('load', lazyLoadImages);

// project slide
const project = document.querySelectorAll(".project");
const slideObserver = new IntersectionObserver(
  entries=>{
entries.forEach(entry =>{
  entry.target.classList.toggle("slide",entry.isIntersecting)
})},
{
  threshold: 0,
}
)

project.forEach(project=>{
  slideObserver.observe(project);

})

// project detail