const nameField = document.querySelector('#name-field');
const surnameField = document.querySelector('#surname-field');
const emailField = document.querySelector('#email-field');
const phoneField = document.querySelector('#phone-field');
const innField = document.querySelector('#inn-field');

const nameFieldError = document.querySelector('#name-field-error');
const surnameFieldError = document.querySelector('#surname-field-error');
const emailFieldError = document.querySelector('#email-field-error');
const phoneFieldError = document.querySelector('#phone-field-error');
const innFieldError = document.querySelector('#inn-field-error');

const submit = document.querySelector('#submit');

const nameFieldValidation = (event) => {
  nameFieldError.style.display = 'none';
  let error = false;

  if (!nameField.value) {
    if (event !== 'input') {
      nameFieldError.style.display = 'block';
      nameField.classList.add('invalid');
      nameFieldError.textContent = 'Укажите имя';
      nameField.style.color = '#F55123';
      nameField.style.borderBottomColor = '#F55123';
      nameField.style.setProperty('--placeholder', '#F55123');
    }
    error = true;
  }

  if (event === 'input') {
    if (error) {
      nameFieldError.style.display = 'block';
      nameField.classList.add('invalid');
      nameField.style.color = '#F55123';
      nameField.style.borderBottomColor = '#F55123';
      nameField.style.setProperty('--placeholder', '#F55123');
    } else {
      nameFieldError.style.display = 'none';
      nameField.classList.remove('invalid');
      nameField.style.color = '#757575';
      nameField.style.borderBottomColor = '#9797AF';
      nameField.style.setProperty('--placeholder', '#9797AF');
    }
  }
}

const surnameFieldValidation = (event) => {
  surnameFieldError.style.display = 'none';
  let error = false;

  if (!surnameField.value) {
    if (event !== 'input') {
      surnameFieldError.style.display = 'block';
      surnameField.classList.add('invalid');
      surnameFieldError.textContent = 'Введите фамилию';
      surnameField.style.color = '#F55123';
      surnameField.style.borderBottomColor = '#F55123';
      surnameField.style.setProperty('--placeholder', '#F55123');
    }

    error = true;
  }

  if (event === 'input') {
    if (error) {
      surnameFieldError.style.display = 'block';
      surnameField.classList.add('invalid');
      surnameField.style.color = '#F55123';
      surnameField.style.borderBottomColor = '#F55123';
      surnameField.style.setProperty('--placeholder', '#F55123');
    } else {
      surnameFieldError.style.display = 'none';
      surnameField.classList.remove('invalid');
      surnameField.style.color = '#757575';
      surnameField.style.borderBottomColor = '#9797AF';
      surnameField.style.setProperty('--placeholder', '#9797AF');
    }
  }
}

const emailFieldValidation = (event) => {
  const regExpEmail = /\S+@\S+\.\S+/;
  emailFieldError.style.display = 'none';


  let error = false;

  if (!regExpEmail.test(emailField.value)) {
    if (event !== 'input') {
      emailFieldError.style.display = 'block';
      emailField.classList.add('invalid');
      emailFieldError.textContent = 'Проверьте адрес электронной почты';
      emailField.style.color = '#F55123';
      emailField.style.borderBottomColor = '#F55123';
      emailField.style.setProperty('--placeholder', '#F55123');
    }
    error = true;
  }

  if (!emailField.value) {
    if (event !== 'input') {
      emailFieldError.style.display = 'block';
      emailField.classList.add('invalid');
      emailFieldError.textContent = 'Укажите электронную почту';
      emailField.style.color = '#F55123';
      emailField.style.borderBottomColor = '#F55123';
      emailField.style.setProperty('--placeholder', '#F55123');
    }
    error = true;
  }

  if (event === 'input') {
    if (error) {
      emailFieldError.style.display = 'block';
      emailField.classList.add('invalid');
      emailField.style.color = '#F55123';
      emailField.style.borderBottomColor = '#F55123';
      emailField.style.setProperty('--placeholder', '#F55123');
    } else {
      emailFieldError.style.display = 'none';
      emailField.classList.remove('invalid');
      emailField.style.color = '#757575';
      emailField.style.borderBottomColor = '#9797AF';
      emailField.style.setProperty('--placeholder', '#9797AF');
    }
  }
}

const phoneFieldValidation = (event) => {
  const regExpPhone = /^\+?\d{1}\s?\d{3}\s?\d{2}\s?\d{2}$/;

  let error = false;

  if (!regExpPhone.test(phoneField.value)) {
    if (event !== 'input') {
      phoneFieldError.style.display = 'block';
      phoneField.classList.add('invalid');
      phoneFieldError.textContent = 'Формат: +9 999 99 99';
      phoneField.style.color = '#F55123';
      phoneField.style.borderBottomColor = '#F55123';
      phoneField.style.setProperty('--placeholder', '#F55123');
    }
    error = true;
  }

  if (!phoneField.value) {
    if (event !== 'input') {
      phoneFieldError.style.display = 'block';
      phoneField.classList.add('invalid');
      phoneFieldError.textContent = 'Укажите номер телефона';
      phoneField.style.color = '#F55123';
      phoneField.style.borderBottomColor = '#F55123';
      phoneField.style.setProperty('--placeholder', '#F55123');
    }
    error = true;
  }

  if (event === 'input') {
    if (error) {
      phoneFieldError.style.display = 'block';
      phoneField.classList.add('invalid');
      phoneField.style.color = '#F55123';
      phoneField.style.borderBottomColor = '#F55123';
      phoneField.style.setProperty('--placeholder', '#F55123');
    } else {
      phoneFieldError.style.display = 'none';
      phoneField.classList.remove('invalid');
      phoneField.style.color = '#757575';
      phoneField.style.borderBottomColor = '#9797AF';
      phoneField.style.setProperty('--placeholder', '#9797AF');
    }
  }
}

const innFieldValidation = (event) => {
  const regExpInn = /^\d{14}$/;
  let error = false;

  if (!regExpInn.test(innField.value)) {
    if (event !== 'input') {
      innFieldError.style.display = 'block';
      innField.classList.add('invalid');
      innFieldError.textContent = 'Проверьте ИНН';
      innField.style.color = '#F55123';
      innField.style.borderBottomColor = '#F55123';
      innField.style.setProperty('--placeholder', '#F55123');
    }
    error = true;
  }

  if (!innField.value) {
    if (event !== 'input') {
      innFieldError.style.display = 'block';
      innField.classList.add('invalid');
      innFieldError.textContent = 'Укажите ИНН';
      innField.style.color = '#F55123';
      innField.style.borderBottomColor = '#F55123';
      innField.style.setProperty('--placeholder', '#F55123');
    }
    error = true;
  }

  if (event === 'input') {
    if (error) {
      innFieldError.style.display = 'block';
      innField.classList.add('invalid');
      innField.style.color = '#F55123';
      innField.style.borderBottomColor = '#F55123';
      innField.style.setProperty('--placeholder', '#F55123');
    } else {
      innFieldError.style.display = 'none';
      innField.classList.remove('invalid');
      innField.style.color = '#757575';
      innField.style.borderBottomColor = '#9797AF';
      innField.style.setProperty('--placeholder', '#9797AF');
    }
  }
}

nameField.addEventListener('blur', nameFieldValidation);
surnameField.addEventListener('blur', surnameFieldValidation);
emailField.addEventListener('blur', emailFieldValidation);
phoneField.addEventListener('blur', phoneFieldValidation);
innField.addEventListener('blur', innFieldValidation);

nameField.addEventListener('input', () => nameFieldValidation('input'));
surnameField.addEventListener('input', () => surnameFieldValidation('input'));
emailField.addEventListener('input', () => emailFieldValidation('input'));
phoneField.addEventListener('input', () => phoneFieldValidation('input'));
innField.addEventListener('input', () => innFieldValidation('input'));


submit.addEventListener('click', (e) => {
  e.preventDefault();
  nameFieldValidation();
  surnameFieldValidation();
  emailFieldValidation();
  phoneFieldValidation();
  innFieldValidation();
})



