AMIRUL HAKIM PORTFOLIO STARTER

Files:
- index.html
- styles.css
- script.js

GitHub Pages:
1. Put all three files in the root of your <username>.github.io repository.
2. Settings > Pages > Deploy from a branch > main > /(root).
3. Replace placeholder contact links and resume.pdf.
4. Replace project visual gradient blocks with your own project images when ready.

To use a real image instead of a gradient project visual, replace e.g.:
<div class="project-visual visual-iot"><span>IIoT / SQL</span></div>

with:
<img class="project-image" src="assets/pt-timah-dashboard.jpg" alt="PT Timah monitoring dashboard">

Then add to CSS:
.project-image { width:100%; aspect-ratio:16/9; object-fit:cover; display:block; }

This implementation is original and only takes broad structural inspiration from the referenced portfolio website.
