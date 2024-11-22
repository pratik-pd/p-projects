// Smooth scrolling for navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Tooltips for skills and work experience
document.querySelectorAll('li').forEach(item => {
    item.addEventListener('mouseover', () => {
        const tooltip = item.querySelector('.tooltip');
        if (tooltip) tooltip.style.display = 'block';
    });

    item.addEventListener('mouseout', () => {
        const tooltip = item.querySelector('.tooltip');
        if (tooltip) tooltip.style.display = 'none';
    });
});


// Select all section elements and navigation links
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

// Function to show the selected section and hide others
function showSection(targetId) {
    sections.forEach(section => {
        if (section.id === targetId) {
            section.classList.remove('hidden');
        } else {
            section.classList.add('hidden');
        }
    });
}

// Add click event listeners to navigation links
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();  // Prevent the default anchor click behavior
        const targetId = this.getAttribute('href').substring(1);  // Get the target section ID
        showSection(targetId);  // Show the relevant section
    });
});

// Initially hide all sections except the first one (About section)
showSection('about');
