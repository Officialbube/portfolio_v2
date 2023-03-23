// Get all the navbar links
const navItems = document.querySelectorAll('.nav');
// Get all the internal links on the page
const internalLinks = document.querySelectorAll('a[href^="#"]');

// Create an IntersectionObserver object
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    // Check if the section is in the viewport
    if (entry.isIntersecting) {
      // Loop through each navbar link
      navItems.forEach((link) => {
        // Remove the active class from all links
        link.classList.remove('active');

        // Add the active class to the link that matches the section ID
        if (link.getAttribute('href').substring(1) === entry.target.getAttribute('id')) {
          link.classList.add('active');
        }
      });
    }
  });
}, { threshold: 0.5 });

// Observe each section on the page
document.querySelectorAll('section').forEach((section) => {
  observer.observe(section);
});




// Add a click event listener to each link
internalLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    // Prevent the default link behavior
    e.preventDefault();

    // Get the target section based on the link's href attribute
    const target = document.querySelector(link.getAttribute('href'));

    // Scroll to the target section with a smooth behavior
    target.scrollIntoView({ behavior: 'smooth' });
  });
});
