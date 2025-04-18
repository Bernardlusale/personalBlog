// Dark Mode Toggle
const toggleDarkMode = () => {
    const isDarkMode = document.body.classList.toggle('dark-mode');
    darkModeButton.textContent = isDarkMode ? 'Light Mode' : 'Dark Mode'; // Update button text
    localStorage.setItem('darkMode', isDarkMode); // Save preference to localStorage
};

// Create a button for dark mode toggle
const darkModeButton = document.createElement('button');
darkModeButton.textContent = 'Dark Mode'; // Default text
darkModeButton.style.position = 'fixed';
darkModeButton.style.bottom = '20px';
darkModeButton.style.right = '20px';
darkModeButton.style.padding = '10px 15px';
darkModeButton.style.backgroundColor = '#007BFF';
darkModeButton.style.color = 'white';
darkModeButton.style.border = 'none';
darkModeButton.style.borderRadius = '5px';
darkModeButton.style.cursor = 'pointer';
darkModeButton.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
darkModeButton.style.transition = 'background-color 0.3s ease, transform 0.2s ease';

// Add hover effect
darkModeButton.addEventListener('mouseover', () => {
    darkModeButton.style.backgroundColor = '#0056b3';
    darkModeButton.style.transform = 'scale(1.05)';
});
darkModeButton.addEventListener('mouseout', () => {
    darkModeButton.style.backgroundColor = '#007BFF';
    darkModeButton.style.transform = 'scale(1)';
});

// Add click event listener
darkModeButton.addEventListener('click', toggleDarkMode);

// Append the button to the body
document.body.appendChild(darkModeButton);

// Load dark mode preference from localStorage
const savedDarkMode = localStorage.getItem('darkMode') === 'true';
if (savedDarkMode) {
    document.body.classList.add('dark-mode');
    darkModeButton.textContent = 'Light Mode'; // Update button text if dark mode is active
}

// Toggle About Me Section
const toggleAboutButton = document.getElementById('toggle-about');
const aboutContainer = document.querySelector('.about-container');

toggleAboutButton.addEventListener('click', () => {
    const isVisible = aboutContainer.style.display === 'block';
    aboutContainer.style.display = isVisible ? 'none' : 'block';
    toggleAboutButton.textContent = isVisible ? 'Show About Me' : 'Hide About Me';
});

// Toggle Contact Me Section
const toggleContactButton = document.getElementById('toggle-contact');
const contactContainer = document.querySelector('.contact-container');

toggleContactButton.addEventListener('click', () => {
    const isVisible = contactContainer.style.display === 'block';
    contactContainer.style.display = isVisible ? 'none' : 'block';
    toggleContactButton.textContent = isVisible ? 'Show Contact Me' : 'Hide Contact Me';
});