/*
 File: navBar.js
 Description: This JavaScript file handles navigation for the website, 
  including the functionality of a hamburger menu.
 
 Functions:
  1. Hamburger menu toggle - This opens and closes the hamburger menu on user interaction.
  2. Redirection to 'languages.html' - This function handles redirection to the 'languages' page when the 'languagesSymbol' element is clicked.
 
 Version History:
  - Version 1.0 (June 13, 2023): Initial release, complete fucntionality.
 
 Author: Seb Taylor
 */

// HAMBURGER MENU================================================
var menuToggle = document.getElementById('menuToggle');
var menu = document.getElementById('menu');
var menuIcon = document.getElementById('menuIcon');
var closeIcon = document.getElementById('closeIcon');

//show menu
menuToggle.addEventListener('click', function() {
    menu.classList.add('show');
});

//hide menu
closeIcon.addEventListener('click', function() {
    menu.classList.remove('show'); 
});

//hide menu when clicking outside of it
window.onclick = function(event) {
  if (!event.target.matches('#menuIcon')) {
    if (menu.classList.contains('show')) { //if menu is showing
      menu.classList.remove('show'); //hide menu
    }
  }
}


// NAVIGATION ===================================================
let languagesSymbol = document.getElementById('languagesSymbol');
languagesSymbol.addEventListener('click', function() {
    document.location='languages.html';
});




