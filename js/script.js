let nav = document.querySelector("nav");
window.onscroll = function () {
  if (document.documentElement.scrollTop > 100) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
};

const drawer = document.getElementById("navDrawer");
drawer.style.display = "none";

// Event listener to call the function when the button is clicked
document.getElementById("openNav").addEventListener("click", showNav);
document.getElementById("closeNav").addEventListener("click", closeNav);

function showNav() {
  drawer.style.display = "block";
}
function closeNav() {
  drawer.style.display = "none";
}

const cardd = document.querySelector("#cardd");
const cardd2 = document.querySelector("#cardd2");
const cardd3 = document.querySelector("#cardd3");
const cardd4 = document.querySelector("#cardd4");
const cardd5 = document.querySelector("#cardd5");
const cardd6 = document.querySelector("#cardd6");

const cardOne = document.querySelector("#card1");
const cardTwo = document.querySelector("#card2");
const card3 = document.querySelector("#card3");
const card4 = document.querySelector("#card4");
const card5 = document.querySelector("#card5");
const card6 = document.querySelector("#card6");
const card7 = document.querySelector("#card7");
const card8 = document.querySelector("#card8");
const card9 = document.querySelector("#card9");
const card10 = document.querySelector("#card10");
const card11 = document.querySelector("#card11");
const card12 = document.querySelector("#card12");

// Add a mouseover event listener
cardd.addEventListener("mouseover", () => {
  // Change the button's background color
  cardOne.classList.add("hide");
  cardTwo.classList.add("notHide");
});

// Add a mouseout event listener
cardd.addEventListener("mouseleave", () => {
  // Change the button's background color back to its original color
  cardOne.classList.remove("hide");
  cardTwo.classList.remove("notHide");
});

// Add a mouseover event listener
cardd2.addEventListener("mouseover", () => {
  // Change the button's background color
  card3.classList.add("hide");
  card4.classList.add("notHide");
});

// Add a mouseout event listener
cardd2.addEventListener("mouseleave", () => {
  // Change the button's background color back to its original color
  card3.classList.remove("hide");
  card4.classList.remove("notHide");
});

// Add a mouseover event listener
cardd3.addEventListener("mouseover", () => {
  // Change the button's background color
  card5.classList.add("hide");
  card6.classList.add("notHide");
});

// Add a mouseout event listener
cardd3.addEventListener("mouseleave", () => {
  // Change the button's background color back to its original color
  card5.classList.remove("hide");
  card6.classList.remove("notHide");
});

// Add a mouseover event listener
cardd4.addEventListener("mouseover", () => {
  // Change the button's background color
  card7.classList.add("hide");
  card8.classList.add("notHide");
});

// Add a mouseout event listener
cardd4.addEventListener("mouseleave", () => {
  // Change the button's background color back to its original color
  card7.classList.remove("hide");
  card8.classList.remove("notHide");
});

// Add a mouseover event listener
cardd5.addEventListener("mouseover", () => {
  // Change the button's background color
  card9.classList.add("hide");
  card10.classList.add("notHide");
});

// Add a mouseout event listener
cardd5.addEventListener("mouseleave", () => {
  // Change the button's background color back to its original color
  card9.classList.remove("hide");
  card10.classList.remove("notHide");
});

// Add a mouseover event listener
cardd6.addEventListener("mouseover", () => {
  // Change the button's background color
  card11.classList.add("hide");
  card12.classList.add("notHide");
});

// Add a mouseout event listener
cardd6.addEventListener("mouseleave", () => {
  // Change the button's background color back to its original color
  card11.classList.remove("hide");
  card12.classList.remove("notHide");
});
