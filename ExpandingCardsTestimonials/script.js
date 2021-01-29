const testimonials = document.querySelectorAll('.card');

testimonials.forEach(testimonial => {
  
  testimonial.addEventListener('click', () => {
    removeActiveClasses();
    testimonial.classList.add('active');
  });
});

function removeActiveClasses() {
  testimonials.forEach(testimonial => {
    testimonial.classList.remove('active');
  })
}