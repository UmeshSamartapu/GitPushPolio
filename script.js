// Display a welcome alert when the page loads
window.onload = function() {
    alert("Welcome to Umesh Samartapu's Portfolio!");
};

// Add click event listener to the "Home" navigation item
document.getElementById('heade_nav_home').addEventListener('click', function() {
    alert('You clicked on Home!');
    // Additional logic can go here, e.g., navigating to a different section.
});

// Function to toggle between light and dark themes
function toggleTheme() {
    const body = document.body;
    const currentTheme = body.classList.toggle('dark-theme'); // Toggle class for dark theme

    // Update button text based on the theme
    const themeButton = document.getElementById('themeButton');
    if (currentTheme) {
        themeButton.innerText = 'Switch to Light Mode';
    } else {
        themeButton.innerText = 'Switch to Dark Mode';
    }
}

// Add theme toggle button dynamically
const themeButton = document.createElement('button');
themeButton.id = 'themeButton';
themeButton.innerText = 'Switch to Dark Mode';
themeButton.style.position = 'fixed';
themeButton.style.bottom = '100px';
themeButton.style.right = '20px';
themeButton.style.padding = '10px 20px';
themeButton.style.backgroundColor = '#0077cc';
themeButton.style.color = '#fff';
themeButton.style.border = 'none';
themeButton.style.borderRadius = '5px';
themeButton.style.cursor = 'pointer';

// Append the button to the body
document.body.appendChild(themeButton);

// Add event listener to the theme toggle button
themeButton.addEventListener('click', toggleTheme);
