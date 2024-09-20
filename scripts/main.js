// pages content
const routesContent ={
    "#home":
        "<h3>Prodigy InfoTech Web Development Internship Task 01</h3><br>" +
        "<p>Welcome to the homepage of Task O1<br>" +
        "We shall create interactive navigation menu using HTML, CSS & JavaScript.<br>" +
        "Please follow along, try navigating to other pages and try using the application on pc and small devices.</p>",

    "#about":
        "<h3>How do we implement Task 01</h3><br>" +
        "<p>The project involves creation of interactive navigation menu.<br>" +
        "It should have a fixed position, change colour when menu items.<br>" +
        "are hovered over and display consistently across all pages.<br></p>",

    "#contacts":
        "<h3>How to reach us</h3><br>" +
        "<p>" +
        "Name: Kelvin Macharia<br>" +
        "mobile: +254 700 000 ...<br>" +
        "Email: pilotkelvin@gmail.com<br>"
}

// GUI elements
const smMenuSideBar = document.querySelector(".sm-menu");
const toggleButton = document.querySelector("#toggle-button");
const closeSideBarButtons = document.querySelectorAll(".close-side-bar");
const content = document.querySelector("#main-content");

// load homepage content on initial load
window.addEventListener('load', () => {
    const currentHash = window.location.hash = ('#home');
    content.innerHTML = routesContent[currentHash];
})

// open sidebar nav menu
toggleButton.addEventListener("click", () => smMenuSideBar.style.display = "flex");
// close sider nav menu
closeSideBarButtons.forEach((button)=>
    button.addEventListener("click", () => smMenuSideBar.style.display = "none")
)
// implement SPA functionality
window.addEventListener('hashchange', () => {
    const currentHash = window.location.hash;
    content.innerHTML = routesContent[currentHash];
})