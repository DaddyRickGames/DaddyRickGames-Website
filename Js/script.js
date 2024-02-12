document.addEventListener('DOMContentLoaded', function() {
    // Initialize or reapply dark mode settings
    function initializeDarkMode() {
        const body = document.body;
        const darkModeSwitch = document.getElementById('darkMode');
        const settingsIcon = document.getElementById('accessibilitySettings');
        const darkModePanel = document.getElementById('darkModeSwitch');

        // Apply dark mode if previously enabled
        if (localStorage.getItem('darkMode') === 'enabled') {
            body.classList.add('dark-mode');
            if (darkModeSwitch) darkModeSwitch.checked = true;
        }

        // Event listener for the dark mode switch
        if (darkModeSwitch) {
            darkModeSwitch.addEventListener('change', function() {
                if (this.checked) {
                    body.classList.add('dark-mode');
                    localStorage.setItem('darkMode', 'enabled');
                } else {
                    body.classList.remove('dark-mode');
                    localStorage.setItem('darkMode', null);
                }
            });
        }

        // Toggle the dark mode panel when the settings icon is clicked
        if (settingsIcon && darkModePanel) {
            settingsIcon.addEventListener('click', function(event) {
                event.stopPropagation();
                darkModePanel.style.display = darkModePanel.style.display === 'block' ? 'none' : 'block';
            });

            // Close the dark mode panel if clicked outside
            window.addEventListener('click', function(event) {
                if (!darkModePanel.contains(event.target) && !settingsIcon.contains(event.target)) {
                    darkModePanel.style.display = 'none';
                }
            });
        }
    }

    // Load the navbar and then initialize the dark mode settings
    includeHTML(initializeDarkMode); // Ensure includeHTML is adapted to accept a callback
});