const openMenu = document.querySelector(".single-button");
const myMenu = document.querySelector(".navbar-panel");
openMenu.addEventListener("click", () => {
  console.log('handleMenuClick');
  myMenu.classList.toggle("is-open");
});
function handleMenuClick () {
  console.log('handleMenuClick');
  myMenu.classList.toggle("is-open");
}