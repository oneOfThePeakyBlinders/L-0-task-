
import { cartItemsData } from '../../assets/data/data.js';
import { renderDeliveryHtml } from '../deliveryComponent.js';

renderDeliveryHtml(cartItemsData.filter(item => item.selected));

const container = document.querySelector('#address-modal');
const totalAddress = document.querySelectorAll('#total-address');

const deliveryData = {
  courier: true,
  points: false,
}

const courier = [
  {
    id: 1,
    title: 'Бишкек, улица Табышалиева, 57',
    selected: false,
  },
  {
    id: 2,
    title: 'Бишкек, улица Жукеева-Пудовкина, 77/1',
    selected: false,
  },
  {
    id: 3,
    title: 'Бишкек, микрорайон Джал, улица Ахунбаева Исы, 67/1',
    selected: false,
  },
]

const points = [
  {
    id: 1,
    title: 'г. Бишкек, микрорайон Джал, улица Ахунбаева Исы, д. 67/1',
    selected: true,
  },
  {
    id: 2,
    title: 'г. Бишкек, микрорайон Джал, улица Ахунбаева Исы, д. 67/1',
    selected: false,
    grade: 4.99,
  },
  {
    id: 3,
    title: 'г. Бишкек, улица Табышалиева, д. 57',
    selected: false,
    grade: 4.99,
  },
]

const renderAddresses = (obj) => {
  let html = '';

  obj.courier && courier.forEach(item => {
    html += `
    <div class="d-flex justify-content-between address-item">
      <div class="d-flex">
        <div>
          <div data-id="${item.id}" class="radio radio-delivery cursor-pointer">
          <div class="radio-inner ${item.selected ? 'radio-display' : ''}">
            <div class="radio-inner-active"></div>
          </div>
          </div>
        </div>
        <div class="address-title">
          ${item.title}
        </div>
      </div>
      <div>
        <svg data-id="${item.id}" class="icons cursor-pointer delete-icon-address" width="20" height="20" viewBox="0 0 20 20" fill="none">
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
    `})

  obj.points && points.forEach(item => {
    html += `
    <div class="d-flex justify-content-between address-item">
      <div>
        <div class="d-flex">
        <div>
          <div data-id="${item.id}" class="radio radio-delivery cursor-pointer">
          <div class="radio-inner ${item.selected ? 'radio-display' : ''}">
            <div class="radio-inner-active"></div>
          </div>
          </div>
        </div>
        <div class="address-title">
          ${item.title}
          <div>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M6.69769 1.14922C6.43817 0.528396 5.56198 0.528387 5.30244 1.14919L6.69769 1.14922ZM5.30244 1.14919L4.14719 3.90977L1.19202 4.16613C0.519264 4.22467 0.262282 5.05966 0.759713 5.49464L3.00514 7.45915L2.33207 10.3824C2.18436 11.0238 2.87792 11.5567 3.46133 11.2023L6.00032 9.65611L8.53797 11.2015C9.12269 11.5588 9.81568 11.0227 9.66861 10.3826L8.99549 7.45915L11.2402 5.49537C11.7385 5.05961 11.4793 4.22519 10.8083 4.16667L7.85294 3.91029L6.69769 1.14922" fill="#FF970D"/>
            </svg>
            ${item.grade ? `<span class="grade">${item.grade}</span>` : ''}
            <span class="grade grade-text color-gray">Пункт выдачи</span>
          </div>
        </div>
      </div>
    </div>
      
    <div>
      <svg data-id="${item.id}" class="icons cursor-pointer delete-icon-address" width="20" height="20" viewBox="0 0 20 20" fill="none">
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
    `})

  return html;
}

const renderModals = (obj) => {
  let html = `
  <div id="delivery-modal" class="modal-wrapper">
    <div class="modal">
        <div class="info-container">
          <div>
            <div class="payment-recipient-title">
            <div class="d-flex justify-content-between align-center">
                <h2 class="modal-title">Способ доставки</h2>
                <svg id="close-modal-button" class="change-get-items-button cursor-pointer" width="16" height="15"
                  viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M0.929612 13.1568C0.539088 13.5473 0.539088 14.1805 0.929612 14.571C1.32014 14.9615 1.9533 14.9615 2.34383 14.571L8.00085 8.91399L13.658 14.5711C14.0485 14.9616 14.6817 14.9616 15.0722 14.5711C15.4627 14.1806 15.4627 13.5474 15.0722 13.1569L9.41506 7.49978L15.0717 1.84309C15.4623 1.45257 15.4623 0.819404 15.0717 0.428879C14.6812 0.0383551 14.0481 0.0383555 13.6575 0.428879L8.00085 6.08557L2.34427 0.428985C1.95374 0.0384613 1.32058 0.038461 0.930055 0.428985C0.539531 0.81951 0.539531 1.45267 0.930055 1.8432L6.58663 7.49978L0.929612 13.1568Z"
                    fill="#A0A0A4" />
                </svg>
              </div>
            </div>
            <div class="d-flex justify-content-between align-center">
              <button id="points-id" class="modal-button ${obj.points ? 'modal-button-active' : ''} cursor-pointer">В
                пункт выдачи</button>
              <button id="courier-id"
                class="modal-button ${obj.courier ? 'modal-button-active' : ''} cursor-pointer">Курьером</button>
            </div>
            <div>
              <p class="modal-subtitle">Мои адреса</p>
                ${renderAddresses(obj)}
            </div>
          </div>
          <button class="add-address cursor-pointer">Выбрать</button>
          </div>
      </div>
    </div>`
  return html;
}

const rootRender = (obj) => {
  container.innerHTML = '';
  container.appendChild(document.createRange().createContextualFragment(renderModals(obj)));

  const courierButton = document.querySelector('#courier-id');
  const pointsButton = document.querySelector('#points-id');
  const radio = document.querySelectorAll('.radio-delivery');
  const deleteIconAddress = document.querySelectorAll('.delete-icon-address');
  const submit = document.querySelector('.add-address');

  courierButton.addEventListener('click', () => {
    obj.courier = true;
    obj.points = false;
    rootRender(obj);
  })

  pointsButton.addEventListener('click', () => {
    obj.courier = false;
    obj.points = true;
    rootRender(obj);
  })

  radio.forEach((item) => {
    item.addEventListener('click', (e) => {
      if (obj.courier) {
        courier.forEach((item, i) => {
          item.selected = false;

          if (item.id == e.currentTarget.dataset.id) {
            item.selected = true;
          }
        })

        rootRender(obj);
      }

      if (obj.points) {
        points.forEach((item) => {
          item.selected = false;

          if (item.id == e.currentTarget.dataset.id) {
            item.selected = true;
          }
        })

        rootRender(obj);
      };
    })
  })

  const deliveryButtons = document.querySelectorAll('#delivery-modal-button');
  const deliveryModal = document.querySelector('#delivery-modal');
  const closeModalButton = document.querySelectorAll('#close-modal-button');

  deliveryButtons.forEach((item) => {
    item.addEventListener('click', () => {
      deliveryModal.style.display = 'block';
    })
  })

  deleteIconAddress.forEach((item, i) => {
    item.addEventListener('click', (e) => {
      courier.forEach((item) => {
        if (obj.courier) {
          if (item.id == e.currentTarget.dataset.id) {
            courier.splice(i, 1)
            rootRender(obj);
          }
        }
      })

      points.forEach((item) => {
        if (obj.points) {
          if (item.id == e.currentTarget.dataset.id) {
            points.splice(i, 1)
            rootRender(obj);
          };
        }
      })

      console.log('click');
    })
  })

  closeModalButton.forEach(item => {
    item.addEventListener('click', () => {
      deliveryModal.style.display = 'none';
    })
  })


  submit.addEventListener('click', () => {
    totalAddress.forEach((total, index) => {
      if (obj.courier) {
        courier.forEach((item) => {
          if (item.selected) {
            total.innerHTML = `
            <div id="total-address">
              ${item.title} <br>
              ${index === 0 ? `
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.69769 1.14922C6.43817 0.528396 5.56198 0.528387 5.30244 1.14919L6.69769 1.14922ZM5.30244 1.14919L4.14719 3.90977L1.19202 4.16613C0.519264 4.22467 0.262282 5.05966 0.759713 5.49464L3.00514 7.45915L2.33207 10.3824C2.18436 11.0238 2.87792 11.5567 3.46133 11.2023L6.00032 9.65611L8.53797 11.2015C9.12269 11.5588 9.81568 11.0227 9.66861 10.3826L8.99549 7.45915L11.2402 5.49537C11.7385 5.05961 11.4793 4.22519 10.8083 4.16667L7.85294 3.91029L6.69769 1.14922" fill="#FF970D"></path>
              </svg>
              <span class="fz-13">${item.grade ? item.grade : ''} &nbsp; Ежедневно с 10 до 21</span>` : '<span>5–8 фев</span>'}
            </div>`;
          }
        })
      }

      if (obj.points) {
        points.forEach((item) => {
          if (item.selected) {
            total.innerHTML = `
            <div id="total-address">
              ${item.title} <br>
              ${index === 0 ? `
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.69769 1.14922C6.43817 0.528396 5.56198 0.528387 5.30244 1.14919L6.69769 1.14922ZM5.30244 1.14919L4.14719 3.90977L1.19202 4.16613C0.519264 4.22467 0.262282 5.05966 0.759713 5.49464L3.00514 7.45915L2.33207 10.3824C2.18436 11.0238 2.87792 11.5567 3.46133 11.2023L6.00032 9.65611L8.53797 11.2015C9.12269 11.5588 9.81568 11.0227 9.66861 10.3826L8.99549 7.45915L11.2402 5.49537C11.7385 5.05961 11.4793 4.22519 10.8083 4.16667L7.85294 3.91029L6.69769 1.14922" fill="#FF970D"></path>
              </svg>
              <span class="fz-13">${item.grade ? item.grade : ''} &nbsp; Ежедневно с 10 до 21</span>` : '<span>5–8 фев</span>'}
            </div>
            `;
          }
        })
      }
    })

    deliveryModal.style.display = 'none';
  })

  deliveryModal.style.display = 'block';
}

rootRender(deliveryData);








