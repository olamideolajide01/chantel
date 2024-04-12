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
