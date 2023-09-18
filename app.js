import { rootRender } from './components/cartItemsComponent.js'
import { cartItemsData } from './assets/data/data.js'

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#delivery-modal').style.display = 'none';
    document.querySelector('#payment-modal-display').style.display = 'none';

    rootRender(cartItemsData);

});