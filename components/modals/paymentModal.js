
const paymentData = [
  {
    id: 1,
    icon: './assets/icons/Frame277132129.svg',
    title: '1234 56•• •••• 1234',
    selected: true,
  },
  {
    id: 2,
    icon: './assets/icons/Frame277132129d.svg',
    title: '8954 56•• •••• 1234',
    selected: false,
  },
  {
    id: 3,
    icon: './assets/icons/Frame277132129da.svg',
    title: '1332 56•• •••• 1234',
    selected: false,
  },
  {
    id: 4,
    icon: './assets/icons/Frame2771321292.svg',
    title: '1111 56•• •••• 1234',
    selected: false,
  },
]

const container = document.getElementById('payment-modal');

const renderPaymentItems = () => {
  let html = '';

  paymentData.forEach(item => {
    html += `
      <div class="d-flex mb-16 align-center">
        <div data-id="${item.id}" class="radio radio-payment cursor-pointer">
          <div class="radio-inner ${item.selected ? 'radio-display' : ''}">
            <div class="radio-inner-active"></div>
          </div>
        </div>
        <img src="${item.icon}" alt="">
        <div>${item.title}</div>
      </div>`
  })

  return html;
}

const renderPaymentModal = () => {
  let html = `
  <div class="modal-wrapper" id="payment-modal-display">
      <div class="modal modal-payment">
      <div class="payment-modal-flex-container">
        <div>
          <div class="d-flex justify-content-between align-center">
            <h2 class="modal-title">Способ оплаты</h2>
            <svg id="close-modal-button" class="change-get-items-button cursor-pointer" width="16" height="15"
              viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M0.929612 13.1568C0.539088 13.5473 0.539088 14.1805 0.929612 14.571C1.32014 14.9615 1.9533 14.9615 2.34383 14.571L8.00085 8.91399L13.658 14.5711C14.0485 14.9616 14.6817 14.9616 15.0722 14.5711C15.4627 14.1806 15.4627 13.5474 15.0722 13.1569L9.41506 7.49978L15.0717 1.84309C15.4623 1.45257 15.4623 0.819404 15.0717 0.428879C14.6812 0.0383551 14.0481 0.0383555 13.6575 0.428879L8.00085 6.08557L2.34427 0.428985C1.95374 0.0384613 1.32058 0.038461 0.930055 0.428985C0.539531 0.81951 0.539531 1.45267 0.930055 1.8432L6.58663 7.49978L0.929612 13.1568Z"
                fill="#A0A0A4" />
            </svg>
            </div>

            <div class="modal-payment-data-container">
                ${renderPaymentItems()}
            </div>
          </div>
        <button class="add-address add-payment cursor-pointer">Выбрать</button>
      </div>
    </div>
  </div>

  `
  return html;
}

const rootRender = () => {
  container.innerHTML = '';
  container.appendChild(document.createRange().createContextualFragment(renderPaymentModal()));

  const radio = document.querySelectorAll('.radio-payment');
  const closeModalButton = document.querySelectorAll('#close-modal-button');
  const paymentModal = document.getElementById('payment-modal-display');
  const openModalButton = document.querySelectorAll('.open-payment-modal-button');
  const paymentInfoBlock = document.querySelectorAll('.payment-info-block');
  const submitButton = document.querySelector('.add-payment');

  submitButton.addEventListener('click', () => {
    paymentInfoBlock.forEach((block, index) => {

      paymentData.forEach((item) => {
        if (item.selected) {
          block.innerHTML = `
          <div class="mr-8 ${index === 1 && 'bank-icon'}">
            <img src="${item.icon}" alt="payment-icon">
          </div>
          <div class="${index === 1 ? 'lh-28' : 'mr-12'}  ">
            ${item.title}
          </div>
          ${index === 0 ? '<div>01/30</div>' : ''} `

          paymentModal.style.display = 'none';
        }
      })
    })
  })

  radio.forEach((item) => {
    item.addEventListener('click', (e) => {
      paymentData.forEach((item) => {
        item.selected = false;
      })

      paymentData[e.currentTarget.dataset.id - 1].selected = true;
      rootRender();
    })
  })

  closeModalButton.forEach(item => {
    item.addEventListener('click', () => {
      paymentModal.style.display = 'none';
    })
  })

  openModalButton.forEach(item => {
    item.addEventListener('click', () => {
      paymentModal.style.display = 'block';
    })
  })

  paymentModal.style.display = 'block';
}

rootRender()
