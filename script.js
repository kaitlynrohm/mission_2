console.log("connected 🙃");

//variables for js
const menuList = document.getElementById("menuList");
let mybutton = document.getElementById("to-top");

//nav bar responsive js
menuList.style.maxHeight = "0px";

//Variables for colour scheme changes - working
const hasColour = document.querySelectorAll(".colour"); //All elements that have a colour atribute (text)
const hasBackgroundColour = document.querySelectorAll(".background-colour"); //All elements with background colour
const hasBorderColour = document.querySelectorAll(".border-colour"); //All elements with a border colour
const linearBackground = document.querySelector("header"); //Selects the header

console.log(getComputedStyle(hasColour[0]).color);

//Creating key value pairs for the elements with styles - working

let elementColours = []; //Will have the colour of the elements in same order as hasColour has elements

for (let i = 0; i < hasColour.length; i++) {
  elementColours.push(getComputedStyle(hasColour[i]).color);
}

let elementBackgroundColours = []; //Will have the background colour of the elements in same order as hasBackgroundColour has elements

for (let i = 0; i < hasBackgroundColour.length; i++) {
  elementBackgroundColours.push(
    getComputedStyle(hasBackgroundColour[i]).backgroundColor
  );
}

let elementBorders = []; //Will have the border style of the elements in same order as hasBorder has elements

for (let i = 0; i < hasBorderColour.length; i++) {
  elementBorders.push(getComputedStyle(hasBorderColour[i]).border);
}

function togglemenu() {
  if (menuList.style.maxHeight === "0px") {
    menuList.style.maxHeight = "300px";
  } else {
    menuList.style.maxHeight = "0px";
  }
}

//To top button
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//Functions for changing colour schemes - variables at top of file
function darkMode() {
  //Switches colours so that main background is black with coloured accents
}
