function includeHTML(callback) {
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
                    includeHTML(callback);
                }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
            /* Exit the function: */
            return;
        }
    }
    if (callback) callback(); // Call the callback when no more dynamic content is left to include.
};