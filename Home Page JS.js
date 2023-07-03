const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

const newYears = "31 Jan 2022";

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

// initial call
countdown();
document.addEventListener('DOMContentLoaded', () => {
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  const cartItems = document.getElementById('cart-items');

  addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
      const product = button.parentElement;
      const productName = product.querySelector('h3').textContent;
      const productPrice = product.querySelector('p').textContent;

      const cartItem = document.createElement('li');
      cartItem.textContent = `${productName} - ${productPrice}`;
      cartItems.appendChild(cartItem);
    });
  });
});

setInterval(countdown, 1000);