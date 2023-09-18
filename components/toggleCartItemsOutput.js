import { cartItemsData, totalSum } from '../assets/data/data.js'

const toggleVisible = document.querySelectorAll('#toggle-visible');
const cartItemsSection = document.querySelectorAll('.cart-items-section');
const price = document.querySelectorAll('.price');

const deliveryContainer = document.querySelector('#delivery-container');

const itemTitle = document.querySelectorAll('.item-title');
const emailInput = document.querySelector('input[type=email]');

const hiddenCartDetails = document.querySelector('#hidden-cart-details');
const menuActions = document.querySelector('#menu-actions');

price.forEach((item) => {
  if (item.textContent.length >= 10) {
    item.style.fontSize = '16px';
  }
})

let hidden = true;

toggleVisible.forEach((item, index) => {
  hiddenCartDetails.style.display = 'none';
  item.addEventListener('click', () => {
    cartItemsSection[index].classList.toggle('open');
    item.classList.toggle('rotate');

    if (index === 0) {
      if (hiddenCartDetails.style.display === 'block') {
        hiddenCartDetails.style.display = 'none';
        menuActions.style.display = 'flex';
      } else {
        hiddenCartDetails.style.display = 'block';
        menuActions.style.display = 'none';
        hiddenCartDetails.textContent = `${cartItemsData.reduce((acc, el) => {
          return el.selected ? acc + el.inCart : acc;
        }, 0)} товаров · ${totalSum()} сом `;
      }
    } else {

      if (hidden) {
        deliveryContainer.style.marginTop = '40px';
        deliveryContainer.style.transition = 'margin-top 0.5s';
        hidden = false;
      } else {
        deliveryContainer.style.marginTop = '0';
        deliveryContainer.style.transition = 'margin-top 0.5s';
        hidden = true;
      }
    }
  })
})

window.addEventListener('resize', (e) => {
  itemTitle.forEach((item) => {
    if (item.textContent.length >= 43 && window.innerWidth <= 375) {
      item.textContent = item.textContent.slice(0, 69) + '...';
    }
  })

  if (window.innerWidth <= 600) {
    emailInput.placeholder = 'Электронная почта';
  } else {
    emailInput.placeholder = 'Почта';
  }
});

