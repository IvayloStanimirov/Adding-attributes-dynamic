import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  let product = document.getElementsByClassName('product')[0]
  let price = document.getElementsByClassName('price')[0].innerHTML

  product.setAttribute('data-price', price)

});
