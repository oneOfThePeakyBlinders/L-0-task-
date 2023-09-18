
const container = document.querySelector('#delivery-container');

export const renderDeliveryHtml = (items) => {
  container.innerHTML = '';

  const newItems = items.filter((item) => item.inCart > item.inStorage);

  const renderDeliveryItems = (items) => {
    const renderDeliveryItemsSecond = () => {
      let html = '';

      newItems.forEach(item => {
        html += `
        <div class="way-to-get-images">
          <img width="40" height="56" src="${item.img}" alt="">
          ${item.inCart > 1 ? `<div class="cart-item-amount cart-item-amount-delivery">${item.inCart - item.inStorage}</div>` : ''}
        </div>`
      });

      return html;
    }

    const renderDeliveryItemsFirst = (items) => {
      let html = '';

      items.forEach(item => {
        html += `
        <div class="way-to-get-images">
          <img width="40" height="56" src="${item.img}" alt="">
          ${item.inCart > 1 ? `<div class="cart-item-amount cart-item-amount-delivery">${item.inCart > item.inStorage ? item.inStorage : item.inCart}</div>` : ''}
        </div>`
      });
      return html;
    }

    let html = `
    <div class="d-flex delivery-method-container delivery-method-details-height">
      <div class="delivery-method-details-data delivery-method-details">5—6 февраля</div>
      <div class="d-flex">
        ${renderDeliveryItemsFirst(items)}
      </div>
    </div>
    ${newItems.length ? `<div class="d-flex delivery-method-container delivery-method-details-height">
    <div class="delivery-method-details-data delivery-method-details">7—8 февраля</div>
      <div class="d-flex">
        ${renderDeliveryItemsSecond(items)}
      </div>
    </div>` : ''}`

    return html;
  }

  let html = items.length ? `
    <div class="mb-16 way-to-get-container">
      <div class="mb-20 way-to-get-title d-flex justify-content-between align-center">
        <h2>Способ доставки</h2>
        <div class="change-get-items-button">
          <button id="delivery-modal-button" class="cursor-pointer">
            Изменить
          </button>
        </div>

      </div>

      <div class="d-flex" >
        <div>
          <div class="d-flex point-of-issue delivery-method-container">
            <div class="delivery-method-details">Пункт выдачи</div>
            <div id="total-address">
              Бишкек, улица Ахматбека Суюмбаева, 12/1 <br>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M6.69769 1.14922C6.43817 0.528396 5.56198 0.528387 5.30244 1.14919L6.69769 1.14922ZM5.30244 1.14919L4.14719 3.90977L1.19202 4.16613C0.519264 4.22467 0.262282 5.05966 0.759713 5.49464L3.00514 7.45915L2.33207 10.3824C2.18436 11.0238 2.87792 11.5567 3.46133 11.2023L6.00032 9.65611L8.53797 11.2015C9.12269 11.5588 9.81568 11.0227 9.66861 10.3826L8.99549 7.45915L11.2402 5.49537C11.7385 5.05961 11.4793 4.22519 10.8083 4.16667L7.85294 3.91029L6.69769 1.14922"
                  fill="#FF970D" />
              </svg>
              <span class="fz-13">4.99 &nbsp Ежедневно с 10 до 21</span>
            </div>
          </div>
          <div class="d-flex cost-of-delivery delivery-method-container">
            <div class="delivery-method-details">Стоимость доставки</div>
            <div>
              Бесплатно
            </div>
          </div>
          ${renderDeliveryItems(items)}
          <div class="return-shipping way-to-get fz-13 d-flex align-center">
            <div class="price-shipping">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M1 10.9998C1 16.5226 5.47715 20.9998 11 20.9998C16.5228 20.9998 21 16.5226 21 10.9998C21 5.47691 16.5228 0.999756 11 0.999756C5.47715 0.999756 1 5.47691 1 10.9998ZM19.1818 10.9997C19.1818 15.5184 15.5187 19.1816 11 19.1816C6.48128 19.1816 2.81815 15.5184 2.81815 10.9997C2.81815 6.48103 6.48128 2.81791 11 2.81791C15.5187 2.81791 19.1818 6.48103 19.1818 10.9997Z"
                  fill="url(#paint0_linear_7_2382)" />
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M6.98273 9.6548C7.40206 9.29538 8.03336 9.34394 8.39278 9.76327L10.6286 12.3717L14.6826 7.58061C15.0394 7.15901 15.6704 7.10643 16.092 7.46317C16.5136 7.81991 16.5662 8.45089 16.2094 8.8725L11.7761 14.1118C11.1795 14.817 10.0933 14.8204 9.49219 14.1191L6.87427 11.0648C6.51485 10.6455 6.56341 10.0142 6.98273 9.6548Z"
                  fill="url(#paint1_linear_7_2382)" />
                <defs>
                  <linearGradient id="paint0_linear_7_2382" x1="4" y1="1.99994" x2="11" y2="20.9998"
                    gradientUnits="userSpaceOnUse">
                    <stop stop-color="#0CD38B" />
                    <stop offset="1" stop-color="#0CB477" />
                  </linearGradient>
                  <linearGradient id="paint1_linear_7_2382" x1="9" y1="7.5" x2="10.5089" y2="15.8594"
                    gradientUnits="userSpaceOnUse">
                    <stop stop-color="#0CD38B" />
                    <stop offset="1" stop-color="#0CB477" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div style="position: relative;">
              Обратная доставка товаров на склад при отказе — <span class="cursor-pointer free-button-hover">бесплатно</span>
              <div class="hover-modal hover-modal-second">
                Если товары вам не подойдут, мы вернем <br>их обратно на склад — это бесплатно
              </div>
            </div>
          </div>
        </div>
        <div>
        </div>
      </div>
    </div>` : ''

  container.appendChild(document.createRange().createContextualFragment(html));
}
