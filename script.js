console.log("connected 🙃");

//variables for js
const menuList = document.getElementById("menuList");
let mybutton = document.getElementById("to-top");

//nav bar responsive js
menuList.style.maxHeight = "0px";

//variable holding current colour mode of page
let mode = "normal";
//List with all hover elements (colour is text change, background is background change)
const hoverColour = document.querySelectorAll(".hover-colour");
const hoverBackgroundColour = document.querySelectorAll(
  ".hover-background-colour"
);

//Array with colour of background/text
let elementHoverColours = []; //Colour of the elements in same order as hoverColour has elements

for (let i = 0; i < hoverColour.length; i++) {
  elementHoverColours.push(getComputedStyle(hoverColour[i]).color);
}

let elementHoverBackgroundColours = []; //bg colour of the elements in same order as hoverBackgroundColour has elements

for (let i = 0; i < hoverBackgroundColour.length; i++) {
  elementHoverBackgroundColours.push(
    getComputedStyle(hoverBackgroundColour[i]).backgroundColor
  );
}

//Variables for colour scheme changes - working
const hasColour = document.querySelectorAll(".colour"); //All elements that have a colour atribute (text)
const hasBackgroundColour = document.querySelectorAll(".background-colour"); //All elements with background colour
const hasBorderColour = document.querySelectorAll(".border-colour"); //All elements with a border colour
const linearBackground = document.querySelectorAll(".linear-background"); //Selects the header

//Creating lists with styles at same place as the elements - working
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

let elementlinearBackground = []; //Will have the border style of the elements in same order as hasBorder has elements

for (let i = 0; i < linearBackground.length; i++) {
  elementlinearBackground.push(
    getComputedStyle(linearBackground[i]).background
  );
}

//console log the colours
console.log("colours", elementColours);
console.log("bg", elementBackgroundColours);
console.log("border", elementBorders);
console.log("lbg", elementlinearBackground);

//Functions
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
//================= Normal mode =================
function normalMode() {
  for (let i = 0; i < hasColour.length; i++) {
    hasColour[i].style.color = elementColours[i];
  }

  for (let i = 0; i < hasBackgroundColour.length; i++) {
    hasBackgroundColour[i].style.backgroundColor = elementBackgroundColours[i];
  }

  for (let i = 0; i < hasBorderColour.length; i++) {
    hasBorderColour[i].style.border = elementBorders[i];
  }

  for (let i = 0; i < linearBackground.length; i++) {
    linearBackground[i].style.background = elementlinearBackground[i];
  }
}

//================= Dark mode =================
function darkMode() {
  switch (mode) {
    case "dark":
      mode = "normal";
      normalMode();
      break;

    default:
      mode = "dark";
      //Switches colours so that main background is black with coloured accents
      for (let i = 0; i < hasColour.length; i++) {
        //Change text colour
        switch (elementColours[i]) {
          case "rgb(54, 7, 42)": //Body text colour
            hasColour[i].style.color = "#ffc2cc"; //Pink colour
            break;

          case "rgb(255, 194, 204)": //Top button text-colour
            hasColour[i].style.color = "black"; //The button background will be a light-ish colour
            break;

          default:
            console.log("Something went wrong - did you miss a colour?");
        }
      }

      for (let i = 0; i < hasBackgroundColour.length; i++) {
        //Change baclground colour
        switch (elementBackgroundColours[i]) {
          case "rgb(54, 7, 42)": //Top background colour
            hasBackgroundColour[i].style.backgroundColor = "#ffc2cc"; //Pink colour
            break;

          default:
            hasBackgroundColour[i].style.backgroundColor = "black"; //Makes backgrounds black
        }
      }

      for (let i = 0; i < hasBorderColour.length; i++) {
        hasBorderColour[i].style.border = "2px solid #f8b6a0";
      }

      for (let i = 0; i < linearBackground.length; i++) {
        linearBackground[i].style.background = "black";
      }
      break;
  }
}

//================= Invert mode =================
function invertMode() {
  switch (mode) {
    case "invert":
      mode = "normal";
      normalMode();
      break;

    default:
      mode = "invert";
      //Switches colours so that main background is black with coloured accents
      for (let i = 0; i < hasColour.length; i++) {
        //Change text colour
        switch (elementColours[i]) {
          case "rgb(54, 7, 42)": //Body text colour
            hasColour[i].style.color = "#c9f8d5";
            break;

          case "rgb(255, 194, 204)": //Top button text-colour
            hasColour[i].style.color = "003d33";
            break;

          default:
            console.log("Something went wrong - did you miss a colour?");
        }
      }

      for (let i = 0; i < hasBackgroundColour.length; i++) {
        //Change baclground colour
        switch (elementBackgroundColours[i]) {
          case "rgb(54, 7, 42)": //Top background colour
            hasBackgroundColour[i].style.backgroundColor = "#c9f8d5";
            break;

          case "rgb(165, 204, 243)":
            hasBackgroundColour[i].style.backgroundColor = "#5a330c";
            break;

          case "rgb(248, 182, 160)":
            hasBackgroundColour[i].style.backgroundColor = "#f8b6a0";
            break;

          case "rgb(241, 232, 184)":
            hasBackgroundColour[i].style.backgroundColor = "#0e1747";
            break;

          case "rgb(255, 194, 204)":
            hasBackgroundColour[i].style.backgroundColor = "#003d33";
            break;

          default:
            console.log("Something went wrong!");
        }
      }

      for (let i = 0; i < hasBorderColour.length; i++) {
        switch (elementBackgroundColours[i]) {
          case "2px solid rgb(248, 182, 160)":
            hasBackgroundColour[i].style.border = "#07495f";
            break;

          case "2px solid rgb(54, 7, 42)":
            hasBackgroundColour[i].style.border = "#c9f8d5";
            break;

          default:
            console.log("Something went wrong!");
        }
      }

      for (let i = 0; i < linearBackground.length; i++) {
        linearBackground[i].style.background =
          "rgba(0, 0, 0, 0) linear-gradient(#0e1747, #003d33, #5a330c, #07495f) repeat scroll 0% 0% / auto padding-box border-box";
      }
      break;
  }
}

//================= Hover functions =================

//function for hover (buttons and links)
function modeHover(event) {
  switch (mode) {
    case "normal":
      // Check for class
      if (event.target.classList.contains("hover-colour")) {
        //If the style being changed is colour
        event.target.style.color = "#ff4766";
      } else if (event.target.classList.contains("hover-background-colour")) {
        //What colour is the background changing to.
        switch (event.target.style.backgroundColor) {
          case "rgb(248, 182, 160)":
            event.target.style.backgroundColor = "#fc9776";
            break;

          case "rgb(54, 7, 42)":
            event.target.style.backgroundColor = "#86156a";
            break;
        }
      }
      break;

    case "dark":
      // Check for class
      if (event.target.classList.contains("hover-colour")) {
        //If the style being changed is colour
        event.target.style.color = "#fc9776";
      } else if (event.target.classList.contains("hover-background-colour")) {
        //What colour is the background changing to.
        switch (event.target.style.backgroundColor) {
          case "rgb(255, 194, 204)":
            event.target.style.backgroundColor = "#ff8c9f";
            break;

          default:
            event.target.style.backgroundColor = "#444444";
            break;
        }
      }
      break;
  }
}

//For when the mouse moves off elements
function modeUnhover(event) {
  switch (mode) {
    case "normal":
      // Check for class
      if (event.target.classList.contains("hover-colour")) {
        //If the style being changed is colour
        event.target.style.color = "#36072a";
      } else if (event.target.classList.contains("hover-background-colour")) {
        //What colour is the background changing to.
        switch (event.target.style.backgroundColor) {
          case "rgb(252, 151, 118)":
            event.target.style.backgroundColor = "#f8b6a0";
            break;

          case "rgb(134, 21, 106)":
            event.target.style.backgroundColor = "#36072a";
            break;
        }
      }
      break;

    case "dark":
      // Check for class
      if (event.target.classList.contains("hover-colour")) {
        //If the style being changed is colour
        event.target.style.color = "#ffc2cc";
      } else if (event.target.classList.contains("hover-background-colour")) {
        //What colour is the background changing to.
        switch (event.target.style.backgroundColor) {
          case "rgb(255, 140, 159)":
            event.target.style.backgroundColor = "#ffc2cc";
            break;

          default:
            event.target.style.backgroundColor = "black";
            break;
        }
      }
      break;
  }
}

for (let i = 0; i < hoverColour.length; i++) {
  hoverColour[i].addEventListener("mouseover", modeHover);
  hoverColour[i].addEventListener("mouseout", modeUnhover);
}

for (let i = 0; i < hoverBackgroundColour.length; i++) {
  hoverBackgroundColour[i].addEventListener("mouseover", modeHover);
  hoverBackgroundColour[i].addEventListener("mouseout", modeUnhover);
}
