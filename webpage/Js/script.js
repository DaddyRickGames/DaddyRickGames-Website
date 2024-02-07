document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;
    const darkModeSwitch = document.getElementById('darkMode');
    const settingsIcon = document.getElementById('accessibilitySettings');
    const darkModePanel = document.getElementById('darkModeSwitch');

    // Check if dark mode was previously enabled
    if (localStorage.getItem('darkMode') === 'enabled') {
        body.classList.add('dark-mode');
        darkModeSwitch.checked = true;
    }

    // Event listener for the dark mode switch
    darkModeSwitch.addEventListener('change', function() {
        if (this.checked) {
            body.classList.add('dark-mode');
            localStorage.setItem('darkMode', 'enabled');
        } else {
            body.classList.remove('dark-mode');
            localStorage.setItem('darkMode', null);
        }
    });

    // Toggle the dark mode panel when the settings icon is clicked
    settingsIcon.addEventListener('click', function(event) {
        // Prevent the click from propagating up to the window
        event.stopPropagation();
        darkModePanel.style.display = darkModePanel.style.display === 'block' ? 'none' : 'block';
    });

    // Close the dark mode panel if clicked outside
    window.addEventListener('click', function(event) {
        if (!darkModePanel.contains(event.target) && !settingsIcon.contains(event.target)) {
            darkModePanel.style.display = 'none';
        }
    });
});