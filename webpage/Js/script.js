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


function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /* Loop through a collection of all html elements: */
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        /* Search for elements with a certain attribute: */
        file = elmnt.getAttribute("getComponent");
        if (file) {
            /* Make an http request using the attribute value as the file name: */
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4) {
                    if (this.status == 200) {elmnt.innerHTML = this.responseText;}
                    if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
                    /* Remove the attribute and call this function once more: */
                    elmnt.removeAttribute("getComponent");
                    includeHTML();
                }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
            /* Exit the function: */
            return;
        }
    }
};