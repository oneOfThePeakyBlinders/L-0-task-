import { cartItemsData, totalSum as sum } from '../assets/data/data.js';
import { renderDeliveryHtml } from './deliveryComponent.js';

const container = document.querySelector('#cart-item-container');
const checkAll = document.querySelector('.check-all');
const totalSum = document.querySelector('#totalSum');
const totalAmount = document.querySelector('#total-amount-items');
const totalDeliverySum = document.querySelector('#total-delivery-sum');
const totalDelivery = document.querySelector('#total-delivery');

let buttonDecrement = null;
let buttonIncrement = null;
let likeButton = null;
let deleteButton = null;
let checkbox = null;

const renderHtml = (cartItems) => {
  let html = ''

  cartItems.forEach(item => {
    html += `
      <div class="section-line mobile-line"></div>
        <div class="item d-flex justify-content-between">
          <div class="d-flex mobile-item">
            <div class="d-flex image-container align-center">
              <input data-id="${item.id}" ${item.selected && "checked"}  class="cursor-pointer checkbox" id="checkbox" type="checkbox">
              <img width="72" height="96" src="${item.img}" class="ml-16" alt="cart-item">  
              ${item.size ? `<div class="mobile-size">${item.size}</div>` : ''}
            </div>
            <div class="item__info">
              <div class="price-details price-details-mobile" >
              <h2 style="${item.priceDiscount * item.inCart > 99999 ? 'font-size: 16px' : ''}" class="price" >${Math.ceil(item.priceDiscount * item.inCart)}<span class="currency"> сом</span></h2>
              <div class="discount">
                <span>${Math.ceil(Math.ceil(item.price * item.inCart))} сом</span>
              </div>
              </div>
    
              <div class="item-title">${item.title}</div>
              ${item.color || item.size ? `
              <div class="details d-flex">
                ${item.color ? `<div style="font-weight: 400;line-height: 16px" class="item-color ml-16">Цвет: ${item.color}</div>` : ''}
                ${item.size ? `<div style="font-weight: 400;line-height: 16px" class="item-size">Размер: ${item.size}</div>` : ''}
              </div>` : ''}

              <div class="details-company">
                <div style="font-weight: 400;line-height: 16px;" class="details-company-title">Коледино WB</div>
                <div class="details-company-name d-flex align-center">
                  <div style="font-weight: 400;line-height: 16px;" class="h-20">
                    ${item.company}
                  </div>
                  <div class="h-20 cursor-pointer free-button-hover">
                    <svg width="20" height="20" style="margin-left: 6px;" viewBox="0 0 20 20" fill="none">
                      <circle cx=" 10" cy="10" r="7.5" stroke="#A0A0A4" />
                      <path
                        d="M9.88867 7.58691C9.62826 7.58691 9.41504 7.51042 9.24902 7.35742C9.08301 7.20117 9 7.01074 9 6.78613C9 6.55501 9.08301 6.36621 9.24902 6.21973C9.41504 6.07324 9.62826 6 9.88867 6C10.1523 6 10.3656 6.07324 10.5283 6.21973C10.6943 6.36621 10.7773 6.55501 10.7773 6.78613C10.7773 7.02051 10.6943 7.21257 10.5283 7.3623C10.3656 7.51204 10.1523 7.58691 9.88867 7.58691ZM10.6504 13.3779H9.10742V8.37793H10.6504V13.3779Z"
                        fill="#A0A0A4" />
                    </svg>
                  </div>
                  <div class="hover-modal company-position ${item.id === cartItemsData[cartItemsData.length - 1].id ? 'last-child-position' : ''}">
                    <div class="hover-modal-title">${item.companyHover}</div>
                    <div class="hover-modal-text">ОГРН: 5167746237148</div>
                    <div>129337, Москва, улица Красная Сосна, 2, корпус 1, стр. 1, помещение 2, офис 34</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="d-flex">
            <div class="amount-details ml-16">
              <div class="mobile-flex">
                <div class="buttons d-flex align-center justify-content-between">
                  <button ${item.inCart === 1 ? "disabled" : ""} data-id="${item.id}" id="buttonDecrement" class="${item.inCart === 1 ? "" : "cursor-pointer"}">−</button>
                  <span id="left" class="item-amount">${item.inCart}</span>
                  <button ${item.left === 0 ? "disabled" : ""} data-id="${item.id}" id="buttonIncrement" class="${item.left === 0 ? "" : "cursor-pointer"}">+</button>
                </div>
                ${item.left <= 2 ? `<div style="font-weight: 400;line-height: 16px;" class="left">Осталось ${item.left} шт.</div>` : ''}
              </div>
              <div class="cart-icons d-flex justify-end">
                <div data-id="${item.id}" id="like-icon" class="icons ml-16 cursor-pointer">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule=" evenodd" clip-rule="evenodd"
                      d="M3.03399 4.05857C2.26592 4.75224 1.76687 5.83284 1.99496 7.42928C2.22335 9.02783 3.26497 10.6852 4.80439 12.3478C6.25868 13.9184 8.10965 15.4437 9.99999 16.874C11.8903 15.4437 13.7413 13.9184 15.1956 12.3478C16.7351 10.6852 17.7767 9.02783 18.005 7.4293C18.2331 5.83285 17.734 4.75224 16.9659 4.05856C16.1767 3.34572 15.055 3 14 3C12.132 3 11.0924 4.08479 10.5177 4.68443C10.4581 4.7466 10.4035 4.80356 10.3535 4.85355C10.1583 5.04882 9.84169 5.04882 9.64643 4.85355C9.59644 4.80356 9.54185 4.7466 9.48227 4.68443C8.9076 4.08479 7.868 3 5.99999 3C4.94498 3 3.82328 3.34573 3.03399 4.05857ZM2.36374 3.31643C3.37372 2.40427 4.75205 2 5.99999 2C8.07126 2 9.34542 3.11257 9.99999 3.77862C10.6545 3.11257 11.9287 2 14 2C15.2479 2 16.6262 2.40428 17.6362 3.31644C18.6674 4.24776 19.2669 5.66715 18.995 7.5707C18.7233 9.47217 17.515 11.3148 15.9294 13.0272C14.3355 14.7486 12.3064 16.3952 10.3 17.9C10.1222 18.0333 9.87776 18.0333 9.69999 17.9C7.69356 16.3952 5.66446 14.7485 4.07063 13.0272C2.48506 11.3148 1.27668 9.47217 1.00501 7.57072C0.733043 5.66716 1.33253 4.24776 2.36374 3.31643Z"
                      fill="${item.like ? '#F55123' : 'black'}" />
                  </svg>
                </div>
                <div data-id="${item.id}" id="delete-icon" class="icons cursor-pointer">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule=" evenodd" clip-rule="evenodd"
                      d="M2.5 5C2.5 4.72386 2.72386 4.5 3 4.5H17C17.2761 4.5 17.5 4.72386 17.5 5C17.5 5.27614 17.2761 5.5 17 5.5H3C2.72386 5.5 2.5 5.27614 2.5 5Z"
                      fill="black" />
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M3.4584 4.5H16.5059L15.6411 15.6926C15.5405 16.9947 14.4546 18 13.1486 18H6.84639C5.54299 18 4.45829 16.9986 4.35435 15.6994L3.4584 4.5ZM4.5416 5.5L5.35117 15.6196C5.41353 16.3992 6.06435 17 6.84639 17H13.1486C13.9322 17 14.5837 16.3968 14.6441 15.6155L15.4256 5.5H4.5416Z"
                      fill="black" />
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M13 5.5H7V3.46875C7 2.65758 7.65758 2 8.46875 2H11.5312C12.3424 2 13 2.65758 13 3.46875V5.5ZM8.46875 3C8.20987 3 8 3.20987 8 3.46875V4.5H12V3.46875C12 3.20987 11.7901 3 11.5312 3H8.46875Z"
                      fill="black" />
                  </svg>
                </div>
              </div>
            </div>
            <div class="price-details" >
            <div>
                 <h2 style="${item.priceDiscount * item.inCart > 99999 ? 'font-size: 16px' : ''}" class="price" >${new Intl.NumberFormat('ru-RU').format(String(Math.ceil(item.priceDiscount * item.inCart))).replace(',', '.')}<span class="currency"> сом</span></h2>                                     
                 </div>           
              <div class="discount">
                <span class="cursor-pointer free-button-hover">${new Intl.NumberFormat('ru-RU').format(String(Math.ceil(Math.ceil(item.price * item.inCart)))).replace(',', '.')} сом</span>
                <div class="hover-modal discount-hover">
                  <div class="d-flex justify-content-between">
                    <div class="color-gray">Скидка ${Math.ceil(100 - (item.priceDiscount * 100 / item.price))}%</div>
                    <div>−${new Intl.NumberFormat('ru-RU').format(String(Math.ceil(item.price * item.inCart - item.priceDiscount * item.inCart))).replace(',', '.')} сом</div>
                  </div >
                  <div class="d-flex justify-content-between">
                    <div class="color-gray">Скидка покупателя 0%</div>
                    <div>−0 сом</div>
                  </div>
                </div >
              </div >
            </div >
          </div >
      </div > `;
  })

  return html;
}

export const rootRender = (items) => {
  container.innerHTML = '';
  container.appendChild(document.createRange().createContextualFragment(renderHtml(items)));

  buttonDecrement = document.querySelectorAll('#buttonDecrement');
  buttonIncrement = document.querySelectorAll('#buttonIncrement');
  likeButton = document.querySelectorAll('#like-icon');
  deleteButton = document.querySelectorAll('#delete-icon');
  document.querySelector('.cart-item-amount').textContent = items.filter(item => item.selected).length ? items.filter(item => item.selected).length :
    document.querySelector('.cart-item-amount').style.display = 'none';

  checkbox = document.querySelectorAll('#checkbox');

  checkbox.forEach(item => {
    item.addEventListener('click', (e) => checkboxChange(e));
  });


  buttonDecrement.forEach(item => {
    item.addEventListener('click', (e) => decrement(e));
  });
  buttonIncrement.forEach(item => {
    item.addEventListener('click', (e) => increment(e));
  });
  likeButton.forEach(item => {
    item.addEventListener('click', (e) => like(e));
  });
  deleteButton.forEach(item => {
    item.addEventListener('click', (e) => deleteItem(e));
  });
}

const checkboxChange = (e) => {
  rootRender(cartItemsData.map(item => {
    if (item.id == e.currentTarget.dataset.id) {
      item.selected = !item.selected;
    }
    return item;
  }));

  values();
  renderDeliveryHtml(cartItemsData.filter(item => item.selected));
}


const decrement = (e) => {
  rootRender(cartItemsData.map(item => {
    if (item.id == e.currentTarget.dataset.id) {
      item.left++;
      item.inCart--;
    }
    return item;
  }))

  values();
  renderDeliveryHtml(cartItemsData.filter(item => item.selected));
}


const increment = (e) => {
  rootRender(cartItemsData.map(item => {
    if (item.id == e.currentTarget.dataset.id) {
      item.left--;
      item.inCart++;
    }
    return item;
  }))

  values();
  renderDeliveryHtml(cartItemsData.filter(item => item.selected));
}

const like = (e) => {
  rootRender(cartItemsData.map(item => {
    if (item.id == e.currentTarget.dataset.id) {
      item.like = !item.like;
    }
    return item;
  }))
}

const deleteItem = (e) => {
  cartItemsData.forEach(function (el, i) {
    if (el.id == e.currentTarget.dataset.id) cartItemsData.splice(i, 1)
  })

  values();
  rootRender(cartItemsData);
  renderDeliveryHtml(cartItemsData.filter(item => item.selected));
}

checkAll.addEventListener('click', () => {
  rootRender(cartItemsData.map(item => {
    item.selected = checkAll.checked;
    return item;
  }));

  values();
  renderDeliveryHtml(cartItemsData.filter(item => item.selected));
});

window.addEventListener('resize', (e) => {
  if (window.innerWidth <= 320) {
    rootRender(cartItemsData.map(item => {
      return { ...item, title: item.title.slice(0, 44) + '...' }
    }))
  } else {
    rootRender(cartItemsData)
  }
});

const paymentCheckbox = document.querySelector('#payment-checkbox');
const submitButton = document.querySelector('#submit');

paymentCheckbox.addEventListener('change', () => {
  values()
})

const values = () => {
  if (paymentCheckbox.checked) {
    submitButton.textContent = 'Оплатить ' + sum() + ' сом';
  } else {
    submitButton.textContent = 'Заказать';
  }

  totalSum.innerHTML = sum() + '<span> сом</span>';
  totalAmount.textContent = cartItemsData.reduce((acc, item) => item.selected ? acc + item.inCart : acc, 0) + ' товара';
  totalDeliverySum.textContent = new Intl.NumberFormat('ru-RU').format(String(Math.ceil(cartItemsData.reduce((acc, item) => item.selected ? acc + item.price * item.inCart : acc, 0)))).replace(',', '.') + ' сом';
  totalDelivery.textContent = '−' + new Intl.NumberFormat('ru-RU').format(Math.ceil(cartItemsData.reduce((acc, item) => item.selected ? acc + item.price * item.inCart : acc, 0) - cartItemsData.reduce((acc, item) => item.selected ? acc + item.priceDiscount * item.inCart : acc, 0))).replace(',', '.') + ' сом';
}

values()
