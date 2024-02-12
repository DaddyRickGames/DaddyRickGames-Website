
First iteration will be getting the layout for the pages created. With the right css and class naming we should be able to transfer it to each page to keep it consistent.

Create the javascript scripting for the setting cogwheel to open up the accessibility settings where js will be able to toggle and save the option for dark mode on or off.

I will be creating the desktop full wide version first
Expected results should be comfortable to look at nothing over flowing
aesthetically pleasing text constrained image fits in the section field
staggered just enough 

I will use ChatGPT to help me get this started then keep documenting and implementing to get the home page correct then create the other pages using the same css and javascript



First iteration laid out ok.
they were all in a row 3 rows 2 were filled with 4 sections and the last row had 2 sections.

I then went on to make sure the accessibility settings was working correctly. 
As for the usual it was not, after a few iterations managed to get the cog wheel and the words settings to be on the menu bar.
The check box for turning on and off dark mode the text was the same color as the background color.
Fixed it by changing it to be white.
There are fixes needed with it still as when I move the cursor off the setting/cog wheel after clicking it closes and leaves the menu open which I need the words settings to stay active while the menu is open.
Need to get the check box on the same line as the words.

Went on and staggered the sections by using section:nth(even) and odd to move odd numbered sections to the left and even to the right. Adjusted max width and padding for them for the aesthetics 
I added a dark mode and light mode shadow to each section even and odd side so the shadows can be on the inside bottom of each section

Added my banner to the top of the website.

Next to do is to create each page.
detail the text for each sections.
Add images
Add Links