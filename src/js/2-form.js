const feedbackFormEl = document.querySelector('.feedback-form');
let formData = {
  email: '',
  message: '',
};

const fillFormFilds = () => {
  // перенесення з локального схов в інпути після перезавантаження
  try {
    const formDataFormLS = JSON.parse(
      localStorage.getItem('feedback-form-data')
    );

    if (formDataFormLS === null) {
      return;
    }
    formData = formDataFormLS;
    console.log(formData);
    for (const key in formDataFormLS) {
      feedbackFormEl.elements[key].value = formDataFormLS[key];
    }
  } catch (err) {
    console.log(err);
  }
};

fillFormFilds();

const onFormChange = event => {
  // деструктиризація івенту
  const { target: formFildEl } = event;

  //   запис того що написано в інпуті
  const fildValue = formFildEl.value;
  const fieldName = formFildEl.name;

  //   звернення за ключем/
  formData[fieldName] = fildValue;

  //   збереження в локальному сховищі
  localStorage.setItem('feedback-form-data', JSON.stringify(formData));
};

const onFeedbackFormSubmit = event => {
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.removeItem('feedback-form-data');
};

// подія втрати фокусу при змінні данних
feedbackFormEl.addEventListener('change', onFormChange);
feedbackFormEl.addEventListener('submit', onFeedbackFormSubmit);