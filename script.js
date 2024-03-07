console.log("connected 🙃");

//variables for js
const menuList = document.getElementById("menuList");
let mybutton = document.getElementById("to-top");

//nav bar responsive js
menuList.style.maxHeight = "0px";

//variable holding current colour mode of page
let mode = "normal";

//query selector for non-colour elements
const modeName = document.querySelectorAll(".mode-name"); //To change the button text

// get variable colours - css variables
const root = document.querySelector(":root");
const styles = getComputedStyle(root);
const cssBackVariables = [
  "--back-colour1",
  "--back-colour2",
  "--back-colour3",
  "--back-colour4",
];
const cssHoverVariables = ["--hover-colour1", "--hover-colour2"];

//all variables
const allCssVariables = [...cssBackVariables, ...cssHoverVariables];

// Colours
const textColour = styles.getPropertyValue("--text-colour");

//Background colours
let backgroundColours = [];
for (let i = 0; i < cssBackVariables.length; i++) {
  backgroundColours.push(styles.getPropertyValue(cssBackVariables[i]));
}

//Hover colours
let hoverColours = [];
for (let i = 0; i < cssHoverVariables.length; i++) {
  hoverColours.push(styles.getPropertyValue(cssHoverVariables[i]));
}

//all colours
const allColours = [...backgroundColours, ...hoverColours];

// //List with all hover elements (colour is text change, background is background change)
// const hoverColour = document.querySelectorAll(".hover-colour");
// const hoverBackgroundColour = document.querySelectorAll(
//   ".hover-background-colour"
// );

// //Array with colour of background/text
// let elementHoverColours = []; //Colour of the elements in same order as hoverColour has elements

// for (let i = 0; i < hoverColour.length; i++) {
//   elementHoverColours.push(getComputedStyle(hoverColour[i]).color);
// }

// let elementHoverBackgroundColours = []; //bg colour of the elements in same order as hoverBackgroundColour has elements

// for (let i = 0; i < hoverBackgroundColour.length; i++) {
//   elementHoverBackgroundColours.push(
//     getComputedStyle(hoverBackgroundColour[i]).backgroundColor
//   );
// }

// //Variables for colour scheme changes - working
// const title = document.querySelector("#title"); //for title background
// const hasColour = document.querySelectorAll(".colour"); //All elements that have a colour atribute (text)
// const hasBackgroundColour = document.querySelectorAll(".background-colour"); //All elements with background colour
// const hasBorderColour = document.querySelectorAll(".border-colour"); //All elements with a border colour
// const linearBackground = document.querySelectorAll(".linear-background"); //Selects the header

// //Creating lists with styles at same place as the elements - working
// let elementColours = []; //Will have the colour of the elements in same order as hasColour has elements

// for (let i = 0; i < hasColour.length; i++) {
//   elementColours.push(getComputedStyle(hasColour[i]).color);
// }

// let elementBackgroundColours = []; //Will have the background colour of the elements in same order as hasBackgroundColour has elements

// for (let i = 0; i < hasBackgroundColour.length; i++) {
//   elementBackgroundColours.push(
//     getComputedStyle(hasBackgroundColour[i]).backgroundColor
//   );
// }
// console.log(elementBackgroundColours);
// let elementBorders = []; //Will have the border style of the elements in same order as hasBorder has elements

// for (let i = 0; i < hasBorderColour.length; i++) {
//   elementBorders.push(getComputedStyle(hasBorderColour[i]).border);
// }

// let elementlinearBackground = []; //Will have the border style of the elements in same order as hasBorder has elements

// for (let i = 0; i < linearBackground.length; i++) {
//   elementlinearBackground.push(
//     getComputedStyle(linearBackground[i]).background
//   );
// }

//Image carousel variables
let index = [0, 0, 0, 0]; //capybara, axolotl, fox, shark (indexes in that order)

const capybaraCarousel = document.querySelector("#capybara-img");
const axolotlCarousel = document.querySelector("#axolotl-img");
const foxCarousel = document.querySelector("#fox-img");
const sharkCarousel = document.querySelector("#shark-img");

const capybaraImg = [
  "img/capybara/capybara-section.jpg",
  "img/capybara/capybara-section2.jpg",
  "img/capybara/capybara-section3.jpg",
  "img/capybara/capybara-section4.jpg",
];
const capybaraInverted = [
  "img/invert-img/capybara/capybara-invert1.jpg",
  "img/invert-img/capybara/capybara-invert2.jpg",
  "img/invert-img/capybara/capybara-invert3.jpg",
  "img/invert-img/capybara/capybara-invert4.jpg",
];
//to lessen amount of code - index 0 is normal, index 1 is inverted
const capybaraImgAll = [capybaraImg, capybaraInverted];

const axolotlImg = [
  "img/axolotl/axolotl-section.jpg",
  "img/axolotl/axolotl-section2.jpg",
  "img/axolotl/axolotl-section3.jpg",
  "img/axolotl/axolotl-section4.jpg",
];
const axolotlInverted = [
  "img/invert-img/axolotl/axolotl-invert1.jpg",
  "img/invert-img/axolotl/axolotl-invert2.jpg",
  "img/invert-img/axolotl/axolotl-invert3.jpg",
  "img/invert-img/axolotl/axolotl-invert4.jpg",
];
//to lessen amount of code - index 0 is normal, index 1 is inverted
const axolotlImgAll = [axolotlImg, axolotlInverted];

const foxImg = [
  "img/fox/fox-section.jpg",
  "img/fox/fox-section2.jpg",
  "img/fox/fox-section3.jpg",
  "img/fox/fox-section4.jpg",
];
const foxInverted = [
  "img/invert-img/fox/fox-invert1.jpg",
  "img/invert-img/fox/fox-invert2.jpg",
  "img/invert-img/fox/fox-invert3.jpg",
  "img/invert-img/fox/fox-invert4.jpg",
];
//to lessen amount of code - index 0 is normal, index 1 is inverted
const foxImgAll = [foxImg, foxInverted];

const sharkImg = [
  "img/shark/shark-section.jpg",
  "img/shark/shark-section2.jpg",
  "img/shark/shark-section3.jpg",
  "img/shark/shark-section4.jpg",
];
const sharkInverted = [
  "img/invert-img/shark/shark-invert1.jpg",
  "img/invert-img/shark/shark-invert2.jpg",
  "img/invert-img/shark/shark-invert3.jpg",
  "img/invert-img/shark/shark-invert4.jpg",
];
//to lessen amount of code - index 0 is normal, index 1 is inverted
const sharkImgAll = [sharkImg, sharkInverted];

//To lessen code - has all images stored within each section
const allImg = [capybaraImgAll, axolotlImgAll, foxImgAll, sharkImgAll];

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

//Switch through images with button click
//================= Carousel both right and left =================
function newIndex(indexNum, direction) {
  switch (direction) {
    // index[indexNum] represents the index of each section
    case "left":
      index[indexNum] === 0
        ? (index[indexNum] = allImg[indexNum][imgIndex].length - 1)
        : (index[indexNum] -= 1);
      break;

    case "right":
      index[indexNum] === allImg[indexNum][imgIndex].length - 1
        ? (index[indexNum] = 0)
        : (index[indexNum] += 1);
      break;
  }
}

function carousel(section, direction) {
  switch (mode) {
    case "invert":
      imgIndex = 1;
      break;

    default:
      imgIndex = 0;
      break;
  }
  switch (section) {
    case "capybara":
      //Makes sure correct image is displayed
      newIndex(0, direction);
      //changing image displayed - index[0] is the index for capybara
      capybaraCarousel.src = allImg[0][imgIndex][index[0]];
      break;

    case "axolotl":
      //Makes sure correct image is displayed
      newIndex(1, direction);

      //changing image displayed
      axolotlCarousel.src = allImg[1][imgIndex][index[1]];
      break;

    case "fox":
      //Makes sure correct image is displayed
      newIndex(2, direction);

      //changing image displayed
      foxCarousel.src = allImg[2][imgIndex][index[2]];
      break;

    case "shark":
      //Makes sure correct image is displayed
      newIndex(3, direction);

      //changing image displayed
      sharkCarousel.src = allImg[3][imgIndex][index[3]];
      break;
  }
}

//================= Change button text =================
const capybaraText = "Dark";
const axolotlText = "Invert";
const foxText = "Bright";
const sharkText = "Cool colour";
function buttonTextChange(section, name) {
  modeName[0].innerHTML = capybaraText;
  modeName[1].innerHTML = axolotlText;
  modeName[2].innerHTML = foxText;
  modeName[3].innerHTML = sharkText;
  switch (section) {
    case "capybara":
      modeName[0].innerHTML = name;
      break;

    case "axolotl":
      modeName[1].innerHTML = name;
      break;

    case "fox":
      modeName[2].innerHTML = name;
      break;

    case "shark":
      modeName[3].innerHTML = name;
      break;
  }
}

//================= Turn images back to normal =================
function normalImg() {
  imgIndex = 0;
  title.style.background = 'url("img/capybara.jpg") center left';
  capybaraCarousel.src = allImg[0][imgIndex][index[0]];
  axolotlCarousel.src = allImg[1][imgIndex][index[1]];
  foxCarousel.src = allImg[2][imgIndex][index[2]];
  sharkCarousel.src = allImg[3][imgIndex][index[3]];
}

//Functions for changing colour schemes - variables at top of file
//================= Normal mode =================
function normalMode() {
  //Images
  normalImg();
  //Set styles back to default
  root.style.setProperty("--text-colour", "#36072a");
  //reset colours
  for (let i = 0; i < allCssVariables.length; i++) {
    root.style.setProperty(allCssVariables[i], allColours[i]);
  }
}

//================= Dark mode =================
function darkMode() {
  switch (mode) {
    case "dark":
      mode = "normal";
      buttonTextChange("capybara", "Dark"); //Changes button text
      normalMode();
      break;

    default:
      mode = "dark";
      buttonTextChange("capybara", "Normal"); //Changes button text
      normalImg();

      //Switch background colour to black change text colour - change hover colour to grey
      root.style.setProperty("--text-colour", "#ffc2cc");

      for (let i = 0; i < backgroundColours.length; i++) {
        root.style.setProperty(cssBackVariables[i], "black");
      }

      for (let i = 0; i < hoverColours.length; i++) {
        root.style.setProperty(cssHoverVariables[i], "grey");
      }
  }
}

//================= Invert mode =================
function invertMode() {
  switch (mode) {
    case "invert":
      mode = "normal";
      buttonTextChange("axolotl", "Invert"); //Changes button text
      normalMode();
      break;

    default:
      mode = "invert";
      imgIndex = 1;
      buttonTextChange("axolotl", "Normal"); //Changes button text
      //Inverts all colours

      //Images
      title.style.background =
        'url("img/invert-img/capybara-inverted.jpg") center left';
      capybaraCarousel.src = allImg[0][imgIndex][index[0]];
      axolotlCarousel.src = allImg[1][imgIndex][index[1]];
      foxCarousel.src = allImg[2][imgIndex][index[2]];
      sharkCarousel.src = allImg[3][imgIndex][index[3]];

      //Changing colours
      root.style.setProperty("--text-colour", "#c9f8d5");

      for (let i = 0; i < allCssVariables.length; i++) {
        switch (allColours[i]) {
          case "#f1e8b8": //Yellow colour
            root.style.setProperty(allCssVariables[i], "#0e1747");
            break;

          case "#ffc2cc": //Pink colour
            root.style.setProperty(allCssVariables[i], "#003d33");
            break;

          case "#a5ccf3": //blue colour
            root.style.setProperty(allCssVariables[i], "#5a330c");
            break;

          case "#f8b6a0": //peach
            root.style.setProperty(allCssVariables[i], "#07495f");
            break;

          case "#2764a0": //Blue hover
            root.style.setProperty(allCssVariables[i], "#d89b5f");
            break;
        }
      }
  }
}

//================= Bright mode =================
function brightMode() {
  switch (mode) {
    case "bright":
      mode = "normal";
      buttonTextChange("fox", "Bright"); //Changes button text
      normalMode();
      break;

    default:
      mode = "bright";
      normalImg();
      //Switches colours so that main background is black with coloured accents
      buttonTextChange("fox", "Normal"); //Changes button text

      //Changing colours
      root.style.setProperty("--text-colour", "#323031");

      for (let i = 0; i < allCssVariables.length; i++) {
        switch (allColours[i]) {
          case "#f1e8b8": //Yellow colour
            root.style.setProperty(allCssVariables[i], "#fde74c");
            break;

          case "#ffc2cc": //Pink colour
            root.style.setProperty(allCssVariables[i], "#ff5964");
            break;

          case "#a5ccf3": //Blue colour
            root.style.setProperty(allCssVariables[i], "#5da9e9");
            break;

          case "#f8b6a0": //peach colour
            root.style.setProperty(allCssVariables[i], "#379634");
            break;

          case "#2764a0": //blue hover
            root.style.setProperty(allCssVariables[i], "#376387");
            break;
        }
      }
  }
}

//================= Cool colour mode =================
function coolColourMode() {
  switch (mode) {
    case "coolColour":
      mode = "normal";
      buttonTextChange("shark", "Cool colour"); //Changes button text
      normalMode();
      break;

    default:
      mode = "coolColour";
      normalImg();
      //Switches colours so that main background is black with coloured accents
      buttonTextChange("shark", "Normal"); //Changes button text

      root.style.setProperty("--text-colour", "#031426");

      for (let i = 0; i < allCssVariables.length; i++) {
        switch (allColours[i]) {
          case "#f1e8b8": //Yellow colour
            root.style.setProperty(allCssVariables[i], "#f1e3f3");
            break;

          case "#ffc2cc": //Pink colour
            root.style.setProperty(allCssVariables[i], "#8fb8ed");
            break;

          case "#a5ccf3": //Blue colour
            root.style.setProperty(allCssVariables[i], "#62bfed");
            break;

          case "#f8b6a0": //peach colour
            root.style.setProperty(allCssVariables[i], "#c2bbf0");
            break;

          case "#2764a0": //blue hover
            root.style.setProperty(allCssVariables[i], "#315d73");
            break;
        }
      }
      break;
  }
}
