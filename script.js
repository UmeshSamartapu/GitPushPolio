// Function to switch themes
function switchTheme(theme) {
    const body = document.body;

    // Remove all theme classes
    body.classList.remove('dark-theme', 'pastel-theme', 'monochrome-theme');

    // Add selected theme class
    if (theme !== 'Light') {
        body.classList.add(theme.toLowerCase() + '-theme');
    }
}

// Create and style the palette button
const paletteButton = document.createElement('button');
paletteButton.className = 'palette-button';
paletteButton.innerText = 'Switch Palette';
document.body.appendChild(paletteButton);

// Create the dropdown menu for selecting themes
const themeDropdown = document.createElement('div');
themeDropdown.style.position = 'fixed';
themeDropdown.style.bottom = '150px';
themeDropdown.style.right = '20px';
themeDropdown.style.backgroundColor = '#fff';
themeDropdown.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
themeDropdown.style.borderRadius = '5px';
themeDropdown.style.display = 'none';

// Populate the dropdown with theme options
['Light', 'Dark', 'Pastel', 'Monochrome'].forEach(themeName => {
    const themeOption = document.createElement('div');
    themeOption.innerText = themeName;
    themeOption.style.padding = '10px 20px';
    themeOption.style.cursor = 'pointer';
    themeOption.style.borderBottom = '1px solid #ddd';
    themeOption.addEventListener('click', () => {
        switchTheme(themeName);
        themeDropdown.style.display = 'none'; // Hide dropdown after selection
    });
    themeDropdown.appendChild(themeOption);
});

// Append the dropdown to the body
document.body.appendChild(themeDropdown);

// Toggle dropdown visibility on palette button click
paletteButton.addEventListener('click', () => {
    themeDropdown.style.display = themeDropdown.style.display === 'none' ? 'block' : 'none';
});
