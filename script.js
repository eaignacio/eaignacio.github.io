/* =========================================================
   EDUARDO IGNACIO PORTFOLIO
   JavaScript
   ========================================================= */


/* =========================================================
   MOBILE NAVIGATION
   ========================================================= */

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle && navLinks) {

  menuToggle.addEventListener("click", function () {

    const isOpen = navLinks.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", isOpen);

  });


  /* Close mobile menu when a link is clicked */

  const navigationLinks = navLinks.querySelectorAll("a");

  navigationLinks.forEach(function (link) {

    link.addEventListener("click", function () {

      navLinks.classList.remove("active");

      menuToggle.setAttribute("aria-expanded", "false");

    });

  });

}


/* =========================================================
   CURRENT YEAR
   ========================================================= */

const currentYear = document.getElementById("current-year");

if (currentYear) {

  currentYear.textContent = new Date().getFullYear();

}